import clsx from 'clsx';
import css from './FriendListItem.module.css';
export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const status = clsx(isOnline ? css.online : css.offline);
  return (
    <div>
      <img src={avatar} alt="Avatar" width="60" />
      <p className={css.name}>{name}</p>
      <p className={status}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
