document.getElementById('cadastro').addEventListener('click', (event) => {
    event.preventDefault()

    const nome = document.getElementById('nome').value.trim()
    const email = document.getElementById('email').value.trim()
    const usuario = document.getElementById('usuario').value.trim()
    const senha = document.getElementById('senha').value.trim()
    const confirmarSenha = document.getElementById('confirmarSenha').value.trim()

    if (!nome || !email || !usuario || !senha || !confirmarSenha) {
        alert("Por favor, preencha todos os campos")
        return
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não estão iguais")
        return
    }

    fetch(`http://localhost:3000/cadastro_usuario`)
        .then(response => response.json())
        .then(data => {
            const jaExisteUsuario = data.some(user => user.usuario === usuario)
            const jaExisteEmail = data.some(user => user.email === email)

            if (jaExisteUsuario) {
                alert("Este nome de usuário já está cadastrado")
                return
            }

            if (jaExisteEmail) {
                alert("Este e-mail já está cadastrado")
                return
            }

            const dadosUsuario = {
                nome,
                email,
                usuario,
                senha,
                logado: false
            }

            fetch('http://localhost:3000/cadastro_usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosUsuario)
            })
                .then(response => {
                    if (response.ok) {
                        alert("Cadastro realizado com sucesso")
                        window.location.href = "../login/login.html"
                    } else {
                        alert("Erro ao salvar os dados")
                    }
                })
                .catch(error => {
                    alert("Erro na conexão com o servidor")
                    console.error(error)
                })
        })
        .catch(error => {
            alert("Erro ao verificar usuários existentes")
            console.error(error)
        })
})