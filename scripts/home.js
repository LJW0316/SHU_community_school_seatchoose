var mark = false;
function check() {
    var pas1 = document.getElementById("password").value;
    var pas2= document.getElementById("confirmPassword").value;
    if ((pas1 == '') && (pas2 == '')){
        window.alert("新密码不能为空！")
    }
    else {
        if (pas1 == pas2) {
        mark = true;
    }
        if (mark == true) {
            window.event.returnValue = false;
            window.alert("密码更改成功！");
            window.location.href="../seat/seat.html"
            return true;
        } else {
            window.alert("两次密码输入不一样！");
            return false;
        }
    }
}