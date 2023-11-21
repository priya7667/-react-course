//Arrow functions are anonymous functions i.e. without a name and not bound with an identifier


let myscore=()=>
{
    console.log(`my score is 45`);
}
myscore();

let myages=(num1,num2)=>
{
   return num1*num2;
}
console.log(myages(2,5));