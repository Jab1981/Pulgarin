const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
          user: "litografiamintic@outlook.es",
          pass: "fenxzewggjmcxqgr"
        }
      });
    const mensaje={
        from: "Litografia Pulgarin <litografiamintic@outlook.es>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;