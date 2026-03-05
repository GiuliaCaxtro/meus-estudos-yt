var corpo = window.document.bodyvar 
        p1 = window.document.getElementsByTagName('p')[1]
        
        //--------------------------------------------------
        //var div = window.document.getElementById ('msg') //PRA ID
        // var div = window.document.getElementsByName('msg')[0] -- PRA NOME
        //var div = window.document.getElementsByClassName ('msg') --PRA CLASS

        //--------------------------------------------------
        var div = window.document.querySelector('div#msg') // # pra ID e . pra class .. ex: ('div.msg')
        div.style.color = "yellow"
        
        //--------------------------------------------------
        div.style.background = "green"
        div.innerText = 'CLICK'

        //pra marca//
        //window.document.write(p1.innerText)
        //p1.style.color = "blue"
        //corpo.style.background = 'black'
        //window.document.write(p1.innerHTML)
        //window.alert(p1.innerText)  
