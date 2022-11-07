import { render } from '@testing-library/react'
import React from 'react'
import { RecoilRoot } from 'recoil'
import { Settings } from './Settings'

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}))

describe('Pagina de configuração', () => {
  it('deve ser renderizada corretamente', () => {
    const { container } = render(
      <RecoilRoot>
        <Settings />
      </RecoilRoot>
    )

    expect(container).toMatchSnapshot()
  })
})
