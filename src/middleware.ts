import type { MiddlewareHandler } from 'astro';

// simple rate limiter state (in-memory)
const limits: Record<string, { count: number; reset: number }> = {};
const WINDOW_MS = 60_000; // 1 minute
const MAX_PER_WINDOW = 60;

function exceedsRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = limits[ip] || { count: 0, reset: now + WINDOW_MS };
  if (now > entry.reset) {
    entry.count = 0;
    entry.reset = now + WINDOW_MS;
  }
  entry.count += 1;
  limits[ip] = entry;
  return entry.count > MAX_PER_WINDOW;
}

export const onRequest: MiddlewareHandler = async (context, next) => {
  const { request } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;

  // sólo servimos .webp (rechaza cualquier otro formato)
  if (/\.(png|jpe?g|gif|svg|bmp)$/i.test(pathname)) {
    return new Response('Formato de imagen no permitido. Use únicamente WebP.', {
      status: 403,
    });
  }

  // si se accede a una imagen, aplicamos controles adicionales
  if (/\.webp$/i.test(pathname)) {
    // bloquea hotlinking: referer distinto al propio dominio
    const referer = request.headers.get('referer');
    if (referer) {
      try {
        const r = new URL(referer);
        if (r.origin !== url.origin) {
          return new Response('Hotlinking no permitido.', { status: 403 });
        }
      } catch {
        // header malformado, rechazar para estar seguros
        return new Response('Referer inválido.', { status: 403 });
      }
    }

    // limitación de tasa por IP para mitigar descargas masivas
    const ip = request.headers.get('x-forwarded-for') ||
      request.headers.get('cf-connecting-ip') ||
      request.headers.get('x-real-ip') ||
      'unknown';

    if (exceedsRateLimit(ip)) {
      return new Response('Demasiadas peticiones, vuelva a intentarlo más tarde.', {
        status: 429,
      });
    }
  }

  return next();
};
