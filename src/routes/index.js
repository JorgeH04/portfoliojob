const router = require('express').Router();
const nodemailer = require('nodemailer');

router.get('/', (req, res, next) => {
  res.render('indexesp');
});

router.get('/indexeng', (req, res, next) => {
  res.render('indexeng');
});



router.get('/proyectouno', (req, res, next) => {
  res.render('proyectos/proyectouno');
});

router.get('/proyectodos', (req, res, next) => {
  res.render('proyectos/proyectodos');
});

router.get('/proyectotres', (req, res, next) => {
  res.render('proyectos/proyectotres');
});

router.get('/proyectocuatro', (req, res, next) => {
  res.render('proyectos/proyectocuatro');
});

router.get('/proyectocinco', (req, res, next) => {
  res.render('proyectos/proyectocinco');
});

router.get('/proyectoseis', (req, res, next) => {
  res.render('proyectos/proyectoseis');
});

router.get('/proyectosiete', (req, res, next) => {
  res.render('proyectos/proyectosiete');
});

router.get('/proyectoocho', (req, res, next) => {
  res.render('proyectos/proyectoocho');
});





router.get('/projectone', (req, res, next) => {
  res.render('projects/projectone');
});

router.get('/projecttwo', (req, res, next) => {
  res.render('projects/projecttwo');
});

router.get('/projectthree', (req, res, next) => {
  res.render('projects/projectthree');
});

router.get('/projectfour', (req, res, next) => {
  res.render('projects/projectfour');
});

router.get('/projectfive', (req, res, next) => {
  res.render('projects/projectfive');
});

router.get('/projectsix', (req, res, next) => {
  res.render('projects/projectsix');
});

router.get('/projectseven', (req, res, next) => {
  res.render('projects/projectseven');
});

router.get('/projecteight', (req, res, next) => {
  res.render('projects/projecteight');
});



router.get('/sobremi', (req, res, next) => {
  res.render('sobremi');
});

router.get('/aboutme', (req, res, next) => {
  res.render('aboutme');
});



router.get('/contact', (req, res, next) => {
  res.render('contact');
}); 


router.post('/email', async (req, res) => {
    const { name, email, message } = req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
           
        </ul>
        <p>${message}</p>
    `;

    

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
     user: 'lehj09@gmail.com',
     pass: 'terremototo001'
     
   }
   });
   
   
   let mailOptions = {
    from: 'lehj09@gmail.com',
    to: 'jhessle04@gmail.com',
    subject: 'email website',
    html: contentHTML
   
   };

   

   
   transporter.sendMail(mailOptions, function(error, info){
    if (error) {
     console.log(error);
    }else{
     console.log('Email sent: ' + info.response);
    }
   });
   res.redirect('/contact');
});





module.exports = router;

