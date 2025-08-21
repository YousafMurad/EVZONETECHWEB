// Simple in-memory rate limiter
export function rateLimit({ limit, interval, uniqueTokenPerInterval }: {
  limit: number;
  interval: number;
  uniqueTokenPerInterval: number;
}) {
  const tokenCache = new Map();
  const tokenTimestamps = new Map();
  
  return {
    check: (token: number, key: string): Promise<void> => {
      const tokenKey = `${key}:${token}`;
      const now = Date.now();
      let tokenCount = tokenCache.get(tokenKey) || 0;
      
      // Clean up old entries
      for (const [storedKey, timestamp] of Array.from(tokenTimestamps.entries())) {
        if (now - timestamp > interval) {
          tokenTimestamps.delete(storedKey);
          tokenCache.delete(storedKey);
        }
      }
      
      // Store timestamp for new request
      if (!tokenTimestamps.has(tokenKey)) {
        tokenTimestamps.set(tokenKey, now);
        tokenCache.set(tokenKey, 1);
      } else {
        tokenCount++;
        tokenCache.set(tokenKey, tokenCount);
        
        if (tokenCount > limit) {
          const error: any = new Error('Rate limit exceeded');
          error.statusCode = 429;
          throw error;
        }
      }
      
      return Promise.resolve();
    }
  };
}
