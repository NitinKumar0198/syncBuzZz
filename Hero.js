import React from 'react';

export default function Hero() {
  return (
    <div style={{ background: '#0f62fe', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3em' }}>Welcome to SyncBuzZ</h1>
      <p>Your modern social media management agency</p>
      <button style={{ padding: '10px 20px', marginTop: '20px', background: 'white', color: '#0f62fe', borderRadius: '5px' }}>Get Started</button>
    </div>
  );
}