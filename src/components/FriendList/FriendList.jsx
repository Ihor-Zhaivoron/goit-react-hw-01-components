import PropTypes from 'prop-types';

// import { FriendListItem } from './StatsItem';
// import css from "./FriendList.module.css";

export function Friendlist ({ friends }) {
    return <ul className="friend-list">
        {friends.map(friend => (
            <FriendListItem
                key={friends.id}
                avatar={friends.avatar}
                name={friends.name}
                isOnline={friends.isOnline}
        />
        ))        
        }
    </ul>
};

Friendlist.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ),
}