import useContext from 'react'
import { authContext } from '../contexts/authContext'

export const useAuth = () => {
    const context = useContext(authContext);
    return context;
};