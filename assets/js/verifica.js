function validateEmail(email){
    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

var scrollY = 0;
var distance = 40;

function autoScrollTo(el) {
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).offsetTop;
	var bodyHeight = document.body.offsetHeight;
	var yPos = currentY + window.innerHeight;
	var animator = setTimeout('autoScrollTo(\''+el+'\')', 10);
	if(yPos > bodyHeight){
		clearTimeout(animator);
	} else {
		if(currentY < targetY-distance){
		    scrollY = currentY+distance;
		    window.scroll(0, scrollY);
	    } else {
		    clearTimeout(animator);
	    }
	}
}

document.getElementById("verifica").onclick = function() {verifica()};

function verifica(){
    var email = document.getElementById('email');
    var nome = document.getElementById('nome');
    var mensagem = document.getElementById('mensagem');
    var h = document.getElementById('h');
    var m = document.getElementById('m');
    var x = document.getElementById('x');
    var dados = document.getElementById('dados');

    if(validateEmail(email.value)){
        email.parentElement.classList.remove("danger");
    }else{
        email.parentElement.classList.add("danger");
    }

    if(nome.value != ""){
        nome.parentElement.classList.remove("danger");
    }else{
        nome.parentElement.classList.add("danger");
    }

    if(mensagem.value != ""){
        mensagem.parentElement.classList.remove("danger");
    }else{
        mensagem.parentElement.classList.add("danger");
    }

    if(h.checked || m.checked || x.checked){
        x.parentElement.parentElement.classList.remove("danger");
    }else{
        x.parentElement.parentElement.classList.add("danger");
    }

    if((h.checked || m.checked || x.checked) && mensagem.value != "" && nome.value != "" && validateEmail(email.value)){
        document.getElementById('nome-dado').innerHTML = nome.value;
        document.getElementById('email-dado').innerHTML = email.value;
        document.getElementById('mensagem-dado').innerHTML = mensagem.value;
        if(h.checked){
            document.getElementById('genero-dado').innerHTML = "Homem";
        }else if(m.checked){
            document.getElementById('genero-dado').innerHTML = "Mulher";
        }else{
            document.getElementById('genero-dado').innerHTML = "Prefiro não Dizer";
        }

        if(document.getElementById('morador').checked){
            document.getElementById('mora-dado').innerHTML = "Sim";
        }else{
            document.getElementById('mora-dado').innerHTML = "Não";
        }
        dados.classList.remove("hide");
        autoScrollTo('dados');
    }

}