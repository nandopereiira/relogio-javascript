

function relogio() {
    var msg = document.getElementById('msg')
    var display = document.getElementById('display')
    var img = document.getElementById('imagem') 
    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    var segundos = agora.getSeconds()

    // CONTROLE DE HORA
    if (hora < 10 ) {
        var hora = `0${hora}`
    } else if ( hora >= 10) {
        var hora = `${hora}` 
    }
    // CONTROLE DE MINUTOS
    if (minutos < 10 ) {
        var minutos = `0${minutos}`
    } else if ( minutos >= 10) {
        var minutos = `${minutos}` 
    }
    // CONTROLE DE SEGUNDOS
    if (segundos < 10 ) {
        var segundos = `0${segundos}`
    } else if ( segundos >= 10) {
        var segundos = `${segundos}` 
    }    

    // DISPLAY DO RELÓGIO AUTOMÁTICO
    display.innerHTML = `${hora}:${minutos}:${segundos}`

    if (hora >= 6 && hora < 12) {
        msg.innerHTML = `BOM DIA!`
        img.src = './assets/imagens/bg-manha.jpg'
        document.querySelector('body').classList.add('manha') 
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `BOA TARDE!`
        img.src = './assets/imagens/bg-tarde.jpg'
        document.querySelector('body').classList.add('tarde')
    } else if (hora >= 18 && hora <= 23 ) {
        msg.innerHTML = `BOA NOITE!`
        img.src = './assets/imagens/bg-noite.jpg'
        document.querySelector('body').classList.remove.value
        document.querySelector('body').classList.add('noite')
    } else if (hora >= 0) {
        msg.innerHTML = `BOA MADRUGADA!`
        img.src = './assets/imagens/bg-madrugada2.jfif'
        document.querySelector('body').classList.remove.value
        document.querySelector('body').classList.add('madrugada')
    }     
}

var intervalo = setInterval(relogio,1000);


function mudarHoras() {
    clearInterval (intervalo);
    var msg = document.getElementById('msg')
    var display = document.getElementById('display')
    var img = document.getElementById('imagem')  
    var mudouhoras = document.getElementById('numeros').value
    
    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    var segundos = agora.getSeconds()
    hora = mudouhoras
    

    display.innerHTML = `${hora}:${minutos}:${segundos}`


     // CONTROLE DE HORA
     if (hora < 10 ) {
        var hora = ` 0${hora}`
    } else if ( hora >= 10) {
        var hora = ` ${hora}` 
    }
    // CONTROLE DE MINUTOS
    if (minutos < 10 ) {
        var minutos = ` 0${minutos}`
    } else if ( minutos >= 10) {
        var minutos = ` ${minutos}` 
    }
    // CONTROLE DE SEGUNDOS
    if (segundos < 10 ) {
        var segundos = ` 0${segundos}`
    } else if ( segundos >= 10) {
        var segundos = ` ${segundos}` 
    }    

    // DISPLAY DO RELÓGIO AUTOMÁTICO
    display.innerHTML = `${hora}:${minutos}:${segundos}`

    if (hora >= 6 && hora < 12) {
        msg.innerHTML = `BOM DIA!`
        img.src = './assets/imagens/bg-manha.jpg'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `BOA TARDE!`
        img.src = './assets/imagens/bg-tarde.jpg'
    } else if (hora >= 18 && hora <= 23 ) {
        msg.innerHTML = `BOA NOITE!`
        img.src = './assets/imagens/bg-noite.jpg'
    } else if (hora > 23) {
        msg.innerHTML = `Hora Inválida!!`
        alert("Apenas valores entre 0 e 23 horas!");
        relogio()
    } else if (hora >= 0) {
        msg.innerHTML = `BOA MADRUGADA!`
        img.src = './assets/imagens/bg-madrugada2.jfif'
    }

 }

 function resetar() {
    relogio()
    intervalo = setInterval(relogio,1000);

}