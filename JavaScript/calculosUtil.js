function calcularVf() {

    vp = document.getElementById('vp').value;
    i = document.getElementById('taxa').value;
    n = document.getElementById('periodo').value;
    tN = document.getElementById('tipoPeriodo').value;
    if (tN == 'anos') {
        //  document.write(tN);
        n = n * 12;
    }


    resultado = vp * Math.pow((1 + (i / 100)), n);

    //Arredondado até duas casas decimais
    resultado = Math.ceil(resultado * 100) / 100.
    vf = document.getElementById('vf');
    
    vf.innerHTML = "Ao final de " + periodo + " " + tN + " você terá " + resultado;


    var labels = [];
    var data = [];
    var dataInvestido = [];
    var dataJuros = [];
    for (var j = 1, max = n; j <= max; j++) {
        labels.push(j);
        dataInvestido.push(vp);
        data.push(Math.ceil(calcVF(vp, i, j) * 100) / 100.);
        dataJuros.push((Math.ceil(calcVF(vp, i, j) * 100) / 100.) - vp);
    }

    var ctx = document.getElementById("myChart");

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Dinheiro acumulado',
                data: data,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }, {
                label: 'Dinheiro investido',
                data: dataInvestido,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1
            }, {
                label: 'Juros',
                data: dataJuros,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    //  vf = vp * (1+ (i/100))^n
}

function calcularVfMultiPmt() {

    parcela = document.getElementById('parcela').value;
    i = document.getElementById('taxa2').value;
    n = document.getElementById('periodo2').value;
    tN = document.getElementById('tipoPeriodo2').value;
    periodo = n;
    if (tN == 'anos') {
        //  document.write(tN);
        n = n * 12;
    }
    resultado = parcela * (Math.pow((1 + (i / 100)), n) - 1) / (i / 100);


    //Arredondado até duas casas decimais
    resultado = Math.ceil(resultado * 100) / 100.
    vf = document.getElementById('vf2');
    vf.innerHTML = "Ao final de " + periodo + " " + tN + " você terá " + resultado;


    var labels = [];
    var data = [];
    var dataInvestido = [];
    var dataJuros = [];
    for (var j = 1, max = n; j <= max; j++) {
        labels.push(j);
        investido = parcela * j;
        dataInvestido.push(investido);
        data.push(Math.ceil(calcMVF(parcela, i, j) * 100) / 100.);
        dataJuros.push((Math.ceil(calcMVF(parcela, i, j) * 100) / 100.) - investido);
    }

    var ctx = document.getElementById("myChart2");

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Dinheiro acumulado',
                data: data,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }, {
                label: 'Dinheiro investido',
                data: dataInvestido,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1
            }, {
                label: 'Juros',
                data: dataJuros,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function calcularRendaMensal() {

}

function calcVF(vp, i, n) {
    return vp * Math.pow((1 + (i / 100)), n);
}

function calcMVF(parcela, i, n) {
    return parcela * (Math.pow((1 + (i / 100)), n) - 1) / (i / 100);
}
