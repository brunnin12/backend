
    let valor_total = document.getElementById('valor_total')
    let total = document.getElementById('total')

    let qtd = []
    let preco = []

    total.addEventListener('click', ()=>{
        let qtd_produto = document.getElementById('qtd_produto').value
        let preco_produto = document.getElementById('preco_produto').value
        // console.log(qtd_produto)

        qtd.push(qtd_produto)
        preco.push(preco_produto)
        // console.log(qtd)

        let soma = 0.0  
        for(i=0;i<preco.lenght;i++){
            soma = soma + (qtd[i]*preco[i])
            console.log()
        }
        valor_total.innerHTML = ''
            for(i=0;i<preco.lenght;i++){
                    valor_total.innerHTML += 'Quantidade = ' +qtd[i] + '&emsp'
                    valor_total.innerHTML += 'Preço Produto = ' +preco[i] + '&emsp'
        }
    })
    


    

 


