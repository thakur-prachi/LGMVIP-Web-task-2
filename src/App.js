import React, { useState } from 'react';
import './App.css';
import logo from './letsgrowmore.jpeg';

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [clicked, setClicked] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://reqres.in/api/users?page=1');
      const { data } = await response.json();
      setLoading(false);
      setUsers(data);
      setClicked(true)
    } catch (error) {
      console.error('Fetch error:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <nav>
    <div className="logo">Navbar</div>
    <div>
        <img src={logo} id="logoimage" />
    </div>
    <div>Let's grow more</div>
  </nav>
      {!clicked && <button onClick={fetchData}>Fetch Data</button>}
      {loading && <p>Loading...</p>}
      <div className="cardContainer">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <img src={user.avatar} alt="User Image" />
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;