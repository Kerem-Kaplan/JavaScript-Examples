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

function kullaniciVarmi(email,sifre){
    console.log(email);
    console.log(sifre);
    for(i=0;i<kullanicilar.length;i++){
        if(kullanicilar[i].email==email && kullanicilar[i].sifre==sifre){
            return true;
        }

        
    }
    return false;
}

function login(){
    if(kullaniciVarmi(email,sifre)){
        console.log(tweet)
    }
    else{
        console.log("Kullanıcı sifresi veya adı hatalı")
    }
}

login(email,sifre)
