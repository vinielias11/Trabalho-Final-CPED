async function traduzir(){
    let target = document.getElementsByClassName("select-language")[0].value;
    let text = document.getElementsByClassName("text-input")[0].value;

    const objresponse = await fetch('http://localhost:3000', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({target, text})
    })

    const traducao = await objresponse.json();

    document.getElementsByClassName("text-output")[0].innerHTML = traducao.texto
}

