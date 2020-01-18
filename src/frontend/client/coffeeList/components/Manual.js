import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

import step1 from '../../shared/images/step1.jpg'
import step2 from '../../shared/images/step2.jpg'
import step3 from '../../shared/images/step3.jpg'
import step4 from '../../shared/images/step4.jpg'

const styles = theme => ({
  card: {
    marginTop: '-8px',
    boxShadow: 'none'
  },
  img: {
    maxWidth: '100%',
    height: '130px',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '80px'
    }
  },
  p: {
    fontSize: '12px'
  },
  manual: {
    minHeight: '358px',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      minHeight: '200px'
    }
  },
  td: {
    padding: '8px'
  }
})

class Manual extends Component {
  render() {
    const classes = this.props.classes

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="title" align="center">
            ご購入の流れ
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={6} md={3} className={classes.manual}>
              <img src={step1} className={classes.img} alt="step1"/>
              <div className={classes.td}>
                <Typography variant="subheading" component="h3">
                  1. お好みの味を確認
                </Typography>
                <Typography component="p" className={classes.p}>
                  苦味、酸味、香りなど、お客様が重視している事を伺い、おすすめ商品を選びます。
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.manual}>
              <img src={step2} className={classes.img} alt="step2"/>
              <div className={classes.td}>
                <Typography variant="subheading" component="h3">
                  ２．日替わりの試飲珈琲を提供
                </Typography>
                <Typography component="p" className={classes.p}>
                  日替わりでお出ししているお試し用珈琲を提供しています。<br />
                  豆のままか、または粉にするかを確認します。
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.manual}>
              <img src={step3} className={classes.img} alt="step3" />
              <div className={classes.td}>
                <Typography variant="subheading" component="h3">
                  ３．お客様が使用しているコーヒードリップの器具を確認
                </Typography>
                <Typography component="p" className={classes.p}>
                  使用されている器具にあった挽き方で、珈琲豆をミルで挽きます。
                </Typography>
                <Typography variant="caption" align="left">
                  ご希望に応じて、ストレート珈琲豆は、小さい焙煎機でその日に焙煎いたします。<br />
                  30分くらいお時間がかかりますので、あらかじめお電話でご注文いただければお早めにお渡しできます。
                  生豆は15%増量して焙煎いたしますが、ローストにより10%前後少なくなり  ます。
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.manual}>
              <img src={step4} className={classes.img} alt="step4" />
              <div className={classes.td}>
                <Typography variant="subheading" component="h3">
                  ４．珈琲豆の袋詰め（200ｇ以上ご購入の場合）
                </Typography>
                <Typography component="p" className={classes.p}>
                  ガス抜き用クラフト袋にコーヒー豆またはコーヒー粉を入れ、当店ポイントカードをお渡しします。<br />
                </Typography>
                <Typography variant="caption" align="left">
                  ※200ｇの場合：クラフト包装に包装<br />
                  ※300ｇ以上の場合：バルブに包装。<br />
                  ※クラフト包装袋とバルブは、珈琲豆が炭酸ガスを発生するのを応用して、新鮮さを保つよう開発された袋です。<br />
                </Typography>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Manual)
