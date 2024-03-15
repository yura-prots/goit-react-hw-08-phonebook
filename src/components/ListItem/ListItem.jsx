import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { deleteContact } from '../../redux/contacts/operations';
import { Item, DeleteBtn } from './ListItem.styled';

const ListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const onDeleteContact = (id, name) => {
    dispatch(deleteContact(id));
    toast.info(`Contact ${name} deleted from list`);
  };

  return (
    <Item>
      <span>{name}:</span>
      <span>{number}</span>
      <DeleteBtn type="button" onClick={() => onDeleteContact(id, name)}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

ListItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListItem;
