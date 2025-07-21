import React from 'react';

export default function Services() {
  const services = ['Strategy', 'Content Creation', 'Scheduling', 'Analytics'];
  return (
    <div style={{ padding: '40px 20px', background: '#fff' }}>
      <h2 style={{ textAlign: 'center', color: '#0f62fe' }}>Our Services</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {services.map((service, i) => (
          <div key={i} style={{ margin: '10px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', width: '200px', textAlign: 'center', transition: '0.3s', background: '#f0f8ff' }}>
            {service}
          </div>
        ))}
      </div>
    </div>
  );
}