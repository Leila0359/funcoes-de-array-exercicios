function calcularQuintuploEMetade (item){
    
    const numeros = [1,2,3,4,5,6,7,8];
    const numQuintuplos = [5, 10,15,25];
    const numerosMulplicaPor5 = (numero)=> numero * 5
    
    const numerosQuintuplos = numeros.map((numeroMutiplicadoPor5)=>{

        return numeroMutiplicadoPor5
        
    })
    console.log(numQuintuplos);

    const numero = [2, 4, 5, 6];
    const metades =[2/2, 4/2, 5/2, 6/2];
    
    const metade = (numero) => numero / 2

    const met = numeros.map((numerosDivididoPor2)=>{
        return numerosDivididoPor2
    })
    console.log(metades);

}
calcularQuintuploEMetade()


