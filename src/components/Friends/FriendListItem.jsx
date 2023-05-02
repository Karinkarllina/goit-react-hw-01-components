import PropTypes from 'prop-types';
import css from './friends.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    function typeStatus() {
        if (isOnline === true ) {
            return `${css.status} ${css.isOnline}`
        } else {
            return `${css.status} ${css.isOffline}`
        }
    }
    return (
            <li className={css.item}>
                <span className={typeStatus()}>{isOnline }</span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
        </li>

    )
}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}


