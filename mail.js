const send1=require('@sendgrid/mail');

// key of sendgrid account
const key='Api_KEy';

// set the key
send1.setApiKey(key);

// send the mail by sendgrid library
send1.send({
    to: 'ashoojain6@gmail.com',
    from: 'ashoojain6@gmail.com',
    subject: 'Sending Email',
    text: 'Hi Ashoo Hope you are doing well enjoy',
}).then((tt)=>{      // if things goes well then we got sent
    console.log('sent');
})
     //otherwise got error
    .catch(e=>onsole.log(e));
