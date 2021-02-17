import {createContext, useState} from 'react';

export const PokeContext = createContext();

export const PokeContextProvider = ({ children }) => {

    const [active, setActive] = useState(true);
    const [queryTerm, setQueryTerm] = useState('');
    
  return (
    <PokeContext.Provider value={{active,setActive,queryTerm,setQueryTerm}}>
      {children}
    </PokeContext.Provider>
  );
};
