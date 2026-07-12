import { useState } from 'react';

function EventHandling() {
  // 1. Kan waa shaqada (function) dhacaysa marka badhanka la riixo
  const badhankaLaGujiye = () => {
    alert("Haye! Waad ku guulaysatay tijaabada onClick!");
  };

  return (
    <div style ={{backgroundColor: "red"}}>
      <h2>1. Tijaabada onClick</h2>
      <p>Marka aad riixdo badhanka hoose, waxaa kuu soo baxaya fariin (Alert).</p>
      <button onClick={badhankaLaGujiye}>cilick</button>
    </div>
  );
}

export default EventHandling;