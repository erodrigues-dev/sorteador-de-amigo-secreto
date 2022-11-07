import React from 'react'
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import Form from '../../components/Form'
import { List } from '../../components/List'

export const Settings = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Form />
        <List />
        <Footer />
      </section>
    </Card>
  )
}
