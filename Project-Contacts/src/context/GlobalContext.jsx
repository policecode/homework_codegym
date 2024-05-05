import { createContext, useReducer, useState } from "react";
export const GlobalContext = createContext();

import reducerAuth, {initStateAuth} from '../reducers/reducerAuth';
export default function GlobalProvider({ children }) {
    const [authUser, dispatchAuth]  = useReducer(reducerAuth, initStateAuth);
    let [loading, setLoading] = useState(false);
    return (
        <GlobalContext.Provider value={{ authUser, dispatchAuth, loading, setLoading }}>
            {children}
        </GlobalContext.Provider>
    )
}