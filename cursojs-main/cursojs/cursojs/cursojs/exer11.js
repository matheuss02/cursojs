const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("digite seu peso (kg): ", (peso) => {
    rl.question("digite sua altura (m): ", (altura) => {
        peso = perseFloat(peso);
        altura = perseFloat(altura);

        let imc = peso / (altura * altura);
        console.log(`seu IMC é: ${imc.toFixed(2)}`);

        if (imc < 18.5) {
            console.log("classificação: abaixo de peso");
        } else if (imc < 24.9) {
            console.log("classificação: peso normal");
        } else if (imc < 29.9) {
            console.log("classificação: sobrepeso");
        } else {
            console.log("classificação: obesidade");
        }

            rl.close();
        });
    });