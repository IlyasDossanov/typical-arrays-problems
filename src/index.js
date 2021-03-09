
exports.min = function min (array) {
  let minValue = 99999;
  if(array == undefined){
    return(0);
  }
  else{
  	for (var i = 0; i < array.length; i++) {
  		if(array[i] < minValue){
  			minValue = array[i];
  		}
  	}
return(parseInt(minValue));
  }
}

exports.max = function max (array) {
  if(typeof array === "object" && array !== 0){
    let maxValue = -99999;
    for(let i = 0; i< array.length; i++){
      if(maxValue < array[i]){
        maxValue = array[i]
      }
    }
    return(parseInt(maxValue))
  }
  else{
    return(0);
  }
}

exports.avg = function avg (array) {
  if(typeof array === "object" && array !== 0){
    let summury = 0;
    for(let i = 0; i<array.length; i++){
      summury+=array[i];
    }
    return(summury/array.length)
  }
  else{
    return(0);
  }
}
