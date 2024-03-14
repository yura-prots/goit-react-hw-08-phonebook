import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contacts/operations';
import { Item, DeleteBtn } from './ListItem.styled';

const ListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <span>{name}:</span>
      <span>{number}</span>
      <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
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
