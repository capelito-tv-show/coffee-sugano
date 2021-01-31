import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import { styles } from './styles/withstyles'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import MenuImage from '../shared/images/drip.jpg'
import IntroTitle from '../shared/images/Intro.png'
import coffeetitle from '../shared/images/title-coffee.png'
import shoptitle from '../shared/images/title-shop.png'

import StoreImage from '../shared/images/P1010320.JPG'
import ItemImage from '../shared/images/gift2.jpg'
import cup from '../shared/images/shop_2.jpg'

import NewsContent from './components/NewsContent'
import SimpleSlider from './components/Slicker';

class Main extends React.Component {
  render() {
    const classes = this.props.classes
    return (
      <div className={classes.wrapper}>
        <div className={classes.top}>
          <div className={classes.bloc}>
            <div className={classes.MainVisual}>
              <div className={classes.MainImg} />
            </div>
          </div>
        </div>
        <Grid container>
          <Grid item xs={12} className={classes.innerCenter}>
            <div className={classes.InnerText}>
              <img src={IntroTitle} className={classes.IntroTitle} />
              <p className={classes.p}>
                おかげさまで15周年を迎えました。<br />
                一粒一粒を選別した生豆を大切に焙煎した「一杯のおいしい珈琲」を
                お客様に楽しんでいただき、<br />
                お客様が満足できる「くつろぎのパートナー」になりたいと思います。<br />
                焙煎の仕方、抽出の仕方、飲み方もいろいろ、お客様の好みに合った珈琲が見つかるまでお付き合いしたいと思っております。
              </p>
            </div>
          </Grid>
        </Grid>
        <div className={classes.newscontet}>
          <Grid container className={classes.intro}>
            <Grid item xs={12}>
              <NewsContent />
            </Grid>
          </Grid>
        </div>
        <div className={classes.second}>
          <Grid container className={classes.intro}>
            <Grid item xs={12} md={6} lg={6} className={classes.innerRight}>
              <img src={StoreImage} className={classes.CardImage} />
              <div className={classes.card}>
                <img src={shoptitle} className={classes.subtitle} />
                <p className={classes.p}>
                  厳選して仕入れた珈琲の生豆を自家焙煎し、店内でお楽しみいただけます。<br />
                  ネルドリップで丁寧に入れた珈琲と、自家製のケーキでゆとりの時間をお過ごしください。
                </p>
                <Button className={classes.howToBuy}>
                  <a href="/menu" className={classes.menulink}>メニューを見る</a>
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} className={classes.innerRight} style={{background: '#f8f8f7'}}>
              <img src={ItemImage} className={classes.CardImage} />
              <div className={classes.card}>
                <img src={coffeetitle} className={classes.subtitle} />
                <p className={classes.p}>
                  ご自宅でもお楽しみいただけるよう、自家焙煎の珈琲豆を販売しています。<br />
                  店内には静岡市にちなんだオリジナルブレンド珈琲など、
                  20種類以上の珈琲豆を取り揃えております。<br />
                  お好みの珈琲豆がきっとみつかるはずです。
                </p>
                <Button className={classes.sellButton}>
                  <Link to="/coffeelist" className={classes.link}>
                    珈琲豆の購入はお電話で
                  </Link>
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.second}>
          <Grid container className={classes.intro}>
            <Grid item xs={12} md={6} lg={6} className={classes.InnerImg}>
              <div className={classes.card}>
                <img src={cup} className={classes.CardImage} />
                <p className={classes.p}>
                  店内で使用しているカップは全て高級と言う訳ではありませんが、<br />
                  同じ柄では無く、色々愉しめる様、異なる物を揃えています。<br />
                  また、店内の壁を利用し、地元の方の作品を中心に、絵画や写真などを飾っています。<br />
                  </p>
              </div>
            </Grid>
          </Grid>
        </div>
        <Grid container>
          <Grid item xs={12} className={classes.footer}>
            <div className={classes.footertext}>
              <p>営業時間 ：9：00～19：00(月曜定休日) </p>
              <p>@珈琲工房すがの AllRightReserved.,</p>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Main)
