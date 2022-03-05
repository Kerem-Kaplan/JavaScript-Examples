// document.getElementById("bio").innerHTML="Derin Demiroğ: 2012"

// var intro1 = document.getElementById("intro1");
// var mesaj = document.getElementById("mesaj");

// mesaj.innerHTML = intro1.innerHTML;
// //kod bu satırdan sonra işlem yapmıyor veya calısmıyor
// var tumListeler = document.getElementsByTagName("ul");
// var sehirler = tumListeler[0]

// tumElemanlar = sehirler.getElementsByTagName("li");

// for (i = 0; i < tumElemanlar.lenght; i++) {
//     alert(tumElemanlar[i].innerHTML);
//}


// var classElemanlari=document.getElementsByClassName("intro1");
// alert(classElemanlari[1].innerHTML);

// var queryElemanları = document.querySelectorAll("p.intro1");
// alert(queryElemanları.length);

// var isimeleman=document.getElementsByName("musteriAdi");
// alert(isimeleman[0].value);

// var kerem=document.getElementById( "kerem").addEventListener("click",rendiDegistir);
// function rendiDegistir(){
//     document.getElementById("div1").style.color ="red";
//     var isimeleman=document.getElementsByName("musteriAdi");
//     isimeleman[0].value="Havvanurrrrr";
// }

// var node=document.getElementById("agac");
// alert(node.childNodes[0].nodeValue);

var head=document.createElement("h2");
var node=document.createTextNode("Merhabana merhaba kardeş");
head.appendChild(node);
var div1=document.getElementById("div1");
var p2=document.getElementById("p2");
div1.insertBefore(head,p2);
alert("p2 siliniyor");
div1.removeChild(p2);

alert("Değişiyor");
var p1=document.getElementById("p1");
div1.replaceChild(head,p1);
