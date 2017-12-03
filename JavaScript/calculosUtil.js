function calcularVf(){

  vp = document.getElementById('vp').value;
  i = document.getElementById('taxa').value;
  n = document.getElementById('periodo').value;
  tN = document.getElementById('tipoPeriodo').value;
  if (tN=='anos') {
  //  document.write(tN);
    n= n*12;
  }


  resultado = vp * Math.pow((1+ (i/100)),n);

  //Arredondado até duas casas decimais
  resultado = Math.ceil(resultado * 100) / 100.
  vf = document.getElementById('vf');

  vf.innerHTML = resultado;


//  vf = vp * (1+ (i/100))^n
}
