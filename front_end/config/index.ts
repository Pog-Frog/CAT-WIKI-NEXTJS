import { config } from 'dotenv';

config({ path: '.env' });

export const APP_NAME = process.env.APP_NAME || 'Cat-Wiki';

export const BACK_END_DOMAIN = process.env.BACK_END_DOMAIN || 'http://127.0.0.1:8000/api';

export const ADMIN_DOMAIN = process.env.ADMIN_DOMAIN || 'http://127.0.0.1:8000';