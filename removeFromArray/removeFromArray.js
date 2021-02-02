// use REST parameter to declare several optional arguments in a function
const removeFromArray = function(input, ...requestRemove) {


let inputArray = Array.from(input); // use Array.from to convert argument to an array

// iterate over requestRemoveInt array
for (item in requestRemove) {
    let check = requestRemove[item]; 
    let foundIndex = inputArray.indexOf(check); // check index in userInput
    
    if (foundIndex === -1) { // when not found, indexOf returns -1, we need the function to do nothing here
        continue;
    } else {
        inputArray.splice(foundIndex, 1); // use splice to remove element in array    
    }
}

return inputArray;

}

module.exports = removeFromArray






