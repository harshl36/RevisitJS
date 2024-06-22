//Immediately Invoked Function Expression (IIFE)

(function chai() {
        console.log(`DB CONNECTED`);
})();    //The first () is used to write function in it, and the second () at last is used for execution and semicolon; is important to end the execution
        // IIFE is used to get rid of pollution caused by Global decalarion

(   (name)=> {
   console.log(`Database is Connected ${name}`);
}) ('Harsh');     //arrow function representation of IIFE

// chai() 