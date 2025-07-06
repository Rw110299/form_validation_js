const form = document.getElementById('meuForm');
const erroNome = document.getElementById('erroNome');
const erroEmail = document.getElementById('erroEmail');
const erroSenha = document.getElementById('erroSenha');
const mensagemSucesso = document.getElementById('mensagemSucesso');

function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  erroNome.textContent = '';
  erroEmail.textContent = '';
  erroSenha.textContent = '';
  mensagemSucesso.textContent = '';

  let valido = true;

  const nome = form.nome.value.trim();
  if (nome === '') {
    erroNome.textContent = 'Por favor, preencha o nome.';
    valido = false;
  }

  const email = form.email.value.trim();
  if (email === '') {
    erroEmail.textContent = 'Por favor, preencha o email.';
    valido = false;
  } else if (!validarEmail(email)) {
    erroEmail.textContent = 'Por favor, insira um email válido.';
    valido = false;
  }

  const senha = form.senha.value;
  if (senha === '') {
    erroSenha.textContent = 'Por favor, preencha a senha.';
    valido = false;
  } else if (senha.length < 6) {
    erroSenha.textContent = 'A senha deve ter pelo menos 6 caracteres.';
    valido = false;
  }

  if (valido) {
    mensagemSucesso.textContent = 'Formulário enviado com sucesso!';
    form.reset();
  }
});
