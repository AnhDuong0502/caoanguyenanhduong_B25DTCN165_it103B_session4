let password ;
let acc;
let trueacc=`admin`;
let truepassword =`12345`
let count=3;
let count1=0;
let lock=false;
let evennum=0;
let odd=0;
let bookid;
let col;
let row;
let books;
let money1;
let money2;
let year;
let dongia;

while(count1<3){
    acc=prompt(`Mời bạn nhập tài khoản`);
    password=prompt(`Mời bạn nhập mật khẩu`);
    
    if(truepassword===password&&trueacc===acc){
    alert(`Đăng nhập thành công!`);
    lock=true;
    break;
    }
    count1++;
    count--;
    if(truepassword!==password&&trueacc!==acc){
        alert(`Sai cả tài khoản và mật khẩu bạn còn ${count} lần thử`);
    }
    if(truepassword===password&&trueacc!==acc){
        alert(`Sai tài khoản!  bạn còn ${count} lần thử`);
    }
    if(truepassword!==password&&trueacc===acc){
        alert(`Sai mật khẩu!  bạn còn ${count} lần thử`);
    }
    
}
if (!lock) {
    alert("Hệ thống bị khóa");
}else{
    let choice;
do {
         choice = +prompt(`
Chọn chức năng:
--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN ---
1. Phân loại mã số sách (Chẵn/Lẻ)
2. Thiết kế sơ đồ kho sách (Dạng lưới)
3. Dự toán phí bảo trì sách theo năm
4. Tìm mã số sách may mắn
5. Thoát
`)
switch(choice){
    case 1:
    alert(`Nhập các mã số sách (Nhập 0 để dừng lại) `);
    do{ 
        bookid=+prompt(`Nhập mã số sách`);

        if(bookid===0){
            break;
        }
        if (!Number.isInteger(bookid)) {
        continue;
         }
       if(bookid%2===0){
        evennum++;
       }
       if(bookid%2!==0){
        odd++;
       }
        }while(true)
    console.log(`
        Tổng số mã sách: ${evennum + odd}
        Số sách chẵn: ${evennum}
        Số sách lẻ: ${odd}
        `);
    break;
    case 2:
        do{
            row=+prompt(`Nhập số hàng của kho`);
            col=+prompt(`Nhập số cột của kho`);
            if(!(Number.isInteger(row)&&Number.isInteger(col)&&row>0&&col>0)){
                alert(`Số hàng và cột phải là số dương`);
            }
        }while(!(Number.isInteger(row)&&Number.isInteger(col)&&row>0&&col>0))
            for(let i=1;i<=row;i++){
                let line=``;
                for(let k=1;k<=col;k++){
                    if(i===k){
                        line+= `[${i} - ${k}] (Kệ ưu tiên)`;
                    }else{
                         line+= `[${i} - ${k}]`
                    }
                }
            console.log(line);
            }
            break;
    case 3:  
    
        books=+prompt(`Nhập số lượng sách hiện có`);
        money1=+prompt(`Nhập phí bảo trì cho 1 cuốn (VNĐ):`);
        year=+prompt(`Nhập số năm dự toán`);
            if(isNaN(books) || isNaN(money1) || isNaN(year)){
                alert(`Dữ liệu nhập vào phải là số`);
            }else{
                alert(`Đã hoàn thành bảng dự toán tại Console.`);
             }
              dongia=money1;
        for(let i=1;i<=year;i++){
            money2=dongia*books
            console.log(`Năm ${i}: ${money2.toFixed(0)} VND (Đơn giá: ${dongia.toFixed(0)}/cuốn)`);
            dongia=dongia*1.1;//tăng 10% mỗi năm
        }    
    break;
    case 4:
        let n;
       do{ 
         n=+prompt(`Bạn muốn kiểm tra các mã sách từ 1 đến bao nhiêu? (Nhập N):`);
       }while(!Number.isInteger(n) || n <= 0);
       let list='';
       let countlucky=0;
       for(let i=1;i<=n;i++){
        if(i%3===0&&i%5!==0){
           list+=`${i}`;
           countlucky++;
        }
       }
            console.log(`--- Danh sách mã sách may mắn (Bội số của 3, không chia hết cho 5) ---`);
            console.log(list.trim());
            console.log(`=> Tổng cộng có ${countlucky} mã may mắn.`);
        break;
    case 5:
        alert(`Hệ thống đang đăng xuất... Hẹn gặp lại!`);
        break;
}
}while(choice!==5);
}
