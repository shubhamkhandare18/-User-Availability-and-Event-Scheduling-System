import { useEffect, useState } from "react";
import axios from "axios";
import ScheduleSessionForm from "C:/Users/SHUBHAM/Assessment/scheduling-app/frontend/src/components/ScheduleSessionForm.jsx";

function Admin() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    axios.get('https://backend-qm1n.onrender.com/api/users').then((response) => setUsers(response.data));
  }, []);

  const fetchAvailability = async (userId) => {
    try {
      const response = await axios.get(`//https://backend-qm1n.onrender.com/api/availability/${userId}`);
      setAvailability(response.data);
    } catch (error) {
      console.error('Error fetching availability:', error);
    }
  };

  return (
    <div className="ad">
    <div className="container">
      <h1 className="adminn">Admin Scheduling Interface</h1>
      <select className="form-select" onChange={(e) => setSelectedUser(users[e.target.value])}>
        <option value="">Select User</option>
        {users.map((user, index) => (
          <option key={user._id} value={index}>
                           {user.email}
             </option>
           ))}
         </select>
         <button className="btn btn-primary mt-3" onClick={() => fetchAvailability(selectedUser?._id)}>
           View Availability
         </button>
         {availability.length > 0 && <ScheduleSessionForm availability={availability} />}
       </div>
       </div>
     );
   }

   export default Admin;
