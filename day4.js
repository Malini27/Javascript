//ARRAY
//ONE DIMENSIONAL ARRAY
/*let arr=[1,2,3]
console.log(arr[1]);

//TWO DIMENSIONAL ARRAY
let arr1=[
    [1,2,3],
    [4,5,6]
];
console.log(arr1[1][1]);

//MULTI DIMENSIONAL ARRAY
let arr2=[
    [1,2,3,["hi","Hello"]],
    [4,5,6]
];
console.log(arr2[0][3][1])

//TO MODIFY ARRAY ELEMENTS
let arr3=[1,4,3]
arr3[1]=2
console.log(arr3[1])

//TO CONCATENATE TWO ARRAYS
let arr4=[1,2,3]
let arr5=[4,5,6]
var arr6=arr5.concat(arr4)
console.log(arr6)
console.log(arr6.sort())    //ARRAY SORTING
console.log(arr6.reverse()) //ARRAY REVERSE

//ARRAY SPLICE
let arr7=[0,1,2,3,4,5,6,7]
arr7.splice(1,3,"one","two","three")
console.log(arr7);

//ARRAY SLICE
let arr8=[0,1,2,3,4,5]
let arr9=arr8.slice(2,5)
console.log(arr9);

//SPREAD OPERATOR
let arr10=[1,2,3,4,5]
let arr11=[...arr10]//copy arr10 into arr11
arr11[2]="Three"
console.log(arr10)//changes in arr11 does not affect arr10
console.log(arr11)

//PUSH METHOD---->to add the element at last
let arr12=[0,1,2,3,4,5,6]
arr12.push(7)
console.log(arr12);
//POP METHOD--->to remove last element in a array
arr12.pop();
console.log(arr12);
//UNSHIFT METHOD----->to add the element at first
arr12.unshift(-1)
console.log(arr12);
//SHIFT METHOD------>removes 1st element
arr12.shift()
console.log(arr12);
//DELETE 
delete arr12[5];
console.log(arr12);


//FILTER METHOD
let num=[0,1,2,3,4,5,6]
function even(num){
    if(num%2==0){
        return true;
    }
    return false;
}
let evennum=num.filter(even)
console.log(evennum);

//FILL
let words=['a','b','c','l','e']
words.fill('p',1,3)
console.log(words);

//INDEXOF
let num1=[0,1,2,3,4,5]
console.log(num1.indexOf(2));
console.log(num1.includes(6))//INCLUDES---->checks whether the no. is in array or not
num1.copyWithin(0,2,5)   //COPYWITHIIN
console.log(num1);

//MAP
let eval=num.map((item)=>{
    return (item*item);
})
console.log(eval);

//EVERY  print true if aa the element in a array is true
let checkevery=num.every((item1)=> {
    return item1%2==0
})
console.log(checkevery)

//SOME
let checksome=num.some((item2)=>{
    return item2%2==0
})
console.log(checksome)

//FIND
let evalfind=num.find((item3)=>{
    return item3>4
})
console.log(evalfind)

//ARRAY DESTRUCTOR
let[a,b,c,d,e,f]=num
console.log(b);*/
