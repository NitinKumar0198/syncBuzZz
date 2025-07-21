import React from 'react';
export default function Pricing() {
  return (
    <div style={{ padding: '40px 20px', background: '#f4f4f4' }}>
      <h2 style={{ textAlign: 'center', color: '#0f62fe' }}>Pricing Plans</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '200px' }}>
          <h3>Starter</h3>
          <p>₹4999/mo</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '200px' }}>
          <h3>Pro</h3>
          <p>₹9999/mo</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '200px' }}>
          <h3>Enterprise</h3>
          <p>₹19999/mo</p>
        </div>
      </div>
    </div>
  );
}
