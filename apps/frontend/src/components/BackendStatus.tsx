import { useEffect, useState } from 'react';
import { getHealth } from '../services/api';

type Status = 'loading' | 'ok' | 'error';

export const BackendStatus = () => {
  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    getHealth()
      .then(() => setStatus('ok'))
      .catch(() => setStatus('error'));
  }, []);

  const label =
    status === 'loading'
      ? 'Checking backend...'
      : status === 'ok'
        ? 'Backend: connected'
        : 'Backend: unavailable';

  return <p className="mt-4 text-xs text-gray-500">{label}</p>;
};
