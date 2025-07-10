document.getElementById("agendamentoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário e recarregamento da página

    // Captura os valores dos campos de entrada
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    // Captura o barbeiro escolhido
    const barbeiro = document.querySelector('input[name="barbeiro"]:checked').value;

    // Captura os serviços selecionados
    const selectedServices = [];
    const services = document.querySelectorAll('.service-item.selected');  // Captura os serviços com a classe 'selected'
    services.forEach(service => {
        selectedServices.push(service.getAttribute('data-service'));  // Pega o nome do serviço
    });

    // Envia os dados para o backend (Spring Boot)
    fetch('/agendamento/confirmar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            nome: nome,
            telefone: telefone,
            data: data,
            hora: hora,
            barbeiro: barbeiro,
            services: selectedServices.join(', ')  // Envia os serviços como string
        })
    })

    .then(response => response.text())
    .then(data => {
        // Exibe a resposta do backend (informações do agendamento)
        document.getElementById("resultado").innerHTML = data;
        document.getElementById("confirm").style.display = "block";
    });
});
