class Personel {
    constructor(ad,soyad){      //2 parametre alan bir constructor dısarıdan girilen ad ve soyad degerlerini personel sınıfındaki adi ve soyadi degiskenine atadı!!!
        this.adi=ad;
        this.soyadi=soyad;
    }

    kaydet() {
        console.log(`Personel Kaydedildi Kardesss: ${this.adi}`)  //+" "+ this.adi);        //bu da farklı bir kullanım tipi
    }
}

//Personel.kaydet();      //bu sekilde sınıftaki nesneyi daha olusturmamıs oluruz ve console ekranında hata alırız.ÖNCE NESNE OLUSTURULMALI 
                        //line 9'daki gibi olmalı nesne olusturması!!!!!!
const personel = new Personel("Kerem","Kaplan");

personel.kaydet();

// personel.ad="Kerem";        //17-20 satırları arasındaki kullanımda aslında biz sınıfa ait bir ad nesne olusturmus olmadık sadece dısarıda tanımlama yaptık!!!!!!!
// personel.soyad="Kaplan";    //14.satırda sınıf içinde bir ad ve soyad tanımlaması yapıldı ve degeri atandı!!!!
// console.log(personel.ad);
// console.log(personel.soyad);

