function findMinAndMax(arr) {

    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let output = `min: ${min} index: ${arr.indexOf(min)} max: ${max} index: ${arr.indexOf(max)}`
    return output
  }
  console.log(findMinAndMax([5, 7, 4, -2, -1, 8]))
  console.log(findMinAndMax([2, -5, -4, 22, 7, 7]))