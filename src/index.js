module.exports = function check(str, bracketsConfig) {

  bracketsOpen = bracketsConfig.map((value) => value[0])
  bracketsClose = bracketsConfig.map((value) => value[1])
  repeatElements = bracketsConfig.map((value) => {
    if (value[0] === value[1]) {
      return value[0]
    } else {return ''}
  }).filter((value) => {
    if (value !== ''){
      return value
    }
  })

  let stack = []

  for (i = 0; i < str.length; i++) {
  
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];


    if (bracketsOpen.includes(currentSymbol)) {
      if (stack.length === 0) {
        stack.push(currentSymbol)
      } else if (repeatElements.includes(currentSymbol)) {
        if (currentSymbol === topElement) {
          stack.pop();
        } else {
          stack.push(currentSymbol)
          }
      } else {
        stack.push(currentSymbol)
      }
    } else {
      if (stack.length === 0) {
        return false
      }

      if (bracketsOpen[bracketsClose.indexOf(currentSymbol)] === topElement 
      && repeatElements.includes(currentSymbol) === false) {
        stack.pop();
        // console.log(stack)
      } else { return false }
    
    }
  }
  return stack.length === 0 ? true : false 

}
