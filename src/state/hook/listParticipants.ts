import { useRecoilState } from 'recoil'
import { listaParticipantesState } from '../atom'

export const useListParticipants = () => {
  const [list] = useRecoilState(listaParticipantesState)

  return list
}
