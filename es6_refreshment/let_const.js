//Variables declared by let are only available inside the block where they're defined. 
//Variables declared by var are available throughout the function in which they're declared.
//"const" is a newer way of declaring variables that is block-scoped and cannot be reassigned.


var myname="ankit"
myname="amit"
console.log(myname);

if(myname='amit')
{
    var age=19; // We can access it outside this block
    let school="Dav public school" //We cannot access this variable outside this block
    
}
console.log(`${myname} and ${age}`);

const score=90;
// score=89;  ==> We cannot reinitialize a const
console.log(score);

let goal="Doctor";
goal="Engineer" // We can reinitialize let
console.log(goal);
