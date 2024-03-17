let butt = document.querySelector("button");
butt.onclick = function(){
    document.querySelector(".overly").classList.add("dn_none");
    document.querySelector(".info").classList.add("infox");
    document.querySelector(".buttonshow").classList.add("d_none");
    let buttX = document.querySelector(".buttonX");
    buttX.onclick =function(){
        document.querySelector(".overly").classList.remove( "dn_none");
        document.querySelector(".buttonshow").classList.remove("d_none");
        document.querySelector(".info").classList.remove("infox");

    }
}

