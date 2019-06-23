import PropTypes from 'prop-types';

export const propTypes = {
  produceName: PropTypes.string,
  standardRequired: PropTypes.string,
  quantity: PropTypes.string,
  city: PropTypes.string,
  expectedShipmentDate: PropTypes.string,
  startingPrice: PropTypes.string,
};

export default {
  propTypes,
};
