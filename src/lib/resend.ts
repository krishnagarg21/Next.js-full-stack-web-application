import {Resend} from 'resend';

export const resend = new Resend(process.env.VERIFICATION_CODE_KEY);