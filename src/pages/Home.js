import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';
import ResizeObserver from 'react-resize-observer';

import React, { useState, useEffect } from 'react';

const webSDKKey = 'zOGifukXKpOJH4XuptyPEfhFJWVtFP5g';
const gf = new GiphyFetch(webSDKKey);
// fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)

function Home() {
  const [alert, setAlert] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const fetchGifs = (offset) => gf.trending({ offset, limit: 10 });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <div className='gifs'>
      <Grid
        width={width}
        columns={3}
        gutter={20}
        fetchGifs={fetchGifs}
        hideAttribution={true}
        onGifClick={(gif, e) => {
          //console.log(e.target.src);
          navigator.clipboard.writeText(e.target.src);
          setAlert(true);
          e.preventDefault();
        }}
      />
      {alert && <p className='alert'> copied to clipboard</p>}
      <ResizeObserver
        onResize={({ width }) => {
          setWidth(width);
        }}
      />
    </div>
  );
}
export default Home;
