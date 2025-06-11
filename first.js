//See MDN docs website
//alert("Hello!");//one time pop up
//prompt("Hello!");//one time pop up with temporary input(a box comes under hello)
//Variables and Data Types
console.log("Priyanka Ghosh");//It is used to log(print) a message to the console
let name="Munni";//1+1=2 but in string "123"+1=1231
x=null;//typeof x=null;which is an object(non-primitive)
y=undefined;
isfollow=true;
console.log(name);
console.log(x);
console.log(y);
console.log(isfollow);
/* var : Variable can be re-declared & updated. A global scope variable.
let : Variable cannot be re-declared but can be updated. A block scope variable. if we do not initialize then it will show undefined
const : Variable cannot be re-declared or updated. A block scope variable. const initialization is must or it will show error
there are 7 primitive data types:Number, String, Boolean, Undefined, Null, BigInt, Symbol
non-primitive:Objects-A collection of values*/
const student={
    fullName:"Rahul Singh",
    age:20,
    cgpa:8.2,
    isPass:true,
};
student["age"]=student["age"]+1;
console.log(student.age);
//key:value(pair) obj.key ,obj["key"]
//We cant change const but can change const obj->key

const product={ //P1
    title:"Ball Pen",
    rating:4,
    offer:5,
    price:270,
};
console.log(product);

const profile={ //P2
    username:"Priyanka Ghosh",
    isFollow:true,
    followers:123,
    following:21,
};
console.log(profile);

//Arithmetic OPerations(+,-,*,/,%,**)
let a=5;
let b=3;
console.log("a+b=",a+b);
console.log("a**b=",a**b);//Exponentiation(5^3)
//Unary Operator
console.log("++a=",++a);
console.log(a);
console.log("b++=",b++);
console.log(b);
//Assignment Operators(=, +=, -=, *=, %=, **=)
//Comparison Operators(Equal to == , Not equal to !=, Equal to & type ===, Not equal to & type !==, >, >=, <, <=)
let c=5;
let d="5";
console.log("c==d:",c==d);//== only checks the value(converts string into number)
console.log("c===d:",c===d);//=== checks both the value and data type
//Logical Operators(Logical AND &&, Logical OR ||, Logical NOT !)
//Conditional Statements(if, if-else, else-if, switch)
//Ternary Operator (condition ? true output : false output)
let num=prompt("Enter a number:"); //P1
if(num%5===0)
console.log(num,"is a multiple of 5");
else
console.log(num,"is not a multiple of 5");

let score=74;//P2
let grade;
if(score>=90 && score<=100)
grade="A";
else if(score>=70 && score<=89)
grade="B";
else if(score>=60 && score<=69)
grade="C";
else if(score>=50 && score<=50)
grade="D";
if(score>=0 && score<=49)
grade="F";
console.log("Grade=",grade);

//Loops(for,infinite,while,do-while,for-of(strings,arrays),for-in(objects,arrays))
let str="Apna College";//for-of
for(let i of str){ //iterator->characters
    console.log("i=",i);
}

for(let key in student){
    console.log("key=",key,"value=",student[key])
}

let gameNum=25;//P2
let userNum=prompt("Guess the game number:");
while(userNum!=gameNum){ //game
    userNum=prompt("You entered the wrong number.Guess again:");
}
console.log("congratulations, you entered the right number!")

let obj ={
    item:"pen",
    price:10,
};
let output=`the cost of ${obj.item} is ${obj.price} rupees`;//String Interpolation-To create strings by doing substitution of placeholders
console.log(output);

console.log("the cost of",obj.item,"is",obj.price,"rupees");

//Template Literals-A way to have embedded expressions in strings
let specialString=`This is a template literal`;
console.log(typeof specialString);

let str1="ApnaCollege";
console.log(str1.length);
console.log(str1[4]);
//Javascript Strings are immutable(not changeble, you need to store the updated string in a new string)
/*String Methods in JS-These are built-in functions to manipulate a string
str.toUpperCase( ),str.toLowerCase( ),str.trim( ) // removes whitespaces
str.slice(start, end?) // returns part of string
str1.concat( str2 ) // joins str2 with str1
str.replace( searchVal, newVal ),str.charAt( idx )*/

