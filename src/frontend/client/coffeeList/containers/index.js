import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'

import OriginalBlend from '../components/OriginalBlend'
import Typography from 'material-ui/Typography'
import topimg from '../../shared/images/machine.jpg'
import Manual from '../components/Manual'

import Blend from '../components/Blend'
import Standard from '../components/StandardCoffee'
import Ag from '../components/Ag'
import Premium from '../components/Premium'

import { styles } from '../Styles/withStyles'

class CoffeeList extends Component {
  render() {
    const classes = this.props.classes

    return (
      <div className={classes.menu}>
        <div className={classes.menuContents}>
          <Grid container className={classes.wrapper}>
            <Grid item xs={12} sm={7} md={7} className={classes.main}>
              <Typography
                style={{
                  fontFamily: 'serif'
                }}
                variant="display1"
              >
                自家焙煎珈琲豆
              </Typography>
              <div className={classes.tell}>
                <Typography variant="subheading" align="left">
                  珈琲豆の購入はお電話で
                </Typography>
                <Typography variant="headline" component="h2">
                  0120-48-1567(イイコナムダナク)
                </Typography>
                <Typography variant="body1">
                  当店では品質重視のため、焙煎豆を多くストックしておりません。<br />
                  品切れの恐れがありますので、あらかじめお電話で予約いただくと、ご希望の数量をお渡しできます。
                </Typography>
                <Typography variant="caption">
                  ご注文の際は「ご希望商品、住所、電話番号、お名前」をおしらせください。
                </Typography>
                <Typography variant="caption">
                  珈琲豆のリストは100gあたりの価格(税別)を表示しております。
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={5} md={5} className={classes.main}>
              <img src={topimg} className={classes.topimg} />
              <Typography variant="caption" align="left">
                当店の焙煎機：フジローヤル半熱風焙煎機一台 /
                イージーロースター250　一台<br />
                焙煎直後から４時間程経つと、にわかに芳醇な香りが漂い始めます(焙煎豆、焙煎度合いにより異なります)。<br />
                焙煎豆には熟成の期間があり始めの頃より3~4日後に香味成分が濃くなり、飲み頃になります。
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} md={6}>
              <OriginalBlend />
              <Blend />
            </Grid>
            <Grid item xs={12} md={6}>
              <Standard />
              <Premium />
              <Ag />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Manual />
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(CoffeeList)
