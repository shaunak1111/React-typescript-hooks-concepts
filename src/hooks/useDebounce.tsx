import React, {useState, useEffect} from 'react';

export function useDebounce<T>(
    initialValue: T,
    time: number,
): [T, React.Dispatch<T>] {
    const [value, setValue] = useState<T>(initialValue);
    const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

    useEffect(() => {        
        const setTimeoutId = setTimeout(() => {
            setDebouncedValue(value);
        }, time);
        return () => {
            clearTimeout(setTimeoutId);
          };
      }, [value, time]);

    return [debouncedValue, setValue ];
}