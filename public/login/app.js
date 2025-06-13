document.getElementById('loginForm').addEventListener('submit', (event) => {
  event.preventDefault()

  const usuario = document.getElementById('usuario').value.trim()
  const senha = document.getElementById('senha').value.trim()

  if (!usuario || !senha) {
    alert('Por favor, preencha todos os campos')
    return
  }

  fetch(`http://localhost:3000/cadastro_usuario?usuario=${encodeURIComponent(usuario)}&senha=${encodeURIComponent(senha)}`)
    .then(response => response.json())
    .then(users => {
      if (users.length === 0) {
        alert('Usuário ou senha incorretos')
        return
      }
      alert('Login realizado com sucesso!')
      window.location.href = '../index.html'
    })
    .catch(error => {
      console.error('Erro ao conectar com o servidor:', error)
      alert('Erro na conexão com o servidor. Tente novamente mais tarde.')
    })
})