import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "...",
    to: "doniyor.alimov28@gmail.com",
    subject: "Test email",
    react: <WelcomeTemplate name="Doniyor" />,
  });
}
