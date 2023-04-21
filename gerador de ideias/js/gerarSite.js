let yourCode = document.querySelector('#yourCode')
let site = document.querySelector('#yourSite')
yourCode.addEventListener('keyup', function(e){
	site.srcdoc = yourCode.value;
})


let arquivo = document.querySelector('#baixarSite');
arquivo.addEventListener('click', (e)=>{
    let title = document.querySelector('#nomeEmpresa').value
	var textToSave1 = yourCode.value;
                var textToSaveAsBlob1 = new Blob([textToSave1], {type:"text/plain"});
                var textToSaveAsURL1 = window.URL.createObjectURL(textToSaveAsBlob1);
                var fileNameToSaveAs = `${title}Site.html`;
                var downloadLink = document.createElement("a");
                downloadLink.download = fileNameToSaveAs;
                downloadLink.innerHTML = "Download File";
                downloadLink.href = textToSaveAsURL1;
                downloadLink.onclick = destroyClickedElement;
                downloadLink.style.display = "none";
                document.body.appendChild(downloadLink);
                downloadLink.click();
})
function destroyClickedElement(event){
            }