
const objName = {name: "ahmed"};

//new trick on js object
function printNameObject1({objName}){
    //log the Thing (: 
    console.log(objName);
}
// the old obj is
function printNameObject2(nameObj){
    //log the Thing (: 
    console.log(nameObj.objName);
}

//test the thing
printNameObject2(objName);