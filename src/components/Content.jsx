import React from 'react';
import '../assets/styles/components/Content.scss';
import Link from '@material-ui/core/Link';

const Content = () => (
  <section className='item content'>
    <h2>Content component </h2>
    <Link href='#' variant='body2'>
      Forgot password?
    </Link>
  </section>
);

export default Content;
