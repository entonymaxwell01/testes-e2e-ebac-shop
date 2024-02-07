class Checkout {

    realizarCheckout(firstName, lastName, company, country, address, number, city, state, postcode, phone, email){
        cy.get('#billing_first_name').clear().type(firstName);
        cy.get('#billing_last_name').clear().type(lastName);
        cy.get('#billing_company').clear().type(company);
        cy.get('#select2-billing_country-container').click().type(`${country}{enter}`);
        cy.get('#billing_address_1').clear().type(address);
        cy.get('#billing_address_2').clear().type(number);
        cy.get('#billing_city').clear().type(city);
        cy.get('#select2-billing_state-container').type(`${state}{enter}`);
        cy.get('#billing_postcode').clear().type(postcode);
        cy.get('#billing_phone').clear().type(phone);
        cy.get('#billing_email').clear().type(email);
        cy.get('#terms').check();
        cy.get('#place_order').click();
    }

}


export default new Checkout();