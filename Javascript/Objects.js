//Literal way

let empdetails={
    name:"Pragyna",
    role:"Developer",
    salary:22000020,
    skills:["System design","Microservices","Monolythetic architecture","database Operations","Database design"],
    address:{
        city:"Guntur",
        PinCode:522001
    }
}
console.log(empdetails);

let emp2=new Object({
     name:"Hasini",
    role:"Developer",
    salary:22000020,
    skills:["System design","Microservices","Monolythetic architecture","database Operations","Database design"],
    address:{
        city:"Guntur",
        PinCode:522001
    }

})
console.log(emp2);
console.log("====================CRUD OPERATIONS==================");
console.log(empdetails.name);
console.log(empdetails.skills[3]);

empdetails.skills.map((s)=>{
    console.log(s);
})
console.log(empdetails.address);
empdetails.email="pragynabhupathi@gmail.com";
console.log(empdetails);

console.log("===========================Inbuilt Operations========================");
