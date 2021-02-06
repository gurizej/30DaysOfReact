//1.
const emptyArray = Array();

//2.
const arrayW6Elements = ["one", "two", "three", "four", "five", "six", "seven"];

//3.
console.log("3. " + arrayW6Elements.length);

//4. 
console.log("4. first item, middle item and last item respectively" );
console.log(arrayW6Elements[0]);
console.log(arrayW6Elements[3]);
console.log(arrayW6Elements[6]);

//5.
const mixedDataTypes = ["apple", "orange", 1, 2, 3, 100];
console.log("5. " + mixedDataTypes.length);

//6
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//7
console.log("7. " + itCompanies);

//8
console.log("8. " + itCompanies.length);

//9 
console.log("9. " + itCompanies[0] + " " + itCompanies[Math.round((itCompanies.length - 1) / 2)] + " " + itCompanies[itCompanies.length-1]);

//10
console.log("10. ");
for(var i=0; i<itCompanies.length; i++){
    console.log(itCompanies[i]);
}

//11
console.log("11. ");
for(var i=0; i<itCompanies.length; i++){
    const val = itCompanies[i].toUpperCase();
    console.log(val);
}

//12
console.log("12. " + itCompanies.join(", "));

//13 
if(itCompanies.includes("GameStop") != false) {
    console.log("13. " + itCompanies.includes("GameStop"));
} else {
    console.log("13. Company not found");
}

//14 
console.log("14. ");
var tempArray = itCompanies;
for(var i=0; i<itCompanies.length; i++){
    var temp = itCompanies[i].split("");
    var count = 0;
    for(var j=0; j<temp.length; j++) {
        // console.log(temp[j]);
        if(temp[j] == "o"){
            count++;
        }
        if(count == 2){
            console.log(itCompanies[i]);
        }
    }
}

//15
console.log("15. " + itCompanies.sort());

//16
console.log("16. " + itCompanies.reverse());

//17
console.log("17. " + itCompanies.slice(3, itCompanies.length-1));

//18
console.log("18. " + itCompanies.slice(0, itCompanies.length-3));

//19
tempArray = itCompanies.slice(Math.round((itCompanies.length - 1) / 2), Math.round((itCompanies.length - 1) / 2)+1);
console.log("19. " + tempArray);

//20
tempArray = itCompanies.splice(0, 1);
console.log("20. " + tempArray);

//21
tempArray =  itCompanies.splice(Math.round((itCompanies.length - 1) / 2), 1)
console.log("21. " + tempArray);

//22
console.log("22. " + itCompanies.splice(itCompanies.length-1, itCompanies.length-1));

//23
console.log("23. Nothing to show: " + itCompanies.splice());