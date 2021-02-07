import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(attributes) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Product summary
      </Typography>
      <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Product Name
                    </Typography>
                <Typography gutterBottom>{attributes.productName}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Description
                    </Typography>
                <Typography gutterBottom>{attributes.description}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Price
                    </Typography>
                <Typography gutterBottom>{attributes.price}</Typography>
            </Grid>


        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{attributes.fullName}</Typography>
        </Grid>


        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Estimated Days
          </Typography>
          <Typography gutterBottom>{attributes.estimatedDays}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Source Country
          </Typography>
          <Typography gutterBottom>{attributes.country}</Typography>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}


/*
{products.map((product) => (
  <ListItem className={classes.listItem} key={product.name}>
    <ListItemText primary={product.name} secondary={product.desc} />
    <Typography variant="body2">{product.price}</Typography>
  </ListItem>
))}*/