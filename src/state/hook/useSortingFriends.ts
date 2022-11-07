import { useSetRecoilState } from 'recoil'
import { friendsState } from '../atom'

import { sortingFriends } from '../helpers/sortingFriends'
import { useListParticipants } from './useListParticipants'

export const useSortingFriends = () => {
  const list = useListParticipants()
  const setFriends = useSetRecoilState(friendsState)

  const sorting = () => {
    const friends = sortingFriends(list)
    setFriends(friends)
  }

  return sorting
}
