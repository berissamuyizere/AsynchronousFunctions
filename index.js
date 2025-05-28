// You are building a system that sends email reminders to users 5 seconds after they register.
//  Create an async function sendReminder(email) that waits 5 seconds using setTimeout and then logs "Reminder sent to [email]". 
// Simulate sending a reminder to 3 users.

const register = true;

const emailReminders = (email) =>{
    return new Promise( function(resolve, reject){

    if(register){
        setTimeout(()=>{
            resolve(`Reminder sent to ${email}`);
        }, 5000)
    }
    else{
        setTimeout(()=>{
            reject("You are not registered");
        }, 5000)
    }
})};

const sendEmailAsync = async (email)=>{
    try {
        const sendEmail = await emailReminders(email);
        console.log(sendEmail)
    } catch (error) {
        console.log(error)
    }
}
sendEmailAsync("muyizereberissa@gmail.com");
sendEmailAsync("muyizereberissa22@gmail.com");
sendEmailAsync("zigama@gmail.com");