
let loading = document.querySelector('#Loading')
const OPENAI_API_KEY = "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"
function gerarBuscaF(Comando,intensity,result,id){
    const vec = document.querySelectorAll('.utils .filtros input')
    let pass =  true;
    vec.forEach((e)=>{
        let tirarEspaço = e.value;
        tirarEspaço = tirarEspaço.trim();
        if(tirarEspaço == "" || tirarEspaço == 0 ){
            pass = false
        }
    })
    if(pass){
        chamadaPraApi(Comando,intensity,result,id)
    }else{
        alert('Campo inválido ou vazio!')
    }
}

function chamadaPraApi(Comando,result,id){
     /*Api*/ 
		
        loading.innerHTML = `<button class="loading-btn btn btn-primary" type="button" disabled="">
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span class="visually-hidden"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Carregando...</font></font></span>
      </button>`
        
    fetch("https://api.openai.com/v1/completions", {
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + OPENAI_API_KEY,
            model: "gpt-3.5-turbo",
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: Comando,
            max_tokens: 3048,
            temperature: 1,
        }),
    })
    .then((response)=> response.json())
    .then((json) =>{
       

        if(json.error?.message){
            result.value += `Error: ${json.error.message}`;
        }else if(json.choices?.[0].text){
            let text = json.choices[0].text || "Sem resposta";
			resultado(result,text,id,loading)
        }
    })
}

function resultado(result,text,id,loading){
        if(id == 'planilha'){
            result.innerHTML = text;
            loading.innerHTML = '';
        }else if(id == 'site'){
            let yourCode = document.querySelector('#yourCode')
            result.srcdoc = text;
            yourCode.value = text;
            loading.innerHTML = ''
        }
}

/*Lucas Muriano*/

/* */