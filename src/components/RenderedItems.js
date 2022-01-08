import PropTypes from "prop-types";

import Section from "./Section";
import Profile from "./Profile";
import user from "../user.json";
import Statistics from "./Statistics";
import data from "../data.json";
import FriendList from "./FriendList";
import friends from "../friends.json";
import TransactionHistory from "./TransactionHistory";
import transactions from "../transactions.json";

function RenderedItems() {
  return (
    <Section title="All Tasks">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics title="Upload stats" stats={data}></Statistics>
      <FriendList friends={friends}> </FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </Section>
  );
}

RenderedItems.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default RenderedItems;