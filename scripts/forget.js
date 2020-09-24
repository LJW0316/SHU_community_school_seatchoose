var mark = true;
var stu = document.getElementById("studentID").value;
function check(){
    if (mark == true) {
        window.event.returnValue = false;
        window.location.href="../index.html";
        return true;
    } else {
        window.alert("学号错误！");
        return false;
    }
}