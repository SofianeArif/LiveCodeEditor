
// compilation des inputs vers l'iframe

function compile() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;




// bouton clear

document.querySelectorAll('.clear').forEach((clear) =>
  clear.addEventListener('click', (e) => {
    const ele = e.target.classList[1];
    document.querySelector(`#${ele}`).value = '';
    compile();
  })
);


// bouton minimize 

document.querySelectorAll('.min').forEach((min) =>
  min.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.classList.toggle('collapse');
    e.target.classList.add('close');
    e.target.parentElement.querySelector('#icone').classList.toggle('hidden');
  })
);

/* Bouton de copie */


// Affichage du message

document.querySelectorAll('.copybtn').forEach((copy) => {
  copy.addEventListener('click', (e) => {
    const tmp = e.target.innerHTML;
    e.target.innerText = 'Copied.';
    setTimeout(function () {
      e.target.innerHTML = tmp;
    }, 1000);
  });
});

// récupération du code

document.querySelector('.copy-html').addEventListener('click', (e) => {
  const code = document.querySelector('#html');
  copyCode(code);
});

// copie
function copyCode(code) {
  code.select();
  document.execCommand("copy");
}



/* Fin du bouton de copie */



// Attribution des valeurs et des balises au iframe 
  document.body.onkeyup = function() {
    code.open();
    code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
    code.close();
  };
}


compile();