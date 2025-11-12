'use client';

import { useState } from 'react';

export default function Home() {
  const [greeting, setGreeting] = useState('Hi there!');
  const greetings = [
    'Hi there!',
    'Hello!',
    'Hey!',
    'Greetings!',
    'Welcome!',
    'Howdy!',
    'Good day!',
    'Salutations!'
  ];

  const changeGreeting = () => {
    const newGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting(newGreeting);
  };

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '60px 80px',
        borderRadius: '24px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        <h1 style={{
          fontSize: '4rem',
          margin: '0 0 20px 0',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          {greeting}
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          marginBottom: '40px'
        }}>
          Click the button for a new greeting
        </p>
        <button
          onClick={changeGreeting}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            padding: '16px 40px',
            fontSize: '1.1rem',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            fontWeight: '600'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
          }}
        >
          Say Hi Again
        </button>
      </div>
    </main>
  );
}
