/// <reference types="cypress" />
const Pedido = require('../support/page_objects/pedido.page')
const Checkout = require('../support/page_objects/checkout.page')


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //Realizando login e acessando a loja
        cy.visit('/minha-conta'); 
        cy.login('aluno_ebac@teste.com','teste@teste.com');
        cy.get('.logo-in-theme > .logo > a > .logo-img').click();

        //Realizando pedido
        Pedido.realizarPedido('Produto de Teste','M','Black',4);

        //Conferindo o pedido no carrinho
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click();
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click();
        cy.get('.checkout-button').click();


        //Realizando checkout e finalizando a compra
        Checkout.realizarCheckout(
            'Fulano',
            'de Tal',
            'Empresa Tal',
            'Brasil',
            'Rua Tal',
            '123',
            'São Paulo',
            'São Paulo',
            '12345678',
            '11912345678',
            'teste@teste.com'
        );
        cy.get('.page-title').should('contain','Pedido recebido');
    });


})
