import { createContext,  useState, type ReactNode } from 'react';

type HeaderContextType = {
  title: string;
  setTitle: (title: string) => void;
};

const HeaderContext = createContext<HeaderContextType>({
  title: '',
  setTitle: () => {},
});

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState('EntityTable app by Alex');
  return (
    <HeaderContext.Provider value={{ title, setTitle }}>
      {children}
    </HeaderContext.Provider>
  );
};


export default HeaderContext;