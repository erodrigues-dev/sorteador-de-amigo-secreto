import { render, screen } from '@testing-library/react'
import React from 'react'
import { RecoilRoot } from 'recoil'
import { useListParticipant } from '../state/hook/listParticipant'

import { List } from './List'

jest.mock('../state/hook/listParticipant', () => ({
  useListParticipant: jest.fn(),
}))

describe('Lista de Participantes', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('deve exibir uma lista vazia', () => {
    jest.mocked(useListParticipant).mockReturnValue([])

    render(
      <RecoilRoot>
        <List />
      </RecoilRoot>
    )

    const items = screen.queryAllByRole('listitem')

    expect(items).toHaveLength(0)
  })

  it('deve exibir a lista de participantes', () => {
    jest.mocked(useListParticipant).mockReturnValue(['Jhon Doe'])

    render(
      <RecoilRoot>
        <List />
      </RecoilRoot>
    )

    const items = screen.queryAllByRole('listitem')

    expect(items).toHaveLength(1)
  })
})
