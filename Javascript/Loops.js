let arr=[10,20,30,40,50];
let str="Hello World";
//for -of loop
for(let value of arr){
    console.log(value);
}
console.log(" ");
for(let char of str){
    console.log(char);
}
console.log(" ");
//for -in loop
for(let index in arr){
    console.log(index);
}
console.log(" ");
for(let index in str){
    console.log(index);
}
console.log(" ");
//forEach loop
arr.forEach((val,ind,a)=>{
    console.log(val,"->",ind,"->",a);

})
console.log(" ");
console.log("-----------------------------------------------------------");
console.log(" ");
//Map loop
let prices=[500,102,456,584,6844,2545,746,15657,15,1000,2000,3000,4000,5000];
console.log(prices);

let discountedPrices=prices.map((x)=>{
    return x-x/10;
})
console.log(discountedPrices);

let addprices=prices.map((x)=>{
    return x+250;
})
console.log(addprices);

console.log("===========================FILTER FUNCTION======================");
let filterprices=discountedPrices.filter((x)=>{
    return x>=500 && x<=5000;
})
console.log(filterprices)

console.log("=========================REDUCE FUNCTION===========================");
const totalprice=filterprices.reduce((ac1,val)=>{
    return ac1+val;
})
console.log(totalprice);