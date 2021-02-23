import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/containers/Home.scss';

const Home = ({ user, myList }) => (
  <section className='item content'>
    <h2>Content component </h2>
    <>
      <h1>{user.firstName}</h1>
      {myList.length > 0 &&
        <h2>la lista tiene valor...</h2>
      }
    </>
  </section>

);

const mapStateToProps = (state) => {
  return {
    user: state.user,
    myList: state.myList,
  };
};

export default connect(mapStateToProps, null)(Home);
