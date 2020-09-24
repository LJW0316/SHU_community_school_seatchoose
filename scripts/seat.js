function changeSystem() {
    vm.isShowSystem = true;
    vm.isShowNotice = false;
    vm.isShowSearch = false;
    vm.isShowSheet = false;
}
function changeNotice() {
    vm.isShowSystem = false;
    vm.isShowNotice = true;
    vm.isShowSearch = false;
    vm.isShowSheet = false;
}
function changeSearch() {
    vm.isShowSystem = false;
    vm.isShowNotice = false;
    vm.isShowSearch = true;
    vm.isShowSheet = false;
}
function changeSheet() {
    vm.isShowSystem = false;
    vm.isShowNotice = false;
    vm.isShowSearch = false;
    vm.isShowSheet = true;
}
function myself() {
    window.location.href="../home/home.html";

}
var timestamp = Date.parse(new Date());

timestamp = timestamp / 1000;

var date = new Date(timestamp * 1000);

//获取年份

var Y = date.getFullYear();

//获取月份

var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);

//获取当日日期

var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();


var array2=[];

window.onload = function () {
    var Y1 = Y;
    var M1 = M;
    var D1 = D;
    var mark = false;
    M1 = parseInt(M1);
    D1 = parseInt(D1);
    array2.push(Y1 + '年' + M1 + '月' + D1 + '日');
    if (Y1 % 4 == 0) mark = true;
    for (var i = 1; i < 7; i++) {
        D1 =  D1+1;
        if (M1 == 2 && mark == true) {
            if (D1 > 29) { M1 = M1+1; D1 = 1 }
        } else if (M1 == 2) {
            if (D1 > 28) { M1 = M1+1; D1 = 1 }
        } else if (M1 == 1 || M1 == 3 || M1 == 5 || M1 == 7 || M1 == 8 || M1 == 10 || M1 == 12) {
            if (D1 > 31) { M1 = M1+1; D1 = 1 }
        } else {
            if (D1 > 30) { M1 = M1+1; D1 = 1 }
        }
        if (M1 == 13) { Y1 = Y1+1; M1 = 1; D1 = 1; }
        array2.push(Y1 + '年' + M1 + '月' + D1 + '日');
    }
    // var select1 = document.getElementById("date");
    // var index1 = select1.selectedIndex;
    // vm.date = select1.options[index1].text;
}

function choseDate(){
    var i;
    for (i = 1; i <= 7; i++){
        document.choose.date.options[i] = new Option(array2[i-1],i);
    }
}

var array1 = [
    '8:00-10:00',
    '9:00-11:00',
    '10:00-12:00',
    '11:00-13:00',
    '12:00-14:00',
    '13:00-15:00',
    '14:00-16:00',
    '15:00-17:00',
    '16:00-18:00',
    "17:00-19:00",
    '18:00-20:00',
    '19:00-21:00'
];

function choseTime(){
    var i;
    for (i = 1; i <= 12; i++){
        document.choose.time.options[i] = new Option(array1[i-1],i);
    }
}

var dateText = '';

function submitSeat() {
    var select1 = document.getElementById("date");
    var index1 = select1.selectedIndex;
    var select2 = document.getElementById("time");
    var index2 = select2.selectedIndex;
    if (vm.isShowChoose2 == true) {
        alert("您已经完成预约！请签到完成后再进行下一次预约！")
    }
     else if (index1*index2>0){
        var mark = confirm("是否确认提交，提交后无法更改！");
        if (mark == true){
            vm.date = select1.options[index1].text;
            vm.time = select2.options[index2].text;
            vm.isShowSystem = false;
            vm.isShowNotice = false;
            vm.isShowSearch = true;
            vm.isShowSheet = false;
            vm.isShowChoose1 = false;
            vm.isShowChoose2 = true;
        }
    }
     else {
         alert("您还未选择座位");
    }
}