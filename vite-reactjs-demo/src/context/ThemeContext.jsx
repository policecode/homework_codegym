import { createContext, useState } from "react";
/**
 * 1. Tạo ra kho context => createContext
 * =>provider
 * 2. Truy caaoh vào khi => useContext 
 * => consumer
 */
export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    let changeTheme = () => {
        setTheme(theme == 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}