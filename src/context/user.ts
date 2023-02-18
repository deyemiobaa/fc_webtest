import { createContext } from 'react';

interface LoginContextType {
  email: string
  password: string
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

const LoginContext = createContext<LoginContextType>({
  email: '',
  password: '',
  setEmail: () => { },
  setPassword: () => { },
});

export default LoginContext;