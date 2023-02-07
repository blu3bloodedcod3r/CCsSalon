const nodemailer = require('nodemailer');

const testEmail = async (subject, message, sendTo, sentFrom, replyTo) => {
	// create test account (for dev only - use a real provider/service in production)
	const { user, pass } = await nodemailer.createTestAccount();
	const host = 'smtp.ethereal.email';

	// set up service used to send the email
	const transporter = nodemailer.createTransport({
		host,
		port: 587,
		secure: process.env.NODE_ENV === 'production', // this will resolve to 'false' in development
		auth: {
			user,
			pass,
		},
	});

	const options = {
		from: sentFrom,
		to: sendTo,
		replyTo,
		subject,
		html: message,
	};
	console.log(options);

	// Send email
	transporter.sendMail(options, function (err, info) {
		if (err) {
			console.log('*****ERROR');
			console.log(err);
		} else {
			console.log('email info', info);
			console.log('Message id', info.messageId);
			console.log('URL', nodemailer.getTestMessageUrl(info));
		}
	});
};

module.exports = testEmail;