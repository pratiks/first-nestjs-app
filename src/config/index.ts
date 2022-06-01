export const PROCORE_CLIENT_ID = "c2077e64999a1dd16cfcb2e559f6d9953957ab8c135b1a0b82e0bdc4d2ec7c60"
export const PROCORE_CLIENT_SECRET = "b06bbe80ff71b562298b6a1dedc0b0f0b1e2b832e347bde08f9cab866faa1a3a"

export const PROCORE_SA_CLIENT_ID = process.env.PROCORE_SA_CLIENT_ID;
export const PROCORE_SA_CLIENT_SECRET = process.env.PROCORE_SA_CLIENT_SECRET;

export const PROCORE_AUTH_URL = process.env.PROCORE_AUTH_URL || 'https://login-sandbox-monthly.procore.com';
export const PROCORE_API_URL = process.env.PROCORE_API_URL || 'https://api-sandbox-monthly.procore.com';

export const PROCORE_REDIRECT_URI =
  process.env.PROCORE_REDIRECT_URI || 'https://spin-back.ngrok.io/callback';

export const PROCORE_COMPANY_ID = process.env.PROCORE_COMPANY_ID || '31733';

export const PROCORE_HOST =
  process.env.PROCORE_HOST || 'https://login-sandbox-monthly.procore.com';

export const PROCORE_PROJECT_PATH =
  process.env.PROCORE_PROJECT_PATH || 'project/home';
