
// Question 1

// Pseudocode

// Inputs 

// 3 user emails

// Process

// 1. Create a function that accepts an email
// 2. Inside the function, return a promise that waits 5 seconds using setTimeout and then resolves withe message "remainder sent to email"
// 3. Create an async function that waits for the promise to resolve and sends a message. When it is not resolved it catches the error when the user is not loged in.

// Output

// Reminder message to the registered user.


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


// Question2
// You want to simulate a login system that tries to log in a user. The first two attempts fail, but the third succeeds.
// Write a function tryLogin() that uses a counter and Promises.
// Use setTimeout to simulate a 1-second delay between attempts. Log "Login successful" or "Login failed after 3 attempts" based on whether login succeeds.

// Pseudocode
// 1. Initialize a variable  to store the number of attempts.
// 2. Create a loginAttempt function that increments increments the login attempts.
// 3. use setTimeout  to  wait  1 second. if attempty equals 3, it resolves with with a message "LOgin successful" else it rejects with a message "Login failed"
// 4. Create an async function that calls login loginAttempt function to loop up to 3 times, logs the attempt number, 
// message if failed and stops when login is successful or after three attemps failed
// 5. Call the async function.

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
tryLogin();

// Build a countdown timer that counts down from 5 to 0, displaying
//  one number per second using setInterval. When the countdown reaches 0, stop the interval and log "Time's up!".

// Pseudocode
// 1. Create a variable called count and set it to 5
// 2.Use setInterval to run a block of code every 1 second.
// 3. Inside the interval:
// 4. Print the current value of count decrementing by 1 , if the count ie equal to 0 stop the the interval
// then print "Time's up!" .


let count = 5;
const timer = setInterval(() => {
    console.log(count);
    count--;
    if (count < 0) {
        clearInterval(timer);
        console.log("Time's up!");
    }
}, 1000);



// 4. You are simulating a page that loads data in stages. 
// Create an async function called loadPage() that: logs "Loading header...", waits 1 second; 
// logs "Loading content...", waits 2 seconds; logs "Loading footer...", waits 1 second; and finally logs "Page fully loaded".
//  Use setTimeout inside Promises and await them in sequence.

// Pseudocode
// 1. Create a function that waits for a given time using setTimeout and logs message
// 2. Create an async function that logs "Loading header ..." after 1 second, logs "Loading content.." after 2 seconds and logs "Loading footer.." 
// after 1 more second and then logs "Page fully loaded"
// Call the async function

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

// 5You are simulating fetching stock prices with delays. Write a function fetchPrice(symbol) that returns a Promise 
// which resolves after 2 seconds with the message "Price for [symbol] retrieved". Use async/await to call it for two 
// different stocks ("AAPL" and "GOOG") and log the messages in order.

// Pseudocode
// inputs: "AAP", "GOOG"
// 1. Create a function fetchPrice that takes in symbol as a parameter.
// 2. The function waits 2 seconds using setTimeout if the symbol is not "INVALID", resolve with: Price for symbol else reject with ana error message
// 3. Create an async function that calls fetchPrice(symbol) and logs the result. 


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
