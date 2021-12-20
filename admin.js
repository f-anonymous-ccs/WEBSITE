var uname,pswd;
function myFunction() {
 
}
function login_n() {
uname = document.getElementById("uname").value;
// console.log(uname);
pswd=document.getElementById("pswd").value;
// console.log(pswd);
if(uname==="Murtaza"&&pswd==="Murtu")
{
	console.log("succesful");
 location.replace("admin-content.html")
}else if(uname==="Insiyah"&&pswd==="Insiyo"){
	location.replace("admin-content.html")
}

}
