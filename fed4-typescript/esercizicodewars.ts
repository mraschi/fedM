export function solution(str: string, ending: string): boolean {
    for (let i: number = str.length - ending.length, j = 0; i < str.length; ++i, ++j) {
      if (str[i] !== ending[j]) { return false; }
    }
    return true;
  }


  export function descendingOrder(n: number) {

    let arr = n.toString().split('');
    let arrNum = [];
    console.log(arr);
    for(var i = 0; i < arr.length; i++){
      arrNum.push(parseInt(arr[i]));
      console.log(arrNum)
    }
    
    let sorted = arrNum.sort(function(a, b){return b-a});
    let sorted2 = sorted.join('');
    return parseInt(sorted2);
  }
  
  descendingOrder(123456);
  









