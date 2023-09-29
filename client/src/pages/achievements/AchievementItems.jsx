import React from 'react'
import { Grid, Paper, Typography } from '@mui/material';
const AchievementItems = ({ name, imageUrl, xs }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Grid item xs={xs} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="card">
      <Paper elevation={3}>
        <img src={imageUrl} alt={name} style={{ width: '100%' }} />
        {/* {isHovered && ( */}
        <Typography variant="subtitle1" align="center" className='cardTitle'>
          {name}
        </Typography>
        {/* )} */}
      </Paper>
    </Grid>
  );
}

export default AchievementItems