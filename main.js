
document.querySelector('button').onclick = myClick;

function myClick() {
 console.log('work');  
 let a = document.querySelector('.i1').value;
 console.log(a);
 document.querySelector('.out1').innerHTML = a;
}



//*let button = dokument.getElementById("send");

//buttton.addEventlistener("click", checkTest);

//function checkTest(){
//   let result = 0;

//   let al = getElementById("question1").value;
//   alert(al);
//}