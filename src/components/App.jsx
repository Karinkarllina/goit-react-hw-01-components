import user from './Profile/user.json';
import { Profile } from './Profile/Profile';
import data from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';
import friends from './Friends/friends.json';
import { FriendList } from './Friends/FriendList';
import transactions from './Transaction/transactions.json';
import { TransactionHistory } from './Transaction/TransactionHistory';
import css from './App.module.css';





export const App = () => {
  return (
    <div className={css.mainSection}>
      <Profile
        username = {user.username}
        tag = {user.tag}
        location = {user.location}
        avatar = {user.avatar}
        stats = {user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
