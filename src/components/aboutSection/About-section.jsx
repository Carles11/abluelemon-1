import React, { useState, useEffect, useContext } from 'react';

import TitleSection from '../Title-section';
import Loader from '../Loader';
import Box from '../Box';
import { useWindowSize, useScrollPosition } from '../Hooks';
import { LocalesContext } from '../Context';
import * as API from '../../utils/API';

import './About-section.css';

const AboutSection = () => {
  const [data, setData] = useState([]);
  const [render, setRender] = useState(false);
  const LOCALES = useContext(LocalesContext);
  const { h: height } = useWindowSize();
  const scroll = useScrollPosition();

  function fetchData() {
    const promise = API.get('users');
    promise
      .then((res) => {
        if (res.success) {
          // const sliced = res.data.splice(res.data.findIndex(user => user.name === 'Hassan Mokdad'), 1)
          setData(res.data);
        } else {
          setData([]);
        }
      })
      .catch((err) => {
        setData([]);
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (scroll > height / 4) {
      setRender(true);
    }

    if (scroll < height / 4) {
      setRender(false);
    }
  }, [scroll]);

  if (data && !data.length) return <Loader />;

  return (
    <div className='container' id='aboutContent' position={height}>
      <TitleSection
        title={LOCALES.ABOUT_TITLE}
        text={LOCALES.ABOUT_TEXT}
        show={render}
      />

      <div className='boxes'>
        {data
          .sort((a, b) => (a._id > b._id ? -1 : 1))
          .map((a, i) => (
            <Box order={i + 1} key={a._id} {...a} />
          ))}
      </div>
    </div>
  );
};

export default AboutSection;
