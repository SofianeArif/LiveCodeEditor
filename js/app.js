// compilation des inputs vers l'iframe

function compile() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;


// Tab support

  html.addEventListener('keydown', (e) => {
  if (e.keyCode === 9) {
    e.preventDefault()

    html.setRangeText(
      '  ',
      html.selectionStart,
      html.selectionStart,
      'end'
    )
  }
})

  css.addEventListener('keydown', (e) => {
  if (e.keyCode === 9) {
    e.preventDefault()

    css.setRangeText(
      '  ',
      css.selectionStart,
      css.selectionStart,
      'end'
    )
  }
})

  js.addEventListener('keydown', (e) => {
  if (e.keyCode === 9) {
    e.preventDefault()

    js.setRangeText(
      '  ',
      js.selectionStart,
      js.selectionStart,
      'end'
    )
  }
})



// Default Value

//   const PREFIX = 'livecode-';
//   const data = ['html', 'css', 'js'].map((key) => {
//     const prefixedKey = PREFIX + key;
//     const jsonValue = localStorage.getItem(prefixedKey);

//     if (jsonValue != null) return JSON.parse(jsonValue);
//   });
//   setInitial(data);
//   document.body.onkeyup = function () {
//     localStorage.setItem('livecode-html', JSON.stringify(html.value));
//     localStorage.setItem('livecode-css', JSON.stringify(css.value));
//     localStorage.setItem('livecode-js', JSON.stringify(js.value));
//     code.open();
//     code.writeln(
//       html.value +
//         '<style>' +
//         css.value +
//         '</style>' +
//         '<script>' +
//         js.value +
//         '</script>'
//     );
//     code.close();
//   };


//   function setInitial(data) {
//   let htmlContent = data[0] || '<h1>Hello World</h1>';
//   let cssContent =
//     data[1] ||
//     `body {
//     background-color: #222;
//     }
//     h1 {
//       color: #fff;
//       text-align: center;
//       margin-top: 10%;
//     }`;
//   let jsContent = data[2] || `document.getElementById('h1')`;
//   css.value = cssContent;
//   js.value = jsContent;
//   html.value = htmlContent;
//   code.open();
//   code.writeln(
//     htmlContent +
//       '<style>' +
//       cssContent +
//       '</style>' +
//       '<script>' +
//       jsContent +
//       '</script>'
//   );
//   code.close();
// }


// bouton clear

document.querySelectorAll('.clear').forEach((clear) =>
  clear.addEventListener('click', (e) => {
    const ele = e.target.classList[1];
    document.querySelector(`#${ele}`).value = '';
    compile();
  })
);


// bouton minimize 

document.querySelectorAll('.control').forEach((control) =>
  control.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.classList.toggle('collapse');
    e.target.classList.add('close');
    e.target.parentElement.querySelector('h2').classList.toggle('hidden');
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