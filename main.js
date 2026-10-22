
const objName = {name: "ahmed"};

//new trick on js object
function printNameObject1({name}){
    //log the Thing (: 
    console.log(name);
}
// the old obj is
function printNameObject2(nameObj){
    //log the Thing (: 
    console.log(nameObj.name);
}

//test the thing
printNameObject2(objName);