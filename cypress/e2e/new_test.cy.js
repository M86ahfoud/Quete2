//<référence types="cypress"/>
import {faker} from '@faker-js/faker';
describe('Scénarios de test ', ()=>{
    beforeEach(() => {
        cy.visit("https://preprod.backmarket.fr/fr-fr/register")
        cy.contains('OK pour moi').click()
    })
    it('Inscription réussi', ()=> {
        cy.get('#firstName').type("amjsdlkfjdsfkldf")
        cy.get('#lastName').type('Amir')
        cy.get('#signup-email').type('amirmourad@gmail.com')
        cy.get('#signup-password').type('Qani-89jki')
        cy.get('._2OVE0h6V').click()
        cy.get('[data-qa=signup-submit-button]').click()

    })

    it('Inscription non échoué', ()=> {
        cy.get('#firstName').type("amjsdlkfjdsfkldf")
        cy.get('#lastName').type('Amir')
        cy.get('#signup-email').type('amirmourad@gmail.com')
        cy.get('#signup-password').type('lani-89jki')
        cy.get('._2OVE0h6V').click()
        cy.get('[data-qa=signup-submit-button]').click()
        
    })

    it('Test d\'authentification réussi', ()=> {
        cy.get('#signin-email').type(faker.internet.email())
        cy.get('#signin-password').type(faker.internet.password())
        cy.get('[data-qa=signin-submit-button]').click()
    })

    it('Test d\'authentification échoué', ()=> {
        cy.get('#signin-email').type("hanimahfoud@gmail.com")
        cy.get('#signin-password').type('Mah-86.asma')
        cy.get('[data-qa=signin-submit-button]').click()
       
    })
})


