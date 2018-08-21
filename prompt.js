const prompts = require('prompts');

(async function(){
    const response = await prompts({
        type: 'text',
        name: 'value',
        message: "Pick a number",
    });
    
    const value = Number(response.value);
    if (!Number.isNaN(value)) {
        if (value < 10) {
            console.log("Small");
          } else if (value < 100) {
            console.log("Medium");
          } else {
            console.log("Large");
        }
        console.log("Your number is the square root of " + value * value);
    }
    else {
        console.log("Hey. Why didn't you give me a number?");
    }
}) ();