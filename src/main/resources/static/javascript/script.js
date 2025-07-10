// Exibir/ocultar lista de serviços
function toggleServiceList(category) {
    const serviceList = document.getElementById(category);

    // Verifica se a lista já está visível e alterna a visibilidade
    if (serviceList.style.display === 'block') {
        serviceList.style.display = 'none';
    } else {
        // Ocultar outras listas abertas
        const allServiceLists = document.querySelectorAll('.service-list');
        allServiceLists.forEach(list => {
            list.style.display = 'none';
        });

        // Exibir a lista específica
        serviceList.style.display = 'block';
    }
}

// Adicionar serviço selecionado
function addService(serviceName) {
    const selectedContainer = document.getElementById('selected-services');

    // Verificar se o serviço já foi adicionado
    if (document.getElementById(`chip-${serviceName}`)) return;

    // Criar elemento "chip" para serviço selecionado
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.id = `chip-${serviceName}`;
    chip.innerHTML = `${serviceName} <span onclick="removeService('${serviceName}')">-</span>`;

    selectedContainer.appendChild(chip);

    // Marcar o item de serviço como 'selected'
    const serviceItem = document.querySelector(`.service-item[data-service="${serviceName}"]`);
    if (serviceItem) {
        serviceItem.classList.add('selected'); // Adiciona a classe 'selected'
    }

    // Fechar a lista de serviços após selecionar um
    const serviceList = document.querySelector(`#${serviceName.toLowerCase().replace(/ /g, '')}`);
    serviceList.style.display = 'none';
}

// Remover serviço selecionado
function removeService(serviceName) {
    const chip = document.getElementById(`chip-${serviceName}`);
    if (chip) chip.remove();

    // Remover a classe 'selected' do item de serviço
    const serviceItem = document.querySelector(`.service-item[data-service="${serviceName}"]`);
    if (serviceItem) {
        serviceItem.classList.remove('selected');
    }
}

// Detectar cliques fora das listas de serviços para fechar as listas
document.addEventListener('click', function(event) {
    const serviceLists = document.querySelectorAll('.service-list');
    const serviceIcons = document.querySelector('.service-icons');

    // Verificar se o clique foi fora das listas de serviços e dos ícones
    let clickedInside = false;
    serviceLists.forEach(list => {
        if (list.contains(event.target)) {
            clickedInside = true;
        }
    });
    if (serviceIcons.contains(event.target)) {
        clickedInside = true;
    }

    // Se o clique foi fora de qualquer lista ou ícone, fecha todas as listas
    if (!clickedInside) {
        serviceLists.forEach(list => {
            list.style.display = 'none';
        });
    }
});
