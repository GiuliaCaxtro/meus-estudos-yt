function carregar() {
    const mensagem = document.querySelector('div#msg');
    const imagem = document.querySelector('img#imagem');
    const data = new Date()
    const hora = data.getHours()
    const minuto = data.getMinutes()
    mensagem.innerHTML = `São ${hora}: ${minuto} `
    
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        imagem.src = 'img/manha.png'
        document.body.style.background = '#BFE2EA'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        imagem.src = 'img/tarde1.png'
        document.body.style.background = '#FDB1A2'
    } else {
        // BOA NOITE!
        imagem.src = 'img/noite.png'
        document.body.style.background = '#7AA3EB'
    }   
}