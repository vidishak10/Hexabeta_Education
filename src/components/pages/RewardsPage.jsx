import React, { useEffect, useState } from 'react';

// Mock Rewards Data (This can be replaced with an API call)
const mockRewards = [
  {
    id: 1,
    title: 'First Milestone',
    description: 'Completed your first task!',
    badge: '🌟',
    dateEarned: '2023-10-01',
  },
  {
    id: 2,
    title: 'Code Master',
    description: 'Completed 5 coding challenges!',
    badge: '🏆',
    dateEarned: '2023-10-05',
  },
  {
    id: 3,
    title: 'Consistency Champion',
    description: 'Practiced for 7 consecutive days!',
    badge: '📅',
    dateEarned: '2023-10-10',
  },
];

function Rewards() {
  const [rewards, setRewards] = useState([]);

  // Simulate fetching rewards from an API
  useEffect(() => {
    // Replace this with an actual API call if needed
    setTimeout(() => {
      setRewards(mockRewards);
    }, 1000); // Simulating a delay
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Rewards</h1>
      <p>Here are the rewards you've earned so far:</p>

      {rewards.length === 0 ? (
        <p>Loading rewards...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {rewards.map((reward) => (
            <li
              key={reward.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '1rem 0',
                padding: '1rem',
                border: '1px solid #ccc',
                borderRadius: '8px',
                background: '#f9f9f9',
              }}
            >
              <span style={{ fontSize: '2rem', marginRight: '1rem' }}>{reward.badge}</span>
              <div>
                <strong>{reward.title}</strong>
                <p>{reward.description}</p>
                <small>Earned on: {reward.dateEarned}</small>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Rewards;