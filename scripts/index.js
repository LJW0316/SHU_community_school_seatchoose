var mark=true;
var stu = document.getElementById("studentID").value;
var pas= document.getElementById("password").value;
function check(){
        if (mark == true) {
            window.event.returnValue = false;
            window.location.href="seat/seat.html";
            return true;
        } else {
            window.alert("用户名或密码错误！");
            return false;
        }}
//检查用户名、密码是否正确