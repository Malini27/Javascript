//OBJECT
let obj1={
    name:"malini",
    age:21
}
console.log(obj1.age)

//NESTED OBJECT
/*let obj1={
    name:"malini",
    age:21,
    obj2:{
        mark:70
    }
}
console.log(obj1.obj2.mark)*/

//objects with function
/*let obj1={
    name:"malini",
    age:21,
    obj2:{
        mark:70
    },
    greet:function(a=6,b=5){
        return a+b;
    }
}
console.log(obj1.greet())*/

//TO CHANGE THE VARIABLE IN OBJECT
/*let obj1={
    name:"malini",
    age:21,
    obj2:{
        mark:70
    }
}
obj1.age=10;
obj1.obj2.mark=90;
console.log(obj1.age)
console.log(obj1.obj2.mark)*/

//TO ADD NEW PROPERT IN OBJECT
/*let obj1={
    name:"malini",
    age:21,
    obj2:{
        mark:70
    }
}
obj1.num=12345;
console.log(obj1.num)*/

//TO DELETE A PROPERTY IN OBJECT
/*let obj1={
    name:"malini",
    age:21,
    obj2:{
        mark:70
    }
}
delete obj1.age;
console.log(obj1.age)

//CONSTRUCTOR
function namelist(fname,lname,num){
    this.firstname=fname;
    this.lastname=lname;
    this.number=num;
}
let user1=new namelist("malini","raj",567)//object creation
let user2=new namelist("kousi","raj",1234)
console.log(user2);

//DESTRUCTOR
let obj={
    name:"malini",
    age:21,
    sub:{
        tamil:67,
        english:90
    }
}
const{name,age,sub:{tamil,english}}=obj;
console.log(name);
console.log(tamil);*/








