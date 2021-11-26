
/* =======  String Compression  ====== */

function Compression(rawString){
    let count = 0;
    let compresCount = "";

    for ( let i = 0; i < rawString.length; i++){
        count++;
        if ( rawString[i] !== rawString[i+1]){
            compresCount += rawString[i] + count;
            count = 0;
        }
    }

    return rawString > compresCount ? compresCount : rawString;
}
let a;
let rawString = "aaabbbccddd";
console.log(`Raw: ${rawString}`);
const compres = Compression(rawString);
console.log(`Compressed: ${compres}`);