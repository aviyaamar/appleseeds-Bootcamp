//1- In your own words what will this point to and why?(Note this is the global scope)

//console.log(this);
//this pointer to the window- t

//2-- name is a undefine this is pointer to window and dosent have name varabile

// const myObj = {
//     name: "Timmy",
//     greet: () => {
//     console.log(`Hello ${myObj.name}`);  
//     },
//    };
//   myObj.greet();

  const myFuncDec = function () {
    console.log(this);
   };


   const myFuncArrow = () => {
    console.log(this);
   };
   myFuncArrow();
   
   