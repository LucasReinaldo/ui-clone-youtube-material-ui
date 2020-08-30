import React, { useState } from 'react';

import api from '../../services/api';

import { Box, Grid, Toolbar, Typography } from '@material-ui/core';

const VideoContent = () => {
  // eslint-disable-next-line no-unused-vars
  const [videos, setVideos] = useState(api);
  
  return (
    <>
      <Box p={2}>
        <Toolbar />
        <Typography
          variant="h5"
          color="textPrimary"
          style={{ fontWeight: 'bold' }}
        >
          Recommended
        </Typography>

        <Grid container spacing={2}>
          {
            videos.map((video, index) => (
              <Grid item lg={3} md={6} xs={12} key={index}>
                <Box>
                  <img src={video.thumb} alt={video.title} style={{width: '100%'}} />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant="body1"
                      color="textPrimary"
                    >
                      {video.title}
                    </Typography>
                    <Typography
                      display="block"
                      variant="body2"
                      color="textSecondary"
                    >
                      {video.chanel}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {`${video.views} | ${video.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </>
  );
};

export default VideoContent;
