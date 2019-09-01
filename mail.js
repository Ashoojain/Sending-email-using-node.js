const send1=require('@sendgrid/mail');

const key='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';
send1.setApiKey(key);
send1.send({
    to: 'ashoojain6@gmail.com',
    from: 'ashoojain6@gmail.com',
    subject: 'Sending Email',
    text: 'Hi Ashoo Hope you are doing well enjoy',
}).then((tt)=>{
    console.log('sent');
}).catch(e=>onsole.log(e));
