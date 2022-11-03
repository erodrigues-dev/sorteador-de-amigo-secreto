import { useRecoilState } from 'recoil'
import { listaParticipantesState } from '../atom'

export const useListParticipant = () => {
  const [list] = useRecoilState(listaParticipantesState)

  return list
}
