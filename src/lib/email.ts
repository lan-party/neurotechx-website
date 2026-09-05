'use server';
import { readFileSync } from "fs";
import nodemailer from "nodemailer";
import SMTPTransport from 'nodemailer/lib/smtp-transport';


const options: SMTPTransport.Options = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

function loadTemplate(fileName: string, placeholderValues: Array<[string, string]>){
    let content = readFileSync(`src/lib/templates/${fileName}`, 'utf-8') as string;

    for(const placeholderValue of placeholderValues){
        content = content.replaceAll(placeholderValue[0], placeholderValue[1]);
    }

    return content;
}

export async function sendWelcomeEmail(email: string){
    'use server';
    try{

        const transporter = nodemailer.createTransport(options);

        const htmlContent = loadTemplate("welcome.html", [['{USER_EMAIL}', email]]);

        await transporter.sendMail({
            from: `"NeuroTechX" ${process.env.SMTP_USER}`,
            to: email,
            subject: 'Welcome to NeuroTechX!',
            html: htmlContent
        });

        transporter.close();

    }catch(error){

        console.log(error);
    }
}
