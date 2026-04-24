export const statusColor = {
    'En cours': '#EAB308',
    'Terminé': '#22C55E',
    'En construction': '#F97316',
    'En révision' : '#7C84C4',
  };
  
  export const StatusDot = ({ status }) => {
    const color = statusColor[status];
    if (!color) return null;
    return (
      <span
        title={status}
        style={{
          display: 'inline-block',
          width: '10px',
          height: '10px',
          minWidth: '10px',
          backgroundColor: color,
          borderRadius: '2px',
          marginRight: '8px',
          verticalAlign: 'middle',
        }}
      />
    );
  };