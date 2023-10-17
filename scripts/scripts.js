function feliratkozom() {
    let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if (pattern.test(email.value.toString())){
        window.alert("Sikeresen feliratkozott a kávémagazinunkra!")
    }
    else{
        window.alert("Helytelen email cím")
    }
}

const komments =  document.getElementById("comments")

function addKomment() {
    let nev = document.getElementById("nev")
    let text = document.getElementById("komment")

    let p = document.createElement("p")
    p.innerHTML = "<span class='kname'>" + nev.value + "</span>" + "<span class='kszoveg'>" + text.value + "</span>"
    komments.appendChild(p)
}