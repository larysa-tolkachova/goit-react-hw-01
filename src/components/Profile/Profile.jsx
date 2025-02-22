import css from './Profile.module.css';
export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.img} src={image} alt="User avatar" width="150" />
        <p className={css.name}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.statistics}>
        <li className={css.stat}>
          <span className={css.param}>Followers</span>
          <span className={css.dan}>{followers}</span>
        </li>
        <li className={css.stat}>
          <span className={css.param}>Views</span>
          <span className={css.dan}>{views}</span>
        </li>
        <li className={css.stat}>
          <span className={css.param}>Likes</span>
          <span className={css.dan}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
