import { useState } from "react";
import axios from "axios";
import AvailabilityForm from 'C:/Users/SHUBHAM/Assessment/scheduling-app/frontend/src/components/AvailabiltyForm.jsx';

function Home() {AvailabilityForm
  const [user, setUser] = useState(null);

  const loginUser = async (email) => {
    try {
      const response = await axios.post('https://backend-qm1n.onrender.com/api/users/login', { email });
      setUser(response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="body">
    <div className="container">
      <div className="main">
      <h1 className="details">User Avaibility Details</h1>
      <h2 className="schedule">User Schedule</h2>
      </div>
      <input type="email" placeholder="Enter your email" onBlur={(e) => loginUser(e.target.value)} className="form-control mb-3" />
      {user && <AvailabilityForm user={user._id} />}
    </div>
    </div>
  );
}

export default Home;