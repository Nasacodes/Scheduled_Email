const schedule = require('node-schedule');

const nodemailer = require('nodemailer');

const moment = require('moment')

let Valentine = new schedule.RecurrenceRule();
    Valentine.month = 1; 
    Valentine.date = 14;
    Valentine.hour = 8;
    Valentine.minute = 1;
    Valentine.second = 1;

let SmtpTransport = nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            user:'gigacodes@gmail.com',
            pass:':MUST1642ang1727:',
        }
    }
)

let EmailOption = {
    from:'gigacodes@gmail.com',
    to:'granddy1820@gmail.com',
    subject:'Valentine Scheduled and Sent Successfuly!!! on Feb 14 08:01:01.am',
    text:'Without you I am nothing, with you I am everything, \n' +
        'Thank you to be my everything. Happy Valentines Day!' 
};
 


schedule.scheduleJob(Valentine, function() {
    SmtpTransport.sendMail(EmailOption, function(error, info){
        if(error)
    {
        console.log(error)
    }else
    {
        console.log('email sent successfully, Job ran on', moment().toString(), info.response);
    }
    })
})


