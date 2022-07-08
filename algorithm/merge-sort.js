// su dung de quy de sort
// dung cho array 1 phan tu

/*
  chia thanh list trai va phai
  * cu the chia nho den khi con cap hai phan tu trai phai

  * sau do merge nguoc lai

  * bat dau tu ben trai

  * tuy vao tu lon den ho hay tu nho den lon

*/

// const randomList = Array.from({length: 8}, () => Math.floor(Math.random()*10));
const list = [9,2,5,1,0,8,2,7];
console.log(list);

const mergeSort =(list) => {
  if(list.length <2) return list;

  const middle = Math.floor(list.length/2)
  const left = list.slice(0, middle);
  const right = list.slice(middle);

  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  let result = [];
  
  while(left.length && right.length) {
    left[0]<right[0]? result.push(left.shift()):result.push(right.shift())
  }
  while(left.length) result.push(left.shift());
  while(right.length) result.push(right.shift());
  return result
}

console.log(mergeSort(list))