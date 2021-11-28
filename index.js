
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

/* ==========  isVisitAllRooms  ==========*/

const visitAllRooms = (rooms) => {
    let keys = new Set(rooms[0]);
    for (let key of keys)
        for (let room of rooms[key])
            keys.add(room);

    let keySize = keys.size ;
    if (!keys.has(0)) keySize++;

    console.log(rooms.length);
    console.log(keySize);

    return rooms.length === keySize;
};

console.log(visitAllRooms([[1], [2], [3], []]))  //true

console.log(visitAllRooms([[1,3], [3,0,1], [2], [0]])) //false
console.log(visitAllRooms([[3], [2], [], [1]])); //true
