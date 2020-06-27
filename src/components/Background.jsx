import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useScrollPosition } from './Hooks';
import Title from './Title';
import Arrow from './arrow/Arrow';
import '../css/Background.css';

const Background = (props) => {
  const { video, forContact } = props;
  const [render, setRender] = useState(false);
  const [background, setBackground] = useState(
    Array.isArray(video) ? video[0].playVideo() : video,
  );
  const scroll = useScrollPosition();
  const position = Math.floor(scroll / 10);
  let index = 0;

  useEffect(() => {
    setRender(true);
  }, [render]);

  function renderBackground() {
    index = index < video.length - 1 ? index + 1 : 0;
    setBackground(video[index]);
  }

  useEffect(() => {
    renderBackground;
  }, []);

  return (
    <Fragment>
      {!forContact && <Title />}
      <div id='fullwidth-video'>
        <video
          className='video'
          playsInline
          autoPlay
          muted
          onPlaying='this.controls=false'
          loop>
          <source
            src={background}
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
          <source
            src='/assets/videos/my-video.webm'
            type='video/webm; codecs="vp8, vorbis"'
          />
          <source
            src='/assets/videos/my-video.ogv'
            type='video/ogg; codecs="theora, vorbis"'
          />
        </video>
      </div>
      {!forContact && <Arrow />}
    </Fragment>
  );
};

Background.propTypes = {
  text: PropTypes.string,
  video: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default Background;
