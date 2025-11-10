import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const { value, setItem, getItem, removeItem } = useLocalStorage();

    const login = async () => {
      setItem('user', value)
    };

    const logout = () => {
       // remove data save in cookies
       removeItem('user')
        navigate('/');
    };

    const valueItem = () => getItem('user')

    return (
        <UserContext.Provider value={valueItem}>
            {children}
        </UserContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(UserContext)
};
