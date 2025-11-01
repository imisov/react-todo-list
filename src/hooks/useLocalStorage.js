import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
    // Инициализация из localStorage
    const [value, setValue] = useState(() => {
        try {
            const saved = localStorage.getItem(key);
            return saved ? JSON.parse(saved) : initialValue;
        } catch {
            return initialValue;
        }
    });

    // Сохранение при изменении
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Ошибка сохранения в localStorage:', error);
        }
    }, [key, value]);

    return [value, setValue];
}
