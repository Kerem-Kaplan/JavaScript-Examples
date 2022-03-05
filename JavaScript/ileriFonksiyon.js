var selamFonksiyonu = function selamVer() {
    console.log("Selam Gardassss");
}

selamFonksiyonu();

var selamFonksiyonu2 = () => {
    console.log("Selam Gardassss 2");
    console.log("Nabuunnn");
}

selamFonksiyonu2();

var selamFonksiyonu3 = (message) => {
    console.log(message);
}

selamFonksiyonu3("Aga Nabun Beyaaaaa");


var topla = (sayi1,sayi2) =>{
    return sayi1+sayi2;
}

let toplam = topla(4,2);

console.log(toplam);