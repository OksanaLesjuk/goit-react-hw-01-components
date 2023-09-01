import { Frend, Status } from "./FriendList.styled"
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
      <Frend key={id}>
        <Status isOnline={isOnline}></Status>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </Frend>
    );
  };

export default FriendListItem

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  };