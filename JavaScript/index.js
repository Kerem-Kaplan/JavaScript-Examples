var kullanicilar=[
    {email:"keremkaplan1000@gmail.com",sifre:"12345"},
    {email:"havvanurkaplan1000@gmail.com",sifre:"123456"},
]

var tweet=[
    {email:"keremkaplan1000@gmail.com",tweet:"Hava güzel"},
    {email:"keremkaplan1000@gmail.com",tweet:"hava gayet güzel"},
    {email:"havvanurkaplan1000@gmail.com",tweet:"ben çalışıyorum"}
]

var email=prompt("email girin")
var sifre=prompt("sifre girin")

function login(){
    if(email==kullanicilar[0].email && sifre==kullanicilar[0].sifre || email==kullanicilar[1].email && sifre==kullanicilar[1].sifre){
        console.log(tweet)
    }
    else{
        console.log("Kullanıcı sifresi veya adı hatalı")
    }
}

login(email,sifre)
