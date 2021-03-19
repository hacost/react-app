import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/containers/Home.scss';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import { logoutRequest } from '../actions/App';

const Home = (props) => {
  const { user, myList, products } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <section className='item content'>
      <>
        { hasUser ? (
          <h2>
            {user.firstName}
            {' '}
            {user.email}
            {' '}
            {user.password}
          </h2>
        ) :
          null}
        { hasUser ? (
          <h3>
            <a href='#logout' onClick={handleLogout}> Cerrar Sesión</a>
          </h3>
        ) :
          (
            <h3>
              <Link to='/login'>
                Iniciar Sesión
              </Link>
            </h3>

          )}

        {myList.length > 0 && (
          <Categories title='My sale products'>
            <Carousel>
              {// eslint-disable-next-line react/jsx-props-no-spreading
                myList.map((item) => <CarouselItem key={item.id} {...item} isList />)
              }
            </Carousel>
          </Categories>
        )}
        <Categories title='Product List'>
          <Carousel>
            { // eslint-disable-next-line react/jsx-props-no-spreading
              products.map((item) => <CarouselItem key={item.id} {...item} />)
            }
          </Carousel>
        </Categories>
      </>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    myList: state.myList,
    products: state.products,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
