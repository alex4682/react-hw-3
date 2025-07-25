import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transaction.json'
import { Social } from './SocialMedia.jsx';
import {Data} from './Data.jsx';
import { Friends } from './Friends.jsx';
import { Transaction } from './Transaction.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Social
      avatar={user.avatar}
      name={user.username}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Data data={data} />
    <Friends friends={friends} />
    <Transaction transactions={transactions} />
  </React.StrictMode>
);

reportWebVitals();
