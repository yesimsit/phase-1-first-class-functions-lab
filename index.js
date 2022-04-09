// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

console.log(returnFirstTwoDrivers(drivers))

const returnLastTwoDrivers= function(drivers){
    return drivers.slice(-2)
}
console.log(returnLastTwoDrivers(drivers))

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(int1){
        return( int * int1 )
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

console.log(fareDoubler(9))


function selectDifferentDrivers(drivers, returnFunction){
    return returnFunction(drivers)
}