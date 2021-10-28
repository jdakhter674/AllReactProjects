import React, { useState } from 'react'
import './Cards.css'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup'




const Cards = ({ confirmed, lastUpdate, recovered, deaths }) => {
   
    return (
        <div className="container">

            <Grid container spacing={3} justify="center">


                <Grid item component={Card} xs={10} md={3} className="card infected">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>INFECTED</Typography>
                        <Typography variant="h5">{confirmed} </Typography>
                        <Typography colr="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>


                <Grid item component={Card} xs={10} md={3} className="card recovered">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>RECOVERED</Typography>
                        <Typography variant="h5">{recovered}</Typography>
                        <Typography colr="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>



                <Grid item component={Card} xs={10} md={3} className="card deaths">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>DEATHS</Typography>
                        <Typography variant="h5">{deaths}</Typography>
                        <Typography colr="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            
            
            </Grid>


        </div >
    )
}

export default Cards
