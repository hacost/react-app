import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  'user': {
    'firstName': 'Héctor',
    'lastName': 'Acosta',
    'cellPhone': '8116607645',
    'email': 'hacost@hotmail.com',
    'password': '',
  },
  'playing': {},
  'myList': [],
  'products': [
    {
      'id': '1',
      'name': 'Jumex lata 355ml (24 piezas )',
      'price': 195,
      'category': 'Jugos',
      "cover": "http://dummyimage.com/800x600.png/99118E/ffffff",
    },
    {
      'id': '2',
      'name': 'Marias gamesa (con 22 piezas)',
      'price': 177,
      'category': 'Galletas',
      "cover": "http://dummyimage.com/800x600.png/302140/ffffff",
    },
    {
      'id': '3',
      'name': 'Arcoiris ( con 16 piezas)',
      'price': 160,
      'category': 'Galletas',
      "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
    },
    {
      'id': '4',
      'name': 'Chiles san marcos rajas de 215gr (24 piezas)',
      'price': 220,
      'category': 'Chiles enlatados',
      "cover": "http://dummyimage.com/800x600.png/B36F20/ffffff",
    },
    {
      'id': '5',
      'name': 'La costeña rajas de 220gr (48 piezas)',
      'price': 470,
      'category': 'Chiles enlatados',
      "cover": "http://dummyimage.com/800x600.png/CCC539/ffffff",
    },
  ],
};

const store = createStore(reducer, initialState);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
