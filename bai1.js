let n;
do{
     n=+prompt('Mời bạn nhập vào số nguyên n:');
}while(!(Number.isInteger(n)));
if(n%2===0){
    console.log(`N là số chẵn`);
}else{
    console.log(`N là số lẻ`);
}
if(n>0){
    for(let i=1;i<=n;i++){
        console.log(i)
    }
}else{
    console.log(`Giá trị n không hợp lệ để tạo dãy số`);
}