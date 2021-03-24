import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/containers/Home.scss';
import { DataGrid } from '@material-ui/data-grid';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'category', headerName: 'Category', width: 150 },
  { field: 'name', headerName: 'Description', width: 400 },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 90,
  },
];

const Home = (props) => {
  const { myList, products } = props;

  return (
    <section className='item content'>
      <>

        <Categories title='Lista de productos'>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={products} columns={columns} pageSize={5} checkboxSelection />
          </div>
        </Categories>

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
    myList: state.myList,
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(Home);
