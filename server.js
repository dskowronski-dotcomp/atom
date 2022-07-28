//const app = require('./app');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const nodemailer = require('nodemailer');
const routes = require('./routes/index');

const app = express();

// app.post('/send', (req, res) => {
//     console.log('test');
// })



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// mail sender

// app.get('/', (req, res)=>{
//     res.sendFile(__dirname + '/public/contact.pug')
// })

app.use(express.json());
// app.post('/public/contact.pug', (req, res)=>{
//     console.log(req.body);

//     const transporter = nodemailer.createTransport({
//         host: "mail.atom-service.pl",
//         port: 587,
//         secure: false, // upgrade later with STARTTLS
//         auth: {
//           user: "kontakt@atom-service.pl",
//           pass: "1stPassword",
//         },
//     })

//     const mailOptions = {
//         from: req.body.email,
//         to: "kontakt@atom-service.pl",
//         subject: "Message from",
//         text: req.body.message
//     }

//     transporter.sendMail(mailOptions, (err, info) => {
//         if(error){
//             console.log(error);
//             res.send('error');
//         } else{
//             console.log('Email sent: ' + info.response);
//             res.send('success');
//         }
//          console.log(info.envelope);
//          console.log(info.messageId);
//     })
// })

// transporter.verify(function (error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });

app.use(flash());

app.use('/', routes);

module.exports = app;



app.set('port', process.env.PORT || 8080);

const server = app.listen(app.get('port'), () => {
    console.log(`Listening on ${ server.address().port }`);
});


