import React from 'react';

const Hero = () => {
  return (
    <section style={{ padding: '100px', textAlign: 'center', background: '#f0f0f0' }}>
      <h1>Hero Section</h1>
      <p>This is the beginning of the conversion from your Figma design.</p>
    </section>
  );
};

const HomePage = () => {
  return (
    <main>
      <Hero />
      {/* Other sections will be added here */}
    </main>
  );
};

export default HomePage;
