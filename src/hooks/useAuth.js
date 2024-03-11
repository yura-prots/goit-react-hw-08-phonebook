import { useSelector } from 'react-redux';

import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/auth/selector';

export const useAuth = () => {
  return {
    user: useSelector(selectUser),
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
  };
};
