import React, { Fragment, useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import Loadable from 'react-loadable';

import Loader from '../components/Loader';

const ProjectList = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'project-list' */ '../components/Project-list'),
  loading: Loader,
});

const Footer = Loadable({
  loader: () => import(/* webpackChunkName: 'footer' */ '../components/Footer'),
  loading: Loader,
});

const Projects = () => {
  const [lazy, setLazy] = useState(false);

  useEffect(
    () => {
      Footer.preload();
      ProjectList.preload();
      setLazy(true);
    },
    [lazy],
  );

  return (
    <Fragment>
      <Helmet
        title='Terapias'
        meta={[{ name: 'description', content: 'Projects' }]}
      />
      {!!lazy && <ProjectList />}
      {!!lazy && <Footer />}
    </Fragment>
  );
};

export default Projects;
