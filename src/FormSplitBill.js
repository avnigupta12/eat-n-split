import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("you");
  const paidByFriend = bill ? bill - paidByUser : "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "you" ? paidByFriend : -Number(paidByUser));
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>SPLIT A BILL WITH {selectedFriend?.name}</h2>
      <label className="label">💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label className="label">🕴️ Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label className="label">🧑‍🤝‍🧑 {selectedFriend?.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label className="label">😶 Who is payng the bill?</label>
      <select
        className="select"
        onChange={(e) => setWhoIsPaying(e.target.value)}
        value={whoIsPaying}
      >
        <option value="you">You</option>
        <option value="friend">{selectedFriend?.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
