class Pedido {

    realizarPedido(productName,size,color,quantidy ){
        cy.get('[class="product-block grid"]').contains(productName).click();
        cy.get('.input-text').clear().type(quantidy);
        cy.get('.single_add_to_cart_button').click();
        cy.get('.woocommerce-message').should('contain',`${quantidy} × “${productName}” foram adicionados no seu carrinho.`);
    }

}

export default new Pedido()