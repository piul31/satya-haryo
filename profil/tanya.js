function ub(e) {
    var confirm = window.confirm("Kunjungi Laman UB???");

    if(confirm){
        window.open("https://ub.ac.id/", "__blank");
    }
    else{
        alert("Anda membatalkan tujuan");
    }
}

function fb(e) {
    var confirm = window.confirm("Kunjungi Laman FB???");

    if(confirm){
        window.open("https://www.facebook.com/satyapiul", "__blank");
    }
    else{
        alert("Anda membatalkan tujuan");
    }
}

function twitter() {
    var confirm = window.confirm("Kunjungi Laman Twitter???");

    if(confirm){
        window.open("https://twitter.com/Satya227_", "__blank");
    }
    else{
        alert("Anda membatalkan tujuan");
    }
}


document
    .getElementById("openUB")
    .addEventListener(
        'click', 
        function(e){
            ub(e);
        }
    );


document
    .getElementById("openFB")
    .addEventListener(
        'click', 
        function(e){
            fb(e);
        }
    );


document
    .getElementById("openTwitter")
    .addEventListener(
        'click', 
        function(e){
            twitter(e);
        }
    );

