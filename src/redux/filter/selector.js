import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selector';

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact => {
      const contactName = contact.name.toLowerCase().trim();
      const filterName = filter.toLowerCase().trim();

      return contactName.includes(filterName);
    });
  }
);
