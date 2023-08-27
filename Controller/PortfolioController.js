const sendEmail = require('./sendEmail'); // Import the sendEmail function

const sendEmailController = async (req, resp) => {
  try {
    const {name, email, msg} = req.body
    const data = {
      from: `${email}`,
      to: 'extratalk349@gmail.com',
      subject: 'Test Email',
      html:`
      <h5>Detail Information</h5>
      </h5>Hi ${name}</h5>
      <h5>Email: ${email}</h5>
      <p>${msg}</p>
      `
    };

    await sendEmail(data); // Use the sendEmail function
    
    return resp.json({
      success: true,
      message: 'Your message was sent successfully',
    });
  } catch (error) {
    console.log(error);
    return resp.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

module.exports = sendEmailController;
