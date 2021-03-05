import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/containers/Home.scss';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = ({ user, myList, products }) => (
  <section className='item content'>
    <>
      <h2>
        User:
        {' '}
        {user.email}
      </h2>
      {myList.length > 0 && (
        <Categories title='My sale products'>
          <Carousel>
            {myList.map((item) => <CarouselItem key={item.id} {...item} isList />)}
          </Carousel>
        </Categories>
      )}
      <Categories title='Product List'>
        <Carousel>
          {products.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </>
  </section>

);

const mapStateToProps = (state) => {
  return {
    user: state.user,
    myList: state.myList,
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(Home);
