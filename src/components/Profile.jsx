export default function Profile({
  person: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div>
      <div>
        <img src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>{followers}</span>
          <span>{[followers]}</span>
        </li>
        <li>
          <span>{views}</span>
          <span>{[views]}</span>
        </li>
        <li>
          <span>{likes}</span>
          <span>{[likes]}</span>
        </li>
      </ul>
    </div>
  );
}
