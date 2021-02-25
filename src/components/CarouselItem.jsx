import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import Button from '@material-ui/core/Button';
import { addToCart, deleteProduct } from '../actions/Cart';

const CarouselItem = (props) => {
  const { id, name, category, price, cover } = props;
  const handleAddToCart = () => {
    props.addToCart({
      id, name, category, price, cover,
    });
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={name} />
      <div className='carousel-item__details'>
        <div>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            onClick={handleAddToCart}
          >
            +
          </Button>
        </div>
        <p className='carousel-item__details--title'>{name}</p>
        <p className='carousel-item__details--subtitle'>
          {`${price} ${category}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  cover: PropTypes.string,
};

const mapDispatchToProps = {
  addToCart,
  deleteProduct,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
