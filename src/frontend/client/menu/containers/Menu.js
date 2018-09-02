import React, { Component } from 'react'

import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

import MenuCard from '../components/menuCard'
import Tea from '../components/tea'
import Premium from '../Enhance/Straight'
import MenuImage from '../components/menuImage'
import Other from '../components/Other'
import Food from '../components/Food'
import img from '../../shared/images/sandwich-set.jpg'

const styles = theme => ({
  menu: {
    margin: 'auto',
    paddingTop: '56px'
  },
  wrapper: {
    background: '#f8f8f7',
    marginBottom: '30px'
  },
  content: {
    padding: '16px'
  },
  menuContents: {
    padding: '30px 100px',
    [theme.breakpoints.down('md')]: {
      padding: '10px'
    }
  },
  menuitem: {
    padding: '0 12px'
  },
  img: {
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '200px'
    }
  }
})

class Menu extends Component {
  render() {
    const classes = this.props.classes

    return (
      <div className={classes.menu}>
        <div className={classes.menuContents}>
          <Grid container>
            <Grid item xs={12} md={6} className={classes.menuitem}>
              <Typography variant="display1" style={{ fontFamily: 'serif' }}>
                喫茶メニュー
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={6} className={classes.menuitem}>
              <MenuCard />
              <Premium />
            </Grid>
            <Grid item xs={12} md={6} className={classes.menuitem}>
              <Tea />
              <Other />
              <Food />
            </Grid>
          </Grid>
          <Grid container className={classes.wrapper}>
            <Grid item xs={12} sm={7} md={7} className={classes.content}>
              <Typography
                style={{
                  fontFamily: 'serif'
                }}
                align="center"
                variant="display1"
              >
                一珈一会
              </Typography>
              <Typography variant="body1">「おいしい珈琲とは」</Typography>
              <Typography component="p" className={classes.p}>
                珈琲もブレンドやストレート(単品)など種類もいろいろございます。<br />
                お客様のお好みに合った味の珈琲が、一番美味しい珈琲ではないでしょうか、お好みの味も濃さも十人十色。<br />
                珈琲豆の焙煎もライトローストからイタリアンローストなど、焙煎の仕方で味が変わります。<br />
                何種類の味が楽しめるでしょう！当店では店主おすすめの焙煎度合いでご提供しております。<br />
                メニューをご覧いただきましてありがとうございます。<br />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5} md={5} className={classes.content}>
              <img src={img} className={classes.img} />
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Menu)
