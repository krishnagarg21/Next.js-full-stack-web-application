import {resend} from "@/lib/resend";
import VerificationEmail from '../../emails/verificationemail';
import { ApiResponse } from "@/types/ApiResponse";

 export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
 ): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'AnonSpeak Verification Code',
            react: VerificationEmail({username, otp: verifyCode}),
        });

        return {success: true, message: "Successfully sent verification email"}

    } catch (emailError) {
        console.log("Error while sending verification email", emailError)
        return {success: false, message: "Failed to send email for verification"}

    }
 }