import React from 'react';
import { statusColor, StatusDot } from './projectStatus';

const Legend = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '12px', fontSize: '0.85rem' }}>
    {Object.entries(statusColor).map(([label, color]) => (
      <span key={label} style={{ display: 'flex', alignItems: 'center' }}>
        <StatusDot status={label} />
        {label}
      </span>
    ))}
  </div>
);

export default Legend;