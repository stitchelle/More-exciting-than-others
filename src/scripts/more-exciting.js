let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        if ((i + 1) % 3 === 0){
            console.log(buildMeUp += `${theWordArray[i]}! `)
        } else {
            console.log(buildMeUp += `${theWordArray[i]} `)
        }
        
        /*
            If the current word's place (not index) in the array
            is evenly divisible by 3, add an exclamation point
            to the end of the word and then concatenate it to
            `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
        

        // Print buildMeUp to the console
        
    }

}

addExcitement(sentence)