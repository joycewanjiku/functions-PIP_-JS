

// sumArray(array);

// function without parameter,  a function which make a number square
function square(){
let  num=10
let sq=num*num
console.log(sq)
}
square()

  

  
//   // function without parameter
function addTwoNumbers(){
    let numone=50
    let numtwo=40
    let sum=numone +numtwo

    console.log(sum);
}


  
//   addTwoNumbers() // a function has to be called by its name to be executed 
function printFullName(){
    let firstName="Joyce"
    let lastName="Mumbi"
    let space=""
    let fullName=firstName +space +lastName
  
  console.log(full);
}
// printfullName()

// // function with two parameters
function sumTwoNumbers(numOne,numTwo){
    let sum=numOne +numTwo
    console.log(sum);

}
sumTwoNumbers(68,90)


//   // If a function doesn't return it doesn't store data, so it should return
function sumTwoNumber(numberone,numbertwo){
    let sum= numberone +numbertwo
    return sum
}
console.log(sumTwoNumber);
  
  
//   // function declaration
function sumAllNums(){
    let sum=0
    for(let i =0; i < arguments.length; i++){

    }
    return sum
}
console.log(sumAllNums(5,8,9,3));
console.log(sumAllNums(10,20,30));

// 2. Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23
function dividingArray(number){
    if (number.length<= 1)
    return number
}
let middle=Math.floor(number,length/2)
let left=number.slice(0,middle)
let right=number.slice(middle)

return sortedArray(dividingArray(left),dividingArray(right))
function sortedArray(left,right){
    let EmptyArray=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            EmptyArray.push(left.shift)
        }else{
            EmptyArray.push(right.shift())

        }
        return[...EmptyArray,...left,...right]

    }
}
 let number=[89,90,76,87,45] 
 console.log(dividingArray(num)); 
   function bainerysearch(number,Target){
    let left=[0]
    let right=number.length-1;
    while(left<= right){
        let middle=Math.floor((right+left)/2)
        if (num[middle===Target]){
            return middle+1

        }else if(number[middle<Target]){
            left=middle+1
        }else{
            right=middle-1
        }
    }return null

   }
   let Target=45
   console.log(bainerysearch(number,Target));
    
    
  





