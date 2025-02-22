import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={css.container}>
      {friends.map(person => (
        <li key={person.id} className={css.items}>
          <FriendListItem friend={person} />
        </li>
      ))}
    </ul>
  );
}
