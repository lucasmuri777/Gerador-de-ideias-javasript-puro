
const btn = document.querySelector('#GerarBusca');
btn.addEventListener('click', buscaFiltro)

function buscaFiltro(){
	if(btn.outerText == "Gerar planilha"){
		let id = "planilha"
		let result = document.querySelector('#planilhaInstagram');
		let segmento = document.querySelector('#segmento').value;
		let tomDaFala = document.querySelector('#tomDeFala').value;
		let qtaPost = document.querySelector('#qtaPost').value;
		if(qtaPost > 25){qtaPost = 25}
		let mes = document.querySelector('#mes').value;
		pergunta = `Crie ${qtaPost} ideias de posts para o instagram do mes de ${mes} para a minha empresa de ${segmento} com os campos de: Data e hora, ideia de post, descrição de legenda, imagens sugeridas, hashtags. use o tom de linguegem nos post de ${tomDaFala}. separe em tabela com elementos em HTML5 de table com classes de estilo do bootstrap`;
		gerarBuscaF(pergunta,result, id)
	}
	else if(btn.outerText == "Gerar Site"){
		let id = "site";
		let result = document.querySelector('#yourSite');
		let segmento = document.querySelector("#segmento").value
		let corPrincipal = document.querySelector("#color1").value
		let corSecundaria = document.querySelector("#color2").value
		let nomeEmpresa = document.querySelector("#nomeEmpresa").value
		
		pergunta = `Crie um site com html, o css e Js devem ficar dentro da tag head do site, o site deve ser de uma pagina só de uma empresa de ${segmento} cujo nome da empresa é ${nomeEmpresa}, O site deve ser responsivo para todos os tipos de dispositivos, e para a estilização geral do site use a versão mais atual do Bootstrap deixando o site bem otimizado e usando as teorias de UI e UX,as cores do site devem ser ${corPrincipal}, ${corSecundaria} e cores que combinem com essas, cuidado para uma sessão ter o fundo de uma cor e o texto com a msm cor e assim não dando visão para o texto, nas fontes do site quero que voce escolha
		uma boa para o segmento de ${segmento} e coloque no site, ja o menu quero que seja responsivo tambem, com links que vao para as sessões do site as sessões devem ser:"Quem Somos",
		"Serviços", "Clientes", "Contato", "Footer".
		na sessão de Serviços organiza com 4 blocos e em cada bloco um serviço sobre o ${segmento} e uma foto preta so pra fingir que tem uma foto ali
		e no de contato coloca um formulario para contato.`
		
		/**/
		gerarBuscaF(pergunta,result, id)
	}
	
	/*crie sem as tags head e body,*/
}
/*
Crie um site com html, o css e Js devem ficar dentro da tag head do site, o site deve ser de uma pagina só de uma empresa de ${segmento} cujo nome da empresa é ${nomeEmpresa}, O site deve ser responsivo para todos os tipos de dispositivos, e para a estilização geral do site use a versão mais atual do Bootstrap deixando o site bem otimizado e usando as teorias de UI e UX,as cores do site devem ser ${corPrincipal}, ${corSecundaria} e cores que combinem com essas, cuidado para uma sessão ter o fundo de uma cor e o texto com a msm cor e assim não dando visão para o texto, nas fontes do site quero que voce escolha
uma boa para o segmento de ${segmento} e coloque no site, ja o menu quero que seja responsivo tambem, com links que vao para as sessões do site as sessões devem ser:"Quem Somos",
"Serviços", "Clientes", "Contato", "Footer".
na sessão de Serviços organiza com 4 blocos e em cada bloco um serviço sobre o ${segmento} e uma foto preta so pra fingir que tem uma foto ali
e no de contato coloca um formulario para contato.
*/ 