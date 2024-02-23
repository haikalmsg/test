import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Unstable_Grid2'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import './App.css';
import { colors } from '@mui/material';
import { grey } from '@mui/material/colors';
import GT4RS from './Assets/gt4rs.jpeg'
function App() {
  return (
    <div className="App">
      <Box>
        <AppBar>
          <Toolbar>
            <CameraAltIcon sx={{
              mr: 2
            }}></CameraAltIcon>
            <Typography variant='h5' sx={{fontWeight : "bold"}}>Album layout</Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div className='mainBox'>
        <Typography variant='h1' sx={{fontSize : 75}}>Album layout</Typography>
        <Typography variant='h6' sx= {{mt : 5, color : "grey"}}>Something short and leading about the collection <br></br> below—its contents, the creator, etc. Make it short <br></br> and sweet, but not too short so folks don't simply<br></br> skip over it entirely.</Typography>
        <div className='buttonWrapper'>
          <Button variant='contained' sx={{width : 250}}>MAIN CALL TO ACTION</Button>
          <Button variant='outlined' sx={{width : 250}}>SECONDARY CALL TO ACTION</Button>
        </div>
      </div>
      <Grid spacing = {3} sx={{ml : 10, mt : 10}} container >
           <Grid>
            <Card sx={{maxWidth : 300}}>
                <CardMedia
                  image={GT4RS}
                  sx={{height : 140}}
                  title =  "porsche"/>
                <CardContent>
                  <Typography variant='h6' gutterBottom>Porsche 718 GT4 RS</Typography>
                  <Typography variant='body2' sx={{textAlign : "justify"}}>A razor-sharp track tool. A highly agile mid-engine concept with 4.0-litre displacement and a six-cylinder naturally aspirated engine. Six individual throttle valves for a direct response.</Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn More</Button>
                </CardActions>
              </Card>
           </Grid>
           <Grid>
            <Card sx={{maxWidth : 300}}>
                <CardMedia
                  image={GT4RS}
                  sx={{height : 140}}
                  title =  "porsche"/>
                <CardContent>
                  <Typography variant='h6' gutterBottom>Porsche 718 GT4 RS</Typography>
                  <Typography variant='body2' sx={{textAlign : "justify"}}>A razor-sharp track tool. A highly agile mid-engine concept with 4.0-litre displacement and a six-cylinder naturally aspirated engine. Six individual throttle valves for a direct response.</Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn More</Button>
                </CardActions>
              </Card>
           </Grid>
           <Grid>
            <Card sx={{maxWidth : 300}}>
                <CardMedia
                  image={GT4RS}
                  sx={{height : 140}}
                  title =  "porsche"/>
                <CardContent>
                  <Typography variant='h6' gutterBottom>Porsche 718 GT4 RS</Typography>
                  <Typography variant='body2' sx={{textAlign : "justify"}}>A razor-sharp track tool. A highly agile mid-engine concept with 4.0-litre displacement and a six-cylinder naturally aspirated engine. Six individual throttle valves for a direct response.</Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn More</Button>
                </CardActions>
              </Card>
           </Grid>
           <Grid>
            <Card sx={{maxWidth : 300}}>
                <CardMedia
                  image={GT4RS}
                  sx={{height : 140}}
                  title =  "porsche"/>
                <CardContent>
                  <Typography variant='h6' gutterBottom>Porsche 718 GT4 RS</Typography>
                  <Typography variant='body2' sx={{textAlign : "justify"}}>A razor-sharp track tool. A highly agile mid-engine concept with 4.0-litre displacement and a six-cylinder naturally aspirated engine. Six individual throttle valves for a direct response.</Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn More</Button>
                </CardActions>
              </Card>
           </Grid>
           <Grid>
            <Card sx={{maxWidth : 300}}>
                <CardMedia
                  image={GT4RS}
                  sx={{height : 140}}
                  title =  "porsche"/>
                <CardContent>
                  <Typography variant='h6' gutterBottom>Porsche 718 GT4 RS</Typography>
                  <Typography variant='body2' sx={{textAlign : "justify"}}>A razor-sharp track tool. A highly agile mid-engine concept with 4.0-litre displacement and a six-cylinder naturally aspirated engine. Six individual throttle valves for a direct response.</Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn More</Button>
                </CardActions>
              </Card>
           </Grid>
           <Grid>
            <Card sx={{maxWidth : 300}}>
                <CardMedia
                  image={GT4RS}
                  sx={{height : 140}}
                  title =  "porsche"/>
                <CardContent>
                  <Typography variant='h6' gutterBottom>Porsche 718 GT4 RS</Typography>
                  <Typography variant='body2' sx={{textAlign : "justify"}}>A razor-sharp track tool. A highly agile mid-engine concept with 4.0-litre displacement and a six-cylinder naturally aspirated engine. Six individual throttle valves for a direct response.</Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn More</Button>
                </CardActions>
              </Card>
           </Grid>
      </Grid>
      <footer className='footer'>
        <Typography variant="h6" sx={{fontWeight : "bold"}}>Footer</Typography>
        <Typography variant = "body1" sx = {{mt : 1, color : "gray"}}>Something here to give the footer a purpose!</Typography>
        <Typography variant = "body1" sx = {{mt : 1, color : "gray"}}>Copyright © Your Website 2024.</Typography>


      </footer>
        
    </div>
  );
}

export default App;
