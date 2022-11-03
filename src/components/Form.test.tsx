import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

import Form from './Form'

describe('comportamento do Formulario.tsx', () => {
  it('quando o input está vazio, novos participantes não podem ser adicionados', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    )
    const botao = screen.getByRole('button')

    expect(input).toBeInTheDocument()
    expect(botao).toBeDisabled()
  })

  it('adicionar um participante caso exista um nome preenchido', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    )
    const botao = screen.getByRole('button')

    fireEvent.change(input, {
      target: {
        value: 'Jhon Doe',
      },
    })

    fireEvent.click(botao)

    expect(input).toHaveFocus()
    expect(input).toHaveValue('')
  })

  it('não pode adicionar nomes duplicados na lista', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    )
    const botao = screen.getByRole('button')

    fireEvent.change(input, {
      target: {
        value: 'Jhon Doe',
      },
    })

    fireEvent.click(botao)

    fireEvent.change(input, {
      target: {
        value: 'Jhon Doe',
      },
    })

    fireEvent.click(botao)

    const alerta = screen.getByRole('alert')

    expect(alerta.textContent).toEqual('Nome duplicado não é permitido!')
  })

  it('mensagem de erro deve desaparecer automaticamente', () => {
    jest.useFakeTimers()

    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    )
    const botao = screen.getByRole('button')

    fireEvent.change(input, {
      target: {
        value: 'Jhon Doe',
      },
    })

    fireEvent.click(botao)

    fireEvent.change(input, {
      target: {
        value: 'Jhon Doe',
      },
    })

    fireEvent.click(botao)

    let alerta = screen.queryByRole('alert')
    expect(alerta).toBeInTheDocument()

    act(() => {
      jest.runAllTimers()
    })

    alerta = screen.queryByRole('alert')
    expect(alerta).toBeNull()
  })
})
