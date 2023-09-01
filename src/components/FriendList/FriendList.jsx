

import { FrendListWrap } from "./FriendList.styled"
import FriendListItem from "./FriendListItem"
import PropTypes from 'prop-types';


const FriendList = ({friends}) => {
  return (
    <FrendListWrap>
{friends.map(FriendListItem)}
    
  </FrendListWrap>
  )
}

FriendList.propTypes = { friends: PropTypes.array };

export default FriendList
