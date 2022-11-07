import { useRecoilValue } from 'recoil'
import { friendsState } from '../atom'

export const useFriends = () => {
  const friends = useRecoilValue(friendsState)
  return friends
}
