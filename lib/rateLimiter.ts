/**
 * Simple in-memory rate limiter for API routes
 */
export function RateLimiter({
  limit,
  interval,
  uniqueTokenPerInterval = 500
}: {
  limit: number;
  interval: number;
  uniqueTokenPerInterval?: number;
}) {
  const tokenCache = new Map();
  const timestamps = new Map();

  return {
    check: (token: number | string, identifier: string): Promise<void> => {
      const tokenKey = `${identifier}:${token}`;
      const now = Date.now();
      
      // Clean up expired entries
      timestamps.forEach((timestamp, key) => {
        if (now - timestamp > interval) {
          timestamps.delete(key);
          tokenCache.delete(key);
        }
      });
      
      // Check and update rate limit
      let count = tokenCache.get(tokenKey) || 0;
      
      if (!timestamps.has(tokenKey)) {
        timestamps.set(tokenKey, now);
        tokenCache.set(tokenKey, 1);
        return Promise.resolve();
      }
      
      if (count >= limit) {
        return Promise.reject(new Error('Rate limit exceeded'));
      }
      
      tokenCache.set(tokenKey, count + 1);
      return Promise.resolve();
    }
  };
}
