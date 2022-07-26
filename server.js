const app = require('./app');
const express = require('express');
const nodemailer = require('nodemailer');




app.use(express.json());
app.post('/', (req, res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        host: "mail.atom-service.pl",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: "kontakt@atom-service.pl",
          pass: "1stPassword",
        },
    })

    const mailOptions = {
        from: req.body.email,
        to: "kontakt@atom-service.pl",
        subject: "Message from",
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(error){
            console.log(error);
            res.send('error');
        } else{
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
         console.log(info.envelope);
         console.log(info.messageId);
    })
})




app.set('port', process.env.PORT || 8080);

const server = app.listen(app.get('port'), () => {
    console.log(`Listening on ${ server.address().port }`);
});


