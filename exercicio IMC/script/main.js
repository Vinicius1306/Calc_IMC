let btnSubmit = document.getElementById("input-submit");

btnSubmit.onclick = (e) => {
    let name = document.getElementById("input-name").value
    let altura = document.getElementById("input-altura").value
    let peso = document.getElementById("input-peso").value
    let result = calcular(altura,peso);

    let tbl = document.createElement("table");
    let tblHead = document.createElement("thead")
    let tblBody = document.createElement("tbody");
    let tr = document.createElement("tr");
    let td = document.createElement("td");


 
    tr.appendChild(td)
    tbl.appendChild(tr)
    tbl.appendChild(tblBody);
    document.getElementById("div-table").appendChild(tbl)

    e.preventDefault();
}

function calcular(altura,peso){
    let resultado = peso/(altura*altura);
    let classificacao = ""
    if (resultado < 18.5){
        classificacao = "Abaixo"
    }else if ((resultado >= 18.5) && (resultado <=24.9)){
        classificacao = "Normal"
    }else if ((resultado >= 25) && (resultado <=29.9)){
        classificacao = "Sobrepeso"
    }else if ((resultado >= 30) && (resultado <=34.9)){
        classificacao = "Grau I"
    }else if ((resultado >= 35) && (resultado <= 39.9)){
        classificacao = "Grau II"
    }else if (resultado >= 40){
        classificacao = "Grau III"
    }
    return [resultado,classificacao];
}

    
