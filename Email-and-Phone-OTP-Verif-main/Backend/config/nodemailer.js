require('dotenv').config();
const nodemailer = require("nodemailer");
// Function to send email.
const sendEmail = async (email, otp) => {
    try {
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USERNAME,
                pass: process.env.PASS
            }
        });

        const mailOptions = {
            from: process.env.USERNAME,
            to: email,
            subject: "Verify your email",
            text: `Your OTP is ${otp}.\nDo not share with anyone`
        }

        const results = await transport.sendMail(mailOptions, (error, info) => {
            console.log(info);
        });
        return results;

    } catch (error) {
        return error;
    }
}

module.exports = sendEmail;