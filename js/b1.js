/**
 * Khối 1: Input
 * + ngaylam (số ngày làm)
 * 
 * Khối 2:
 * b1: tạo hàm, gắn vào hàm
 * b2: lương 1 ngày * số ngày làm
 * 
 * Khối 3: Output
 * + Total
 */

function totalFunds() {
    var ngayLam = document.getElementById("inputday").value;
    var total = ngayLam * 100000;
    document.getElementById("txtResult").innerHTML = "Total " + total + " VND";
}
document.getElementById("btnCalc").onclick = totalFunds;

/**
 * Khối 1: Input
 * + nhập 5 số thực
 * 
 * Khối 2:
 * b1: tạo hàm, gắn vào hàm
 * b2: (sothuc + sothuc2 + sothuc3 + sothuc4 + sothuc5 )/5
 * 
 * Khối 3: Output
 * + Total
 */

function totalRealnumber() {
    var sothuc = document.getElementById("inputrealnumber").value;
    var sothuc2 = document.getElementById("inputrealnumber2").value;
    var sothuc3 = document.getElementById("inputrealnumber3").value;
    var sothuc4 = document.getElementById("inputrealnumber4").value;
    var sothuc5 = document.getElementById("inputrealnumber5").value;


    var totalrm = (Number(sothuc) + Number(sothuc2) + Number(sothuc3) + Number(sothuc4) + Number(sothuc5) )/5;
    document.getElementById("txtResult2").innerHTML = "Giá trị trung bình " + totalrm;
}
document.getElementById("btnCalc2").onclick = totalRealnumber;

/**
 * Khối 1: Input
 * + nhập số tiền muốn đổi
 * 
 * Khối 2:
 * b1: tạo hàm, gắn vào hàm
 * b2: 23500 * sotienquydoi
 * 
 * Khối 3: Output
 * + Total
 */

function totalExchange() {
    var money = document.getElementById("inputmoney").value;
    var totalmoney = money * 23500;
    document.getElementById("txtResult3").innerHTML = "Total " + totalmoney + " VND";
}
document.getElementById("btnCalc3").onclick = totalExchange;

/**
 * Khối 1: Input
 * + nhập chiều dài 2 cạnh
 * 
 * Khối 2:
 * b1: tạo hàm, gắn vào hàm
 * b2: 
 * + chuvi: (length + width)/2
 * + dientich: length * width
 * 
 * Khối 3: Output
 * + Total
 */

function Rectangle() {
    var length = document.getElementById("inputedgelength").value;
    var width = document.getElementById("inputedgewidth").value;
    var chuvi = (Number(length) + Number(width))/2;
    var dientich = Number(length) * Number(width);
    document.getElementById("txtResult4").innerHTML = "Chuvi: " + chuvi;
    document.getElementById("txtResult4.5").innerHTML ="Dientich: " + dientich;

}
document.getElementById("btnCalc4").onclick = Rectangle;

/**
 * Khối 1: Input
 * + nhập 1 số có 2 chữ số
 * 
 * Khối 2:
 * b1: tạo hàm, gắn vào hàm
 * b2: 
 * +lấy đơn vị hàng đơn vị
 * +lấy đơn vị hàng chục
 * 
 * Khối 3: Output
 * + Total
 */

function totalDigitalnumber() {
    var inputnumber = document.getElementById("inputdigital").value;
    var sodonvi = inputnumber % 10;
    console.log("sodonvi");
    var sohangchuc = (inputnumber - sodonvi)/10;
    console.log("sohangchuc");
    var totaldn = sodonvi + sohangchuc;
    document.getElementById("txtResult5").innerHTML = "Total: " + totaldn;
}
document.getElementById("btnCalc5").onclick = totalDigitalnumber;