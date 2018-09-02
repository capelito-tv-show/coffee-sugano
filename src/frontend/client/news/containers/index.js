import React, { Component } from "react";
import {withStyles} from 'material-ui/styles';
import Grid from "material-ui/Grid";

import NewsContent from "../Enhance/withStyle";

const styles = theme => ({
  content: {
    margin: "0 auto",
    paddingTop: "56px",
  },
})

class Menu extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <Grid container>
        <Grid item xs={12} md={7} className={classes.content}>
          <NewsContent />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Menu);
