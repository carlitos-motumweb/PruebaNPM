const expect = require('chai').expect;
const fibonacci_simple = require('..').default;

describe('#Ejecutando TEST: ', function(){
    'use strict';
    it('Se obtiene el fibonazzi de 10',function(){
        const fibo = fibonacci_simple();
        let resultadoFIBO = 0;
        for(let i = 0; i<10; i++){
            resultadoFIBO = fibo.next();
            console.log(resultadoFIBO)
        }

        expect(resultadoFIBO.value).to.equal(34)

    })

    it('Se obtiene el fibonazzi 15 veces, pero a la decima se resetea',function(){
        const fibo = fibonacci_simple();
        let resultadoFIBO = 0;
        for(let i = 0; i<15; i++){
            if(i!=9){
            resultadoFIBO = fibo.next();
        } else{
            resultadoFIBO = fibo.next(true)
        }
            console.log(resultadoFIBO)
        }
        

        expect(resultadoFIBO.value).to.equal(5)

    })
})