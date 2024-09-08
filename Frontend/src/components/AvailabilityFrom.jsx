// frontend/src/components/AvailabilityForm.jsx
import { useState } from 'react';
import axios from 'axios';

function AvailabilityForm({ user }) {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [duration, setDuration] = useState(25);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://backend-qm1n.onrender.com/api/availability', {
        user,
        start,
        end,
        duration,
      });
      alert('Availability is there for work!');
    } catch (error) {
      console.error('Error adding availability:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label className='lab'>Start Time</label>
        <input type="datetime-local" value={start} onChange={(e) => setStart(e.target.value)} className="form-control" required />
      </div>
      <div className="mb-3">
        <label className='lab'>End Time</label>
        <input type="datetime-local" value={end} onChange={(e) => setEnd(e.target.value)} className="form-control" required />
      </div>
      <div className="mb-3">
        <label className='lab'>Duration (Minutes)</label>
        <input type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="form-control" required />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Availability Slots
      </button>
    </form>
  );
}

export default AvailabilityForm;
