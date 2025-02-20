import FriendListItem from './FriendListItem';

// export default function FriendList({ friends }) {
//   return (
//     <ul>
//       {friends.map(person => (
//         <li key={person.id}>
//           <FriendListItem friend={person} />
//         </li>;
//       ))}
//     </ul>
//   );
// }
// ==============================
export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(person => (
        <li key={person.id}>
          <FriendListItem friend={person} />
        </li>
      ))}
    </ul>
  );
}
