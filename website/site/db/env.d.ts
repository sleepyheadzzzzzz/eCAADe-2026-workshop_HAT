declare namespace Cloudflare {
  interface Env {
    DB: D1Database;
    WORKSHOP_PASSCODE: string;
    SESSION_SECRET: string;
  }
}
