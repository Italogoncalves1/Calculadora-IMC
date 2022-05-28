function enviar() {
    let nome = document.getElementById('txtnome')
    let idade = document.getElementById('idad')
    let altura = document.getElementById('altu')
    let peso = document.getElementById('pes')
    peso = pes.value
    let res = document.getElementById('res')
    let res1 = document.getElementById('res1')
    let res2 = document.getElementById('res2')
    altura = altura.value / 100
    let imc = peso / altura**2
imc = parseFloat(imc).toFixed(2)
res.innerHTML = (`${imc}`)

if (txtnome.value.length == 0 && idad.value.length == 0 && altu.value.length == 0 && pes.value.length == 0 ) {
    alert('[ERRO] Preencha as informações')
    
} else {
    
    if(imc < 16){
        classificacao = 'Peso muito baixo. Muito grave!';
       
       } else if(imc >= 16 && imc <= 16.99){
        classificacao = 'Peso baixo.  Grave!';
       
       } else if(imc >= 17 && imc <= 18.49){
        classificacao = 'Baixo peso';
       
       } else if(imc >= 18.50 && imc <= 24.99){
        classificacao = 'Peso normal';
       
       } else if(imc >= 25 && imc <= 29.99){
        classificacao = 'Sobrepeso';
       
       } else if(imc >= 30 && imc <= 34.99){
        classificacao = 'Obesidade grau I';
       
       } else if(imc >= 35 && imc <= 39.99){
        classificacao = 'Obesidade grau II';
       
       } else { 
        classificacao = 'Obesidade grau III';
       }
}
res.innerText = `Nome: ${txtnome.value} 
Idade: ${idad.value} anos.
Altura: ${altura} m.
Peso: ${peso} kg.` 

res1.innerText = `Possui Íncide de Massa corporal igual a:

${imc};`

res2.innerText = `Sua classificação é: 

${classificacao}`

}

   // res.innerHTML = `  ${ parseFloat(imc).toFixed(2) }`