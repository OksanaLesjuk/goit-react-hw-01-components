// {
//     "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
//     "name": "Mango",
//     "isOnline": true,
//     "id": 1812
//   },

import { FrendListWrap } from "./FriendList.styled"
import FriendListItem from "./FriendListItem"



const FriendList = ({friends}) => {
  return (
    <FrendListWrap>
{friends.map(FriendListItem)}
    
  </FrendListWrap>
  )
}

export default FriendList
