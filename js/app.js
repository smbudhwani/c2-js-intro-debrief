
//a number variable
let myNumber = 50;
//checking type of my number
if (typeof myNumber !== 'number') {
   console.log('This is not a number');
}
else if ((myNumber % 3 === 0) && (myNumber % 5 === 0)) {
    console.log('GenBuzz');
}
else if (myNumber % 3 === 0) {
    console.log('Gen');
}
else if (myNumber % 5 === 0) {
    console.log('Buzz');
}

else {
    console.log('myNumber');
}

let storeItems = 'Books';
switch (storeItems){
    case 'Shoes' :
        console.log(`Shoes- $50`)
        break;
    case 'Jeans' :
            console.log(`Jeans- $25`)
            break;
    case 'Hat' :
            console.log(`Hat- $12`)
            break;    
    case 'Socks' :
            console.log(`Socks- $2`);
            break;
    default :
        console.log(`Invalid Item`); 
        break; 

}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  console.log (`random number is: ` + getRndInteger(50, 100));