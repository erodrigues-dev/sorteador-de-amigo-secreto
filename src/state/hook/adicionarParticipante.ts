import { useRecoilState } from 'recoil'
import { erroState, listaParticipantesState } from '../atom'

export const useAdicionarParticipante = () => {
  const [lista, setLista] = useRecoilState(listaParticipantesState)
  const [, setErro] = useRecoilState(erroState)

  return (nomeParticipante: string) => {
    const existeNome = lista.includes(nomeParticipante)

    if (existeNome) {
      setErro('Nome duplicado não é permitido!')
      setTimeout(() => {
        setErro('')
      }, 5000)
      return
    }

    return setLista([...lista, nomeParticipante])
  }
}
