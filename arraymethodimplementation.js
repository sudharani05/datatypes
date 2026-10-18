let arr = ['sudha','venky',45,'joshna']
  console.log(arr.push('typescript','playwright'));
  let poppedArray = arr.pop();
  console.log(poppedArray)
  let shiftedArray = arr.shift();
  console.log(shiftedArray);
  let unshiftArray = arr.unshift('selenium','test');
  console.log(unshiftArray);
  console.log(arr); // [ 'selenium', 'test', 'venky', 45, 'joshna', 'typescript' ]
  console.log(arr.includes('venky'));// [ 'selenium', 'test', 'venky', 45, 'joshna', 'typescript' ]
  console.log(arr.indexOf('joshna'));
  console.log(arr.join('-'));
  console.log(arr.reverse());
   let arr1 = [37.76,89.90]
   console.log(arr1.sort((a,b) => (a-b)));
   
  
