import "./index.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <FriendsContainer data={initialFriends} />
      <BillContainer />
      <AddFriend />
    </div>
  );
}

function FriendsContainer({ data }) {
  return (
    <div className="sidebar">
      <ul>
        {data.map((el, idx, arr) => (
          <li>
            <Friend name={el.name} balance={el.balance} image={el.image} />
          </li>
        ))}
      </ul>
      <button className="button">Add friend</button>
    </div>
  );
}

function Friend({ name, image, balance }) {
  return (
    <>
      <img src="" alt={`${name}-photo`} />
      <div>
        <h3>{name}</h3>
        <p>You are {name} are even</p>
      </div>
      <button className="button">Select</button>
    </>
  );
}

function BillContainer({ friendName }) {
  return (
    <form className="form-split-bill">
      <h2>Spilt a bill with {friendName}</h2>
      <label>💰 Bill value</label>
      <input type="number" />
      <label>🕴 Your expense</label>
      <input type="number" />
      <label>👫 {friendName}'s expense</label>
      <input type="number" />
      <label>🤑 Who is paying the bill? </label>
      <select>
        <option>You</option>
        <option>{friendName}</option>
      </select>
      <button className="button">Spilt biill</button>
    </form>
  );
}

function AddFriend() {
  return (
    <div>
      <form className="form-add-friend">
        <label>👫 Friend name</label>
        <input type="text" />
        <label>🌆 Image URL</label>
        <input type="text" />
        <button className="button">Add</button>
      </form>
      <button className="button">Close</button>
    </div>
  );
}
