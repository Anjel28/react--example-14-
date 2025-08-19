import React from 'react';

//union types for complex example conditional
type status = 'idle' | 'loading' | 'success' | 'error';

const StatusDisplay: React.FC<{ status: status }> = ({ status }) => {
  switch (status) {
    case 'idle':
      return <p>Waiting...</p>;
    case 'loading':
      return <p>Loading...</p>;
    case 'success':
      return <p>Success!</p>;
    case 'error':
      return <p>Error!</p>;
    default:
      return null;
  }
};
 export default StatusDisplay;