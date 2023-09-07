//CLASS
class student{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }
    greet(){
        console.log(`${this.fname} ${this.lname}`);
    }
}
let obj=new student('malini','raj')
console.log(obj.greet());
class person extends student{    //INHERITANCE
    constructor(fname,lname,age){
        super(fname,lname)
        this.age=age;
    }
    hello(){
        console.log(`age:${this.age}`)
    }
}
let obj1=new person("malini","raj",25);
console.log(obj1.hello())

//SETTIMEOUT
function sum(a,b){
    console.log(a+b)
}
setTimeout(sum,5000,10,20)
console.log("hi")
console.log("hello")


const a=setTimeout((a,b)=>{
    console.log(a+b)
},5000,24,78)
console.log(a)
console.log("wel")
console.log("come")
clearTimeout(a)    //CLEARTIMEOUT

//SETINTERVAL------>run like a loop (like for 5 sec)
const b=setInterval((a,b)=>{
    console.log(a*b)
},3000,7,2)
console.log(b)
clearInterval(b)   //CLEARINTERVAL