let fullName=prompt("Enter your full name without spaces:");//P1
let username="@"+fullName+fullName.length;
console.log(username);
//Arrays-Collections of items
//Array is a special type of object
//Arrays are mutable(marks[0]=66->marks so it will print [6,75,48,83,66])
/*Create Array
let marks = [ 96, 75, 48, 83, 66 ];
let info = [ “rahul”, 86,“Delhi” ];*/
let heroes = [ "ironman","hulk","thor","batman"];
for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}
for(let i of heroes){
    console.log(i);
}

let marks=[85,97,44,37,76,60];//P1
let sum=0;
for(let val of marks){
    sum+=val;
}
let avg=sum/marks.length;
console.log(`avg marks of the class=${avg}`);

let items=[250,645,300,900,50];//P2
for(let i=0;i<items.length;i++){
    let offer=(10/100)*items[i];
    items[i]-=offer;
}
console.log(items);

/*Array Methods->push( ) : add to end, pop( ) : delete from end & return, toString( ) : converts array to string
concat( ) : joins multiple arrays & returns result, unshift( ) : add to start, shift( ) : delete from start & return
Slice( ) : returns a piece of the array -> slice( startIdx, endIdx )
Splice( ) : change original array (add, remove, replace) -> splice( startIdx, delCount, newEl1... )*/
let arr=[1,2,3,4,5,6,7];
arr.splice(2,2,101,102);//[1,2,101,102,5,6,7]
arr.splice(2,0,101);//Add Element [1,2,101,3,4,5,6,7]
arr.splice(3,1);//Delete Element [1,2,3,5,6,7]
arr.splice(3,1,101);//Replace Element [1,2,3,101,5,6,7]

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];//P3
console.log(companies.shift());
console.log(companies.splice(2,1,"Ola"));
console.log(companies.push("Amazon"));
//Methods and Functions. Functions=>Block of code that performs a specific task, can be invoked whenever needed.
//sum function
function Sum(a,b){
    return a+b;    
}
const arrowSum=(a,b)=>{
    console.log(a+b);
};
const printhello=()=> {
    console.log("hello");
};
function countVowels(str){
    let count=0;
    for(const char of str){
        if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U')
        count++;
    }
    return count;
}
const countVow=(str)=>{
    let count=0;
    for(const char of str){
        if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U')
        count++;
    }
    return count;
}
//forEach Loop in Arrays=>Higher Order Functions/Methods=>function used as a p;arameter or return as a value.
//Callback Function:Here, it is a function to execute for each element in the array. A callback is a function passed as an arguement to another function.
//"abc".toUpperCase=>toUpperCase is a method. When we associate function with an object it is csalled a method.
let arr1=[1,2,3,4,5];
arr1.forEach(function printVal(val,idx,arr1){
    console.log(val,idx,arr1);
});
//we will use arrow function
let nums=[2,3,4,5,6];
nums.forEach((num)=>{
    console.log(num*num);
});
//Map(Array Methods)=>Creates a new array with the results of some operation. The value its callback returns are used to form new array.
//Similar to forEach. We can print(value,index,array)
let numss=[67,52,39];
let newArr=numss.map((val)=>{
    return val*2;
});
console.log(newArr);
//Filter(Array Methods)=>Creates a new array of elements that give true for a condition/filter.Eg:all even elements
let arr2=[1,2,3,4,5,6,7];
let evenArr=arr.filter((val)=>{
    return val%2==0;
});
console.log(evenArr);
//Reduce(Array Method)=>Performs some operations and reduces the array to a single value. It returns that single value.
let arr3=[1,2,3,4];
const outputt=arr.reduce((res,curr)=>{
    return res+curr; //return res>curr?res:curr;=>to display the largest element from the array
});
console.log(output);//10

let markss=[97,64,32,49,99,96,86];//P1
let toppers=marks.filter((val)=>{
    return val>90;
});
console.log(toppers);

let n=prompt("Enter a number:");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;    
}
console.log(arr);
let summ=arr.reduce((res,curr)=>{
return res+curr;
});
console.log("Sum=",sum);
let fact=arr.reduce((res,curr)=>{
    return res*curr;
    });
    console.log("Factorial=",fact);

    



