
exports.min = function min (array) {
  if (array === undefined || array.length === 0){
    return 0 
  }

  let minTotal = array.reduce((accumulator , currentValue) => {
    if (accumulator < currentValue ){
      return accumulator
    } else {
      return currentValue
    }
  },0);
  return minTotal ;
}



exports.max = function max (array) {
  if (array === undefined ||  array.length === 0){
    return 0 
  }
  let maxTotal = array.reduce((accumulator,currentValue ) => {
    if (accumulator > currentValue){
      return accumulator
    } else {
      return currentValue
    }

  })


  return maxTotal;
}

exports.avg = function avg (array) {
  if (array === undefined ||  array.length === 0){
    return 0 
  }
  const  total = array.reduce((total,number) => {
    return total + number;
  })
  return total / array.length;
}
