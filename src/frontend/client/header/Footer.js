import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import { styles } from '../home/styles/withstyles'

class Footer extends React.Component {
  render() {
    const classes = this.props.classes
    return (
      <Grid container>
        <Grid item xs={12} className={classes.footer}>
          <div className={classes.footertext}>
            <p>営業時間 ：9：30～18：30 (月曜定休日)</p>
            <p>@珈琲工房すがの AllRightReserved.,</p>
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Footer)
