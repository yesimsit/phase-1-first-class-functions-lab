// Code your solution in this file!
const returnFirstTwoDrivers=(arr)=>{
    let  newArr=arr.slice(0,2)
    return newArr;
};
const returnLastTwoDrivers=(arr)=>{
    let newArr=arr.slice(-2)
    return newArr;
};
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(a){
    return function inner(b){
        return a*b;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function(arr,oneOfFunctions){
   return oneOfFunctions(arr)
}