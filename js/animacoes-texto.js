//function typeWriter(elemento) {
//    const textoArray = elemento.innerHTML.split('');
//    elemento.innerHTML = '';
//    textoArray.forEach((letra, i) => {
//      setTimeout(() => elemento.innerHTML += letra, 75 * i);
//    });
//  }

  // Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
  // function typeWriter(elemento) {
  // const textoArray = elemento.innerHTML.split('');
  // elemento.innerHTML = '';
  // for(let i = 0; i < textoArray.length; i++) {
  //   setTimeout(() => elemento.innerHTML += textoArray[i], 80 * i);
  // }
// }

  //const titulo = document.querySelector('h1');
  //typeWriter(titulo);

  (function() {
    var node = document.getElementById('message') ,
      message = "Leandro Bruno Barbosa Freitas",
      current = message.split("").reverse(),
      interval = setInterval(function() {
        if (current.length)
          node.innerHTML += current.pop();
        else
          clearInterval(interval);
      }, 100);
}());

(function() {
  var node = document.getElementById('message2') ,
    message2 = "Web Design - Desenvolvedor Front-End - Estudante de Engenharia da Computação ",
    current = message2.split("").reverse(2),
    interval = setInterval(function() {
      if (current.length)
        node.innerHTML += current.pop();
      else
        clearInterval(interval);
    }, 60);
}());