import { useCallback, useState } from 'react';

// Перевод состояния в булевое значение
function useToggle(
  initialValue: boolean = false,
): [state: boolean, handleToggle: (value?: boolean) => void] {
  const [state, setState] = useState<boolean>(initialValue);

  const handleToggle = useCallback<(value?: boolean) => void>(forcedValue => {
    setState(prev => (typeof forcedValue === 'boolean' ? forcedValue : !prev));
  }, []);

  return [state, handleToggle];
}

export { useToggle };