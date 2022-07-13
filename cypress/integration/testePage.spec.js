/// <reference types="cypress" />

describe('Compras', ()=> {
    it('Cliente pode realizar compra', ()=> {
        cy.visit('http://localhost:8080/')
        
        cy.get('.v-btn__content > .v-icon').click()
        cy.get('.router-link-active').click()
        cy.get('.v-btn__content > .v-icon').click()
        cy.get(':nth-child(2) > .v-list-item__content > a').click()
        cy.server();
        cy.route('POST','**/formulario').as('postForm');

        cy.get('#checkBox > :nth-child(1) > :nth-child(1) > .v-input__control').click()
        cy.get('#checkBox > :nth-child(2) > :nth-child(1) > .v-input__control').click()
        cy.get('#checkBox > :nth-child(1) > :nth-child(2) > .v-input__control').click()
        cy.get('#checkBox > :nth-child(2) > :nth-child(2) > .v-input__control').click()
        cy.get('textArea').type('Onde estão localizados? Aumentem o estoque!') 
        cy.get('.v-btn__content > .router-link-active').click() 
        cy.get('.v-btn__content > a').click() 

       
        

        cy.get('#input-50').type('Nome')
        cy.get('#input-53').type('Sobrenome')
        cy.get('#input-56').type('nomesobrenome@gmail.com')
        cy.get('#input-59').type('(00) 9 00000000 ')
        cy.get('#input-62').type('(00) 9 00000000')
        cy.get('#input-65').type('Rua arnaldo N° 31 Colosso')

        cy.get(' #pais > .col > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon').click()
        cy.get('.v-list-item__title').click()
        cy.get('#estado > .col > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon').click()
        cy.get('#list-item-115-1 > .v-list-item__content > .v-list-item__title').click()

        // teste pix
        cy.get(':nth-child(3) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()
        cy.get('#qrCode > :nth-child(1) > .v-btn').click()
        // teste cartão de débito
        cy.get(':nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()
        cy.get('#input-86').type('Nome Sobrenome')
        cy.get('#input-89').type('000 000 000 00')
        cy.get('#input-92').type('00/00/0000')
        cy.get('#input-95').type('000')
        cy.get('#input-98').type('000 000 000 00')

        // teste cartão de crédito
        cy.get(':nth-child(1) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()
        cy.get('#input-86').type('Nome Sobrenome')
        cy.get('#input-89').type('000 000 000 00')
        cy.get('#input-92').type('00/00/0000')
        cy.get('#input-95').type('000')
        cy.get('#input-98').type('000 000 000 00')       
        cy.get('.d-flex > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon').click()
        cy.get('#list-item-146-3 > .v-list-item__content > .v-list-item__title').click()

        // teste button VERIFICAR
        cy.get('#button > .v-btn > .v-btn__content > .router-link-active').click()
        cy.get('#button > .v-btn > .v-btn__content > a').click()


        // teste compra final
        cy.get('.v-slider__thumb').click()
        cy.get(':nth-child(2) > .button > .v-btn > .v-btn__content').click()
        cy.get(':nth-child(3) > .button > .v-btn').click()
    });

    it('Cliente pode enviar formulario', ()=>{

    });
});