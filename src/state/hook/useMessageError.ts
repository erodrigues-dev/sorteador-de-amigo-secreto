import { useRecoilState } from 'recoil'
import { erroState } from '../atom'

export const useMessageError = () => {
  const [mensagem] = useRecoilState(erroState)

  return mensagem
}
