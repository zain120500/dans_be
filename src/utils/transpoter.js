import nodemailer from 'nodemailer'

export const sendOtpEmail = async (email , otp) => {
  
    const html = `
    <p>Your One-time Password (OTP) is:</p>
    <h1>${otp}</h1>
    <p>The OTP valid for 15 minutes.</p>
 
    <p>If you are having any issues with your account, please don't hesitate to contact us by replying to this email.</p>
    `
    const transporter = nodemailer.createTransport({
        port: 465,               // true for 465, false for other ports
        host: "smtp.gmail.com",
           auth: {
                user: 'dendyrahmatz38@gmail.com',
                pass: 'tila eqcs bche plql',
             },
        secure: true,
    });

    transporter.sendMail({
        from : 'Zain <dendyrahmatz38@gmail.com>',
        to : `${email}`,
        subject: 'OTP for Zain e-com',
        html: html
    })
}