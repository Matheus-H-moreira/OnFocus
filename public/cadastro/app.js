document.getElementById('cadastro').addEventListener('click', (event) => {
    event.preventDefault()
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const usuario = document.getElementById('usuario').value
    let senha = document.getElementById('senha').value
    let confirmarSenha = document.getElementById('confirmarSenha').value

    if (senha === confirmarSenha) {
        const senhaCerta = senha

        const dadosUsuario = {
            nome: nome,
            email: email,
            usuario: usuario,
            senha: senhaCerta
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
                } else {
                    alert("Erroao salvar os dados")
                }
            })
            .catch(error => {
                alert("Erro na conexão com o servidor")
                console.error(error)
            })
    } else if (senha !== confirmarSenha) {
        alert("As senhas não estão iguais")
    }
})