import user from '../data/user.json';
import data from '../data/data.json';

import { Profile } from "components/Profile/Profile";
import { StatsList } from "components/Statistics/StatsList";
import { FriendList } from "components/FriendList/FriendList";


export const App = () => {
  return (
    <div>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}
/>
      <StatsList title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
    </div>
  );
};
