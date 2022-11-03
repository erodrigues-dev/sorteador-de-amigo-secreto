import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { RecoilRoot } from 'recoil'

import { Footer } from '.'
import { useListParticipants } from '../../state/hook/listParticipants'

jest.mock('../../state/hook/listParticipants', () => ({
  useListParticipants: jest.fn(),
}))

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}))

describe('Footer da aplicacao', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Não existe participantes suficientes', () => {
    beforeEach(() => {
      jest.mocked(useListParticipants).mockReturnValue([])
    })

    it('a brincadeira não pode ser iniciada', () => {
      render(
        <RecoilRoot>
          <Footer />
        </RecoilRoot>
      )

      const button = screen.getByRole('button')

      expect(button).toBeDisabled()
    })
  })

  describe('Existe participantes suficientes', () => {
    beforeEach(() => {
      jest
        .mocked(useListParticipants)
        .mockReturnValue(['nome 1', 'nome 2', 'nome 3'])
    })

    it('deve conseguir iniciar a brincadeira', () => {
      render(
        <RecoilRoot>
          <Footer />
        </RecoilRoot>
      )

      const button = screen.getByRole('button')

      expect(button).not.toBeDisabled()
    })

    it('a brincadeira foi iniciada', () => {
      render(
        <RecoilRoot>
          <Footer />
        </RecoilRoot>
      )

      const button = screen.getByRole('button')
      fireEvent.click(button)

      expect(mockNavigate).toHaveBeenCalledWith('/sorteio')
    })
  })
})
