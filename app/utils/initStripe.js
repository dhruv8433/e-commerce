// utils/initStripe.js
import { loadStripe } from '@stripe/stripe-js';

export const stripe = await loadStripe(process.env.PUBLIC_KEY);
