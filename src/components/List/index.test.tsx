import { render, screen } from '@testing-library/react'
import React from 'react'
import { RecoilRoot } from 'recoil'

import { useListParticipants } from '../../state/hook/listParticipants'

import { List } from '.'

jest.mock('../../state/hook/listParticipants', () => ({
  useListParticipants: jest.fn(),
}))

describe('Lista de Participantes', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('deve exibir uma lista vazia', () => {
    jest.mocked(useListParticipants).mockReturnValue([])

    render(
      <RecoilRoot>
        <List />
      </RecoilRoot>
    )

    const items = screen.queryAllByRole('listitem')

    expect(items).toHaveLength(0)
  })

  it('deve exibir a lista de participantes', () => {
    jest.mocked(useListParticipants).mockReturnValue(['Jhon Doe'])

    render(
      <RecoilRoot>
        <List />
      </RecoilRoot>
    )

    const items = screen.queryAllByRole('listitem')

    expect(items).toHaveLength(1)
  })
})
