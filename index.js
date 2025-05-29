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


// You want to simulate a login system that tries to log in a user. The first two attempts fail, but the third succeeds.
//  Write a function tryLogin() that uses a counter and Promises.
//  Use setTimeout to simulate a 1-second delay between attempts. Log "Login successful" or "Login failed after 3 attempts" based on whether login succeeds.
let attempt = 0;
function loginAttempt() {
    return new Promise((resolve, reject) => {
        attempt++;
        setTimeout(() => {
            if (attempt === 3) {
                resolve("Login successful");
            } else {
                reject("Login failed");
            }
        }, 1000);
    });
}
async function tryLogin() {
    while (attempt < 3) {
        try {
            const result = await loginAttempt();
            console.log(result);
            return;
        } catch (error) {
            console.log(`Attempt ${attempt}: ${error}`);
        }
    }
    console.log("Login failed after 3 attempts");
}
// tryLogin();



// You are simulating a page that loads data in stages. 
// Create an async function called loadPage() that: logs "Loading header...", waits 1 second; 
// logs "Loading content...", waits 2 seconds; logs "Loading footer...", waits 1 second; and finally logs "Page fully loaded".
//  Use setTimeout inside Promises and await them in sequence.

const delayLog = (message, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
};
const loadPage = async () => {
    try {
        await delayLog("Loading header...", 1000);
        await delayLog("Loading content...", 2000);
        await delayLog("Loading footer...", 1000);
        console.log("Page fully loaded");
    } catch (error) {
        console.error("Error loading page:", error);
    }
};
loadPage();

// You are simulating fetching stock prices with delays. Write a function fetchPrice(symbol) that returns a Promise 
// which resolves after 2 seconds with the message "Price for [symbol] retrieved". Use async/await to call it for two 
// different stocks ("AAPL" and "GOOG") and log the messages in order.


const fetchPrice = (symbol) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (symbol === "INVALID") {
        reject(`Failed to fetch price for ${symbol}`);
      } else {
        resolve(`Price for ${symbol} retrieved`);
      }
    }, 2000);
  });
};
const getPrices = async () => {
  try {
    const priceAAPL = await fetchPrice("AAPL");
    console.log(priceAAPL);
    const priceGOOG = await fetchPrice("GOOG");
    console.log(priceGOOG);
  } catch (error) {
    console.error("Error:", error);
  }
};
getPrices();
