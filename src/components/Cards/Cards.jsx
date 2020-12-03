import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
//import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({data: {positive, recovered, death, date}}) => {

    if (!positive) {
        return 'Loading...';
    }
    console.log (positive);
    
    
    
    


    return (

        

        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.positive)}>
                    
                    <CardContent>
                    
                        <Typography color="textSecondary" gutterBottom>
                            Positive
                        </Typography>
                        <Typography variant="h5">
                             
                               {positive}
                           
                        </Typography>
                        <Typography color="textSecondary">{date}</Typography>
                        <Typography variant="body2">Active cases of covid</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">{recovered}</Typography>
                        <Typography color="textSecondary">{date}</Typography>
                        <Typography variant="body2">Num of recoveries from covid</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.death)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Death
                        </Typography>
    <Typography variant="h5">{death}</Typography>
    <Typography color="textSecondary">{date}</Typography>
                        <Typography variant="body2">Num of deaths from covid</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}



export default Cards;