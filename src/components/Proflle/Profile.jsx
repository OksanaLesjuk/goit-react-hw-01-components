
import React from 'react'
import PropTypes from 'prop-types'
import { ProfileWrap, Description, Fhoto, UserName, StatsList , StatsItem, Quantity} from './profile.styled'



function Profile({
username, tag, location, avatar, stats: { followers, views, likes }
      
      
}) {
  return (
    <ProfileWrap>
  <Description>
    <Fhoto
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <UserName>{username}</UserName>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </Description>

  <StatsList>
    <StatsItem>
      <span className="label">Followers</span>
    <Quantity>{followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <span className="label">Views</span>
      <Quantity>{views}</Quantity>
    </StatsItem>
    <StatsItem>
      <span className="label">Likes</span>
      <Quantity>{likes}</Quantity>
    </StatsItem>
  </StatsList>
</ProfileWrap>
  )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
  };

export default Profile



