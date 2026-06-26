import { useState } from 'react';

function EventHandling() {
  // 1. Kan waa shaqada (function) dhacaysa marka badhanka la riixo
  const badhankaLaGujiye = () => {
    alert("Haye! Waad ku guulaysatay tijaabada onClick!");
  };

  return (
    <div style={{ padding: '20px', border: '2px solid #3310d1', marginTop: '20px', borderRadius: '8px' }}>
      <h2>1. Tijaabada onClick</h2>
      <p>Marka aad riixdo badhanka hoose, waxaa kuu soo baxaya fariin (Alert).</p>
      
      {/* Badhanka ku xiran onClick */}
      <button onClick={badhankaLaGujiye}>cilick</button>
    </div>
  );
}

export default EventHandling;