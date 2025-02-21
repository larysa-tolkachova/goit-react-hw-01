export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

//  <tbody>
//           {items.map(({ id, type, amount, currency }) => {
//             return (
//               <tr key={id}>
//                 <td>{type}</td>
//                 <td>{amount}</td>
//                 <td>{currency}</td>
//               </tr>
//             );
//           })}
// ===============================
{
  /* import styles from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <div className={styles.transactionHistory}>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
// } */
}
