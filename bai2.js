let sum=0;
for(let i=1;i<=50;i++){
    if(i%5===0&&i%3===0){
        console.log(`FizzBuzz`);
       
    }else if(i%3===0){
        console.log(`Fizz`);
        sum+=i;
        
    }else if(i%5===0){
        console.log(`Buzz`);
    }else{
        console.log(i);
    }
}
console.log(`Tổng những số chia hết cho 3 từ 1 đến 50 là ${sum}`);
