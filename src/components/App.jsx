import Profile from "./Proflle/Profile";
import Statistics from "./Statistics/Statistics";

import user from './data/user.json';
import data from './data/data.json'
import FriendList from "./FriendList/FriendList";
import friends from './data/friends.json'

export const App = () => {
  return (
    <>
     <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
 <Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
<FriendList friends={friends} />;
  </>
   
  );
};