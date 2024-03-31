function swaps(str){

    let letter=""   ////it execute each letter independently 
    str.split("").map( char => {       //// .map iterates each element in an arrey    
                                        //// the => it defines a function that take char as input
if(char ==char.toUpperCase()){
    letter+= char.toLowerCase();
}
else{
    letter+=char.toUpperCase();
}
}                   
   )
return letter;

}
console.log(swaps('The Quick Brown Fox'))
