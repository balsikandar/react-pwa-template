import { useMediaQuery } from 'react-responsive';
import { DisplayTypes } from './types';

export const useDisplayType = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' });
  return isDesktop ? DisplayTypes.DESKTOP : DisplayTypes.MOBILE;
};
