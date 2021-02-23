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
      'price': '195',
      'category': 'Jugos',
    },
    {
      'id': '2',
      'name': 'Marias gamesa (con 22 piezas)',
      'price': '177',
      'category': 'Galletas',
    },
    {
      'id': '3',
      'name': 'Arcoiris ( con 16 piezas)',
      'price': '160',
      'category': 'Galletas',
    },
    {
      'id': '4',
      'name': 'Chiles san marcos rajas de 215gr (24 piezas)',
      'price': '220',
      'category': 'Chiles enlatados',
    },
    {
      'id': '5',
      'name': 'La costeña rajas de 220gr (48 piezas)',
      'price': '470',
      'category': 'Chiles enlatados',
    },
  ],
};

const store = createStore(reducer, initialState);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
