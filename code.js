function agradecimento() {
  let nomeCliente = document.getElementById("nome").value;
  let servicoEscolhido = document.getElementById("servico").value

  let mensagem = document.getElementById("agradecer");
  
  
  mensagem.style.color = "#ff3399"; // Cor rosa para combinar com o salão
  mensagem.style.fontWeight = "bold";
  mensagem.style.marginTop = "10px";
  mensagem.style.textAlign = "center";
  mensagem.style.textTransform = "uppercase";
  mensagem.innerHTML = "Muito obrigada, " + nomeCliente + "! Sua solicitação de " + servicoEscolhido + " foi enviada.";
}

function criarConta() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  
  if (email === "" || senha === "") {
    alert("Por favor, preencha os dados.");
  } else if (!email.includes("@")) {
    alert("E-mail inválido! Certifique-se de usar o '@'.");
  } else {
    localStorage.setItem("emailUsuario", email);
    localStorage.setItem("senhaUsuario", senha);
    window.location.href = "login.html";
  }
}

function fazerLogin() {
  let emailInserido = document.getElementById("email").value;
  let senhaInserida = document.getElementById("senha").value;
  
  let emailSalvo = localStorage.getItem("emailUsuario");
  let senhaSalva = localStorage.getItem("senhaUsuario");
  
  if (emailInserido === "" || senhaInserida === "") {
    alert("Por favor, preencha os dados.");
  } else if (!emailInserido.includes("@")) {
    alert("E-mail inválido!");
  } else if (emailInserido != emailSalvo || senhaInserida != senhaSalva) {
    alert("ERRO! E-mail ou senha incorretos");
  } else {
    window.location.href = "homePage.html";
  }
}