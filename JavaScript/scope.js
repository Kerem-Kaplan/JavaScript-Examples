var sayi = 10;        // var keyword ile tanımlanan bir değişken daha sonra tekrar tanımlanıp farklı bir değer atanabilir.(Line 7)
var sehir = "Konya";

sayi = 11;
sehir = "Izmir";

var sehir = "Antalya";

let il = "Ankara";        //let keyword ile tanımlı bir değişken daha sonra tekrar tanımlanıp farklı bir değer atanamaz!!!!!!(Line 11)
il = "Mus";
//let il="Bayburt"        //bu tanımlama sonucuna "Uncaught SyntaxError: Identifier 'il' has already been declared" hatası alınır.

function mesajVer() {
    var isim = "Kerem";
    console.log(sehir);     //fonksiyonun dısında tanımlanan bir var değişkeninin değeri fonksiyon içinde cagırabiliriz!!!
    console.log(isim);
}


// console.log(sayi);
// console.log(sehir);
// console.log(il);

//mesajVer();
//console.log(isim);      //fonksiyon içinde tanımlanan bir değeri fooknsiyonun dışında okuyamanayız!!!!

//for (var i = 0; i < 10; i++) {      //döngünün içindeki i default olarak var tipindedir ama i sonucuna döngünün dısından ulasabiliriz!!!!
                                //eğer i değişkenine dısardan erismek istemiyorsak let olarak tanımlarız

//}

//console.log(i);

const soyad="Kaplan";

//soyad="Gebze";      //bu sekilde tanımlama yaptıgımızda hata alırız cunku soyad degiskeni sabit olarak yalnızca 'Kaplan' degikenini tutar

const sehirler=["Konya","İzmir"];       //const ifadesi bu sekilde kullanıldıgında dizi içine ifade eklememize izin verir
sehirler.push("İzmir","Aksaray");       //fakat line 41'deki gibi yapılırsa buna izin vermez cunku sehirler değişkenine yeni bir atama yapmaya calısıyor

sehirler=["Mardin","Bursa"]

console.log(sehirler);


