function array(begin, end) {
    let result = [];
    for (i = begin; i <= end; i++) {
        result.push(i);                  /// .push adds an element
    }
    return result; 
}
let result= array(-4, 7);
let output= array(4,7)


console.log(result)

console.log(output)