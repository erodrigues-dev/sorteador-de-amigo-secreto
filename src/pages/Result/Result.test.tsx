import { fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { useFriends } from '../../state/hook/useFriends'
import { useListParticipants } from '../../state/hook/useListParticipants'
import { Result } from './Result'

jest.mock('../../state/hook/useListParticipants')
jest.mock('../../state/hook/usefriends')

describe('Pagina do sorteio', () => {
  const participants = ['Mary', 'Jhon', 'Anthony']
  const friends = new Map([
    ['Mary', 'Jhon'],
    ['Jhon', 'Anthony'],
    ['Anthony', 'Mary'],
  ])

  beforeEach(() => {
    jest.mocked(useListParticipants).mockReturnValue(participants)
    jest.mocked(useFriends).mockReturnValue(friends)
  })

  it('todos os participantes podem exibir seu amigo secreto', () => {
    render(
      <RecoilRoot>
        <Result />
      </RecoilRoot>
    )

    const options = screen.queryAllByRole('option')

    expect(options).toHaveLength(participants.length)
  })

  it('deve exibir o amigo secreto', () => {
    render(
      <RecoilRoot>
        <Result />
      </RecoilRoot>
    )

    const select = screen.getByPlaceholderText('Selecione o seu nome')
    fireEvent.change(select, {
      target: {
        value: participants[0],
      },
    })

    const button = screen.getByRole('button')
    fireEvent.click(button)

    const alert = screen.getByRole('alert')

    expect(alert).toBeInTheDocument()
  })
})
