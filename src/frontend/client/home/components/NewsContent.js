import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import { firebaseDb } from '../../../shared/Firebase'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import img from '../../shared/images/drip.jpg'

const styles = theme => ({
  newstitle: {
    padding: '8px 15px',
    margin: '1px 0',
    background: '#f8f8f7'
  },
  p: {
    textAlign: 'left'
  },
  newslist: {
    width: '93%',
    margin: '0 auto',
    textAlign: 'left'
  },
  paper: {
    boxShadow: 'none'
  },
  newslist: {
    paddingBottom: '5px'
  },
  card: {
    padding: '0',
    listStyle: 'none',
    margin: '0'
  },
  table: {
    margin: '0 auto',
    display: 'flex',
    textDecoration: 'none'
  },
  h2: {
    textAlign: 'center',
    padding: "0px 20px",
    // margin: "0px",
    fontWeight: 'lighter',
  },
  date: {
    margin: 'auto',
    width: '40%',
    marginLeft: '20px',
    fontSize: '12px',
    color: 'black'
  },
  title: {
    width: '60%',
    margin: 'auto',
    marginLeft: '20px',
    padding: '0 15px',
    fontSize: '12px',
    color: 'black'
  },
  list: {
    margin: '6px 20px',
    [theme.breakpoints.up('md')]: {
      width: '60%',
      margin: 'auto'
    }
  },
  img: {
    width: '100%',
    objectFit: 'contain',
    height: '400px'
  }
})

class NewsContent extends React.Component {
  constructor() {
    super()
    this.state = { news: [] }
  }
  componentDidMount() {
    const blendRef = firebaseDb
      .ref('news/')
      .orderByKey()
      .limitToLast(5)
    let _this = this

    const newsRef = blendRef.on('value', function(snapshot) {
      const news = snapshot.val()
      _this.setState({
        news: news
      })
    })
  }

  render() {
    const classes = this.props.classes
    const news = this.state.news
    const menu = Object.keys(news)
      .reverse()
      .map(key => {
        return (
          <Paper className={classes.paper}>
            <ul className={classes.card}>
              <li className={classes.newslist}>
                <div className={classes.newstitle}>
                  <Link to="/news" className={classes.table}>
                    <p className={classes.date}>{news[key].date}</p>
                    <p className={classes.title}>{news[key].title}</p>
                  </Link>
                </div>
              </li>
            </ul>
          </Paper>
        )
      })
    return (
      <Grid container className={classes.content}>
        <Grid item xs={12} sm={12}>
          <h3 className={classes.h2}>お知らせ</h3>
          <div className={classes.list}>{menu}</div>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(NewsContent)
