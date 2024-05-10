//Write an asynchronous function that accepts a message string and a delay time in milliseconds. The function should log the message to the console after the specified delay time.
function message(sentence,callback){
    console.log(`My message says: ${sentence}`);
    callback();
};
function showMyMessage(){
    setTimeout(() => {
            }, 1000);
};
message("I love Happy Cows and Chicken and Chicken Wings too!!", showMyMessage,);

//You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
const user_ids = [1,2,3,4];

const Promises = new Promise((resolve,reject) => {
    user_ids.forEach(i => {
        function getUserData(id){
         if (id == i){
            resolve(`Hi your id is ${id}`);

         }
         else{
            reject(`ID number ${id} doesn't exist.`)
         }
     
    }
    getUserData(2)
})
    
});
 Promises.then(() =>{
    console.log("Your ID will be ready soon.")
 })
.catch(()=>{
    console.log("Looking for ID")
})
.finally(()=>{
    console.log("This is your ID")
});


//You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if there's an error. Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.
async function performTask(){
    try{
        console.log ('You have done well.')
    }
    catch{
      console.log ('You can do better.')
    }
 }
 async function getPerformTask(){
    try{
        await performTask();
        console.log('You have done well.');
    }
    catch(error){
        console.log(error)
        console.log('No marks found.');
    }
 };
 getPerformTask()





// // Retry Logic:
// // Scenario:
// // Write a function unstableTask that:

// // 1.Accepts a taskName and failureProbability (a number between 0 and 1).
// // 2. Returns a Promise that:
// // Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
// // Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
// // Write another function executeWithRetry that:

// // Accepts a taskName, retries, and failureProbability.
// // Uses a retry mechanism to attempt the unstableTask up to retries times.
// // Logs whether the task succeeded or failed after all attempts.

function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
    const randomValue = Math.random();
    if (randomValue > failureProbability) {
    resolve(`Task "${taskName}" completed successfully`);
    } else {
    reject(new Error(`Task "${taskName}" unsucessfull`));
    }
    });
   }

   async function executeWithRetry(taskName, retries, failureProbability) {
    for (let attempts = 2; attempt => retries; attempts++) {
    try {
    await unstableTask(taskName, failureProbability);
    console.log(`Attempt ${attempts}: Task "${taskName}" successful`);
    return;
    } catch (error) {
    console.error(`Attempt ${attempts}: ${error.message}`);
    }
    }
    console.log(`You have ${retries} unsuccessuful for "${taskName}"`);
      };
      executeWithRetry('Runtime', 2, 0);

