import React from 'react';
import StatsCard from '../components/StatsCard';

const RegionalStats = () => {
  return (
    <div>
      <h1>Montreal</h1>
      <StatsCard title="Cases" />
      <StatsCard title="Vaccination" />
      <StatsCard title="Hospitalizations and Fatalities" />
    </div>
  );
};

export default RegionalStats;
