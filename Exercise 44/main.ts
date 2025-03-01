// Sandwiches: 
// Write a function that accepts an array of items a person wants on a sandwich. The function 
// should have one parameter that collects as many items as the function call provides, and it should 
// print a summary of the sandwich that is being ordered. Call the function three times, using a different 
// number of arguments each time

function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(singleitem =>
        console.log(singleitem)
    )
    console.log("\nNow enjoy Sandwich")
}

makeSandwich("Bread", "Butter")
makeSandwich("Chicken", "Cheese", "Egg")
makeSandwich("Bread", "Butter", "Chicken", "Tomato", "Cheese", "Egg")