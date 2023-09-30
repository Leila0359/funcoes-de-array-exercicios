const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const retornaCaixaAlta = (objeto) => {
    for (let chave in objeto){
       
    }
    return objeto
}  
console.log(retornaCaixaAlta(infosPessoa))


function valoresComoTexto(objeto) {
    let = 'objeto'
    for (let chave in objeto){
        texto += 'o valor da propriedade $ {chave} e ${objeto[chave]}.';

    }
    return objeto;
    
}
 console.log(valoresComoTexto)
 valoresComoTexto()


 function executaObjetoECallback(objeto, callback){
    const resultado = ('callback, objeto');
    console.log(resultado);

 }

  executaObjetoECallback()

  function executarObjetoEUmCallback (nome, profissao, username, senha ){
    const dadosDeCallback = {
        nome: "astrodev",
        profissao: "Dev das estrelas",
        username: "astrodev_labenu",
        senha: "melhorDeTodos"
    }
    return 'o nome dela e ${(nome)}, a profissao e ${profissao}, o username e ${username}, e a sua senha ${senha},'
    
  }
  console.log(executarObjetoEUmCallback);
  executarObjetoEUmCallback()