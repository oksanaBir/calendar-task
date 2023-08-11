import { useCallback, useState } from 'react';

// Перевод состояния в булевое значение для переключений
function useToggle(
  initialValue: boolean = false,
): [state: boolean, handleToggle: (value?: any) => void] {
  const [state, setState] = useState<boolean>(initialValue);

  const handleToggle = useCallback<(value?: any) => void>(forcedValue => {
    setState(prev => (typeof forcedValue === 'boolean' ? forcedValue : !prev));
  }, []);

  return [state, handleToggle];
}

export { useToggle };