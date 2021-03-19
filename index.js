const returnFirstTwoDrivers = function(drivers) {
    let array = drivers
    return array.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
    let array = drivers
    return array.slice(array.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//function createFareMultiplier(x) {
   // return function (x) {
     //   return x * x
    //} 
//}

//const fareDoubler = function(x) {
  //  return x * 2
//}

//const fareTripler = function(x) {
  //  return x * 3
//}

const createFareMultiplier = function(fareMultiplier) {
    return function(x) {
        return fareMultiplier * x
    }
}
 
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(array, func) {
    return func(array)
}

fareDoubler(2, createFareMultiplier);