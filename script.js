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

window.onload = carregarProdutos;