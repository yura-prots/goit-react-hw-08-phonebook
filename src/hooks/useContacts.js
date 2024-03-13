import { useSelector } from 'react-redux';

import {
  selectContacts,
  selectIsLoading,
  selectError,
} from '../redux/contacts/selector';

export const useContacts = () => {
  return {
    contacts: useSelector(selectContacts),
    isLoading: useSelector(selectIsLoading),
    error: useSelector(selectError),
  };
};
