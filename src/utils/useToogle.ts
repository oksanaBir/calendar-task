import { useCallback, useState } from 'react';

// Перевод состояния в булевое значение
function useToggle(
  initialValue: boolean = false,
): [state: boolean, handleToggle: (value?: any) => void] {
  const [state, setState] = useState<any>(initialValue);

  const handleToggle = useCallback<(value?: boolean) => void>(forcedValue => {
    setState((prev: any) => (typeof forcedValue === 'boolean' ? forcedValue : !prev));
  }, []);

  return [state, handleToggle];
}

export { useToggle };