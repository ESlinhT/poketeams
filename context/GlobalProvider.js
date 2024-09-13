import { createContext, useContext, useState, useEffect} from 'react';

import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonTeam, setPokemonTeam] = useState([]);
    const [hasMaxForTeam, setHasMaxForTeam] = useState(false)

    useEffect(() => {
        getCurrentUser().then((res) => {
            if (res) {
                setIsLoggedIn(true);
                setUser(res);
            } else {
                setIsLoggedIn(false);
                setUser(null);
            }
        }).catch((e) => {
            console.error(e);
            // throw new Error(e);
        }).finally(() => {
            setIsLoading(false);
        })
    }, []);

    useEffect(() => {
        if (pokemonTeam.length === 6) {
            setHasMaxForTeam(true);
        }
    }, [pokemonTeam]);

    return (
        <GlobalContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                user,
                setUser,
                isLoading,
                pokemonTeam,
                setPokemonTeam,
                hasMaxForTeam,
                setHasMaxForTeam
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;