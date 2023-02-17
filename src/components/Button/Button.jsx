import PropTypes from 'prop-types';
import { ButtonStyle } from './Button.styled';
export const Button = ({ loadMore }) => {
  return <ButtonStyle onClick={loadMore}>Load more</ButtonStyle>;
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
