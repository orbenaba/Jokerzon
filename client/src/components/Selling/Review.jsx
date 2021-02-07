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

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Product summary
      </Typography>
      <List disablePadding>


        <ListItem className={classes.listItem} key={"product name"}>
            <ListItemText primary="Product Name" />
            <Typography variant="h6">{"chair"}</Typography>
        </ListItem>

        <ListItem className={classes.listItem} key={"product description"}>
            <ListItemText primary="Product Description" />
            <Typography variant="h6">{"chair is comfortable"}</Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="h6" className={classes.total}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>First name + Last name</Typography>
        </Grid>


        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Estimated Date
          </Typography>
          <Typography gutterBottom>10/10/2022</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Source Country
          </Typography>
          <Typography gutterBottom>Israel</Typography>
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