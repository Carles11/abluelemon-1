import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import 'lazysizes';

import Header from './components/Header';
import Routes from './Routes';
import SmoothScroll from './utils/smoothScroll';

const App = () => {
  SmoothScroll(document, 90, 12);

  return (
    <Fragment>
      <Helmet
        titleTemplate={'%s | Jordi Arjó, psicólogo y terapeuta'}
        defaultTitle='Jordi Arjó Francés'>
        <link rel='canonical' href='http://servicio-terapeutico.online/' />
        <meta
          name='description'
          content='Jordi Arjó psicólogo y terapeuta. Servicio de terapias individuales y para grupos online. Terapias presenciales.'
        />
      </Helmet>
      <Header />
      <Routes />
    </Fragment>
  );
};

export default App;
