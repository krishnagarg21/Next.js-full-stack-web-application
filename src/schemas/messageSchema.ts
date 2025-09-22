import {xid, z} from 'zod';

export const messageSchema = z.object({
    content: z
        .string()
        .min(1, {message: "message cannot be empty"})
        .max(500, {message: "message cannot exceed 500 characters"})
})