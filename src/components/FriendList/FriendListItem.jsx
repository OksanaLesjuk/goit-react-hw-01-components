import { Frend, Status } from "./FriendList.styled"


const FriendListItem = ({avatar, name, isOnline, id}) => {
  return (
    <Frend key={id}>
    <Status isOnline={isOnline}></Status>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </Frend>
  )
}

export default FriendListItem
