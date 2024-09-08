// frontend/src/components/ScheduleSessionForm.jsx
import { useState } from "react";
import axios from "axios";

function ScheduleSessionForm({ availability }) {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSchedule = async () => {
    if (!selectedSlot) return;

    try {
      const response = await axios.post('https://backend-qm1n.onrender.com/api/sessions', {
        user: selectedSlot.user,
        start: selectedSlot.start,
        end: selectedSlot.end,
        attendees: [{ name: 'Admin', email: 'admin@example.com' }],
        type: 'one-on-one',
      });
      alert('Session scheduled successfully!');
    } catch (error) {
      console.error('Error scheduling session:', error);
      alert('Failed to schedule session. Please check the console for details.');
    }
  };

  return (
    <div>
      <select onChange={(e) => setSelectedSlot(JSON.parse(e.target.value))} className="form-select">
        <option value="">Select a slot</option>
        {availability.map((slot) => (
          <option key={slot._id} value={JSON.stringify(slot)}>
            {new Date(slot.start).toLocaleString()} - {new Date(slot.end).toLocaleString()}
          </option>
        ))}
      </select>
      <button onClick={handleSchedule} className="btn btn-success mt-3">
        Schedule Session
      </button>
    </div>
  );
}

export default ScheduleSessionForm;
