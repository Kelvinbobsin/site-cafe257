
/* =================================
   CARDÁPIO DIGITAL - CAFÉ 257
================================= */

// Lista de produtos
const produtos = [

    {
        nome: "Café Expresso",
        categoria: "cafes",
        descricao: "Café intenso e encorpado, preparado na hora.",
        preco: 5.00,
        imagem: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600"
    },

    {
        nome: "Cappuccino",
        categoria: "cafes",
        descricao: "Café com leite cremoso e espuma suave.",
        preco: 9.00,
        imagem: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600"
    },

    {
        nome: "Pão de Queijo",
        categoria: "salgados",
        descricao: "Pão de queijo quentinho e saboroso.",
        preco: 6.00,
        imagem: "assets/images/pastel.png"
    },

    {
        nome: "Croissant",
        categoria: "salgados",
        descricao: "Massa folhada crocante e macia.",
        preco: 8.00,
        imagem: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600"
    },

    {
        nome: "Brownie",
        categoria: "doces",
        descricao: "Brownie de chocolate com textura macia.",
        preco: 10.00,
        imagem: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600"
    },

    {
        nome: "Café Gelado",
        categoria: "bebidas",
        descricao: "Bebida refrescante com café e leite.",
        preco: 12.00,
        imagem: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600"
    }

];

// Elemento onde os produtos serão exibidos
const containerProdutos = document.getElementById("menu-products");

// Função para exibir os produtos
function exibirProdutos(listaProdutos) {

    containerProdutos.innerHTML = "";

    listaProdutos.forEach(produto => {

        const card = document.createElement("article");

        card.classList.add("product-card");

        card.innerHTML = `
            <img
                src="${produto.imagem}"
                alt="${produto.nome}"
                loading="lazy"
            >

            <div class="product-info">

                <h3>${produto.nome}</h3>

                <p>${produto.descricao}</p>

                <span class="product-price">
                    ${produto.preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}
                </span>

                <a
                    href="https://wa.me/55519810390?text=${encodeURIComponent(
                        `Olá! Gostaria de pedir: ${produto.nome}`
                    )}"
                    target="_blank"
                    class="btn-whatsapp"
                >
                    Pedir pelo WhatsApp
                </a>

            </div>
        `;

        containerProdutos.appendChild(card);

    });

}

// Filtros do cardápio
const botoesFiltro = document.querySelectorAll(".filter-btn");

botoesFiltro.forEach(botao => {

    botao.addEventListener("click", () => {

        const categoriaSelecionada = botao.dataset.category;

        // Atualiza o botão ativo
        botoesFiltro.forEach(item => {
            item.classList.remove("active");
        });

        botao.classList.add("active");

        // Filtra os produtos
        const produtosFiltrados =
            categoriaSelecionada === "todos"
                ? produtos
                : produtos.filter(produto =>
                    produto.categoria === categoriaSelecionada
                );

        exibirProdutos(produtosFiltrados);

    });

});

// Exibe todos os produtos ao carregar a página
exibirProdutos(produtos);


console.log("Site da Café 257 carregado com sucesso!");
