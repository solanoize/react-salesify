import React from 'react'
import WelcomeLayout from './WelcomeLayout'

describe('<WelcomeLayout />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<WelcomeLayout />)
  })
})