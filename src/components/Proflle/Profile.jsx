
import React from 'react'
import PropTypes from 'prop-types'
import { ProfileWrap, Description, Fhoto, UserName, StatsList , StatsItem, Quantity} from './profile.styled'



// {
//     "username": "Jacques Gluke",
//     "tag": "jgluke",
//     "location": "Ocho Rios, Jamaica",
//     "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//     "stats": {
//       "followers": 5603,
//       "views": 4827,
//       "likes": 1308
//     }
//   }
  



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

// Profile.propTypes = {

// }

export default Profile



