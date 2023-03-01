function belongsFibonacci(number){
    
    const fibonacci = [0,1]; // Criando a variável que irá guardar a sequência de fibonacci
  
    //Função recursiva para criar o loop e a verificação para retornar assim que achar o número ou defenir que ele n esta presente na sequeência
    function loopFibonacci(){
        const nowNumber = fibonacci[fibonacci.length -2] + fibonacci[fibonacci.length -1]
        fibonacci.push(nowNumber)
        if(number == nowNumber){
            return console.log(number,'Pertence a sequência Fibonacci')
        }else if (nowNumber > number){
            return console.log(number,'Não pertence a sequência Fibonacci')
        }else{
            loopFibonacci()
        }
    }

    loopFibonacci()
}

belongsFibonacci(34)