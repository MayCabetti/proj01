let valorC = Number(prompt("Insira o valor da sua compra (R$)"));

if(valorC >= 100) { 
    let valorComDesconto = valorC * 0.9;
    alert(`Você recebeu um desconto de 10%! O novo valor é ${valorComDesconto}R$`); 
    } else {
        alert ("Certo >-<");
    }
