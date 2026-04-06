const numeroWhatsApp = "5582982362269"; 

function carregarProdutos() {
    const container = document.getElementById('lista-produtos');
    if (!container) return;
    
    container.innerHTML = '';
    
    produtosData.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produto-card';
        
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p class="preco" style="color: #28a745; text-transform: uppercase;">Disponível</p>
            <button class="btn-encomendar" onclick="encomendar('${produto.nome}')">
                Encomendar
            </button>
        `;
        container.appendChild(card);
    });
}

function encomendar(nomeProduto) {
    const mensagem = `Olá! Quero encomendar o perfume ${nomeProduto}.`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

function configurarTema() {
    const btnTema = document.getElementById('btn-tema');
    const corpoSite = document.body;

    const temaSalvo = localStorage.getItem('kr-tema');
    const prefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (temaSalvo === 'escuro' || (!temaSalvo && prefereEscuro)) {
        corpoSite.classList.add('tema-escuro');
        btnTema.innerHTML = 'Tema Claro';
    } else {
        btnTema.innerHTML = 'Tema Escuro';
    }

    btnTema.addEventListener('click', () => {
        corpoSite.classList.toggle('tema-escuro');
        
        if (corpoSite.classList.contains('tema-escuro')) {
            localStorage.setItem('kr-tema', 'escuro');
            btnTema.innerHTML = 'Tema Claro';
        } else {
            localStorage.setItem('kr-tema', 'claro');
            btnTema.innerHTML = 'Tema Escuro';
        }
    });
}

window.onload = () => {
    carregarProdutos();
    configurarTema();
};