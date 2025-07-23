import { useContext } from 'react';
import HeaderContext from './HeaderContext';

const useHeader = () => {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error('useHeader must be used within a HeaderProvider');
  }
  return context;
};

export default useHeader;