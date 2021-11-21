import React, { createContext, useEffect, useContext, useState, useCallback } from 'react';
import { User } from '@firebase/auth';
import { useNavigate } from 'react-router-dom';

import { signIn as fireLogin } from '../services/Authentication/signin';

interface IAuthContextData {
  signed: boolean;
  signIn(data: IFormLogin): Promise<void>;
  signOut(): Promise<void>;
  user: User;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

interface IFormLogin {
  email: string; 
  password: string;
}

export const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [signed, setSigned] = useState(false);
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    const restore = localStorage.getItem('@VersaSus:user')

    console.log(restore);

    if(restore) {
      const user = JSON.parse(restore) as User;
      setUser(user);
      setSigned(true);

      navigate('/');
    }
  }, [setSigned, setUser]);

  async function signIn({ email, password}: IFormLogin): Promise<void> {
    const response = await fireLogin(email, password);

    if(response !== undefined) {
      localStorage.setItem('@VersaSus:user', JSON.stringify(response.user));

      setUser(response.user);
      setSigned(true);

      navigate('/');
    }
  }

  const signOut = useCallback(async () => {
    localStorage.removeItem('@VersaSus:user');

    setSigned(false);
    setUser({} as User);

    navigate('/login');
  }, [setSigned, setUser]);

  return (
    <AuthContext.Provider value={{ signIn, signOut, signed, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}