import React from 'react';
import { Link } from 'react-router-dom';

function TaskCard({ task }) {
  const { id, title, description, difficulty, language } = task;

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      <div style={styles.meta}>
        <span style={styles.difficulty}>Difficulty: {difficulty}</span>
        <span style={styles.language}>Language: {language}</span>
      </div>
      <Link to={`/practice/${id}`} style={styles.button}>
        Start Practice
      </Link>
    </div>
  );
}

// Styles
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    background: '#fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#333',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '1rem',
  },
  meta: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    color: '#777',
  },
  difficulty: {},
  language: {},
  button: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    background: '#007BFF',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background 0.3s',
  },
};

export default TaskCard;