
const objName = {name: "ahmed"};

//new trick on js object
function printNameObject1({objName}){
    //log the Thing (: 
    console.log(objName);
}
// the old obj is
function printNameObject2(nameObj){
    //log the Thing (: 
    //make it log if param is undefined
    console.log(nameObj[Object.entries(objName)[0][0]]);
}

//test the thing 
/*printNameObject1(objName) //this wont work => undefined;
//this log by console
console.log(Object.entries(objName)[0][1]);
//try to find new way log by the function
*/

printNameObject2(objName);
console.log(objName["name"]);

// >=  worked