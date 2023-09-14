let arr = [];
for(let i = 0; i < 10; i++){
    arr.push(Math.round(Math.random()*10));
    console.log(arr[i]);
}

arr.pop();
arr.shift();

arr.push(10);
arr.unshift(2);

console.log(arr.length);

let arr2 = [];

for(let key in arr){
    arr2.push(arr[key]);
}
console.log(arr2);


for(let i = 0; i<10; i++){
    if(i%2 === 0){
        console.log(arr[i]);
    }
}


for(key in arr){
    if(arr[key]%2 === 0){
        console.log(arr[key]);
    }
}

for(let i = 0; i<10; i++){
    if(arr[i] === 0){
        console.log(i);
    }
}

let result = 0;

for(key in arr){
    if(arr[key] === 0){
        result++;
    }
}

arr = [-1, 5, 0, 9, -10];


arr = arr.filter((element) => element !== 0)
console.log(arr);



arr = arr.map((element) => (element/100));
console.log(arr);

arr.forEach((element) => console.log(Math.pow(element, 3)));

console.log(arr2);
let tmp = arr2.findIndex((element)=> Math.pow(element, 2) == 100);
if(tmp === -1){
    console.log("element doesn't exist");
}else{
    arr2.splice(tmp, 1);
}
console.log(arr2);

console.log(arr2.every((element) => element%2 === 0));

console.log(arr2.some((element) => element < 0));


