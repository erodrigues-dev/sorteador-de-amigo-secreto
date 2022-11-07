import { atom } from 'recoil'

export const listaParticipantesState = atom<string[]>({
  key: 'listaParticipantesState',
  default: [],
})

export const friendsState = atom<Map<string, string>>({
  key: 'friendsState',
  default: new Map(),
})

export const erroState = atom<string>({
  key: 'erroState',
  default: '',
})
