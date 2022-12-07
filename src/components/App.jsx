import user from 'user.json';
import data from 'data.json';

import { Profile } from "components/Profile/Profile";
import { StatsList } from "components/Statistics/StatsList";

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
    </div>
  );
};
