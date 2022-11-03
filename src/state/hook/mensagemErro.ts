import { useRecoilState } from 'recoil'
import { erroState } from '../atom'

export const useMensagemDeErro = () => {
  const [mensagem] = useRecoilState(erroState)

  return mensagem
}
