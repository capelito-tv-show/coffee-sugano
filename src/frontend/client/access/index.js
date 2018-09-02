import React from 'react'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

import MapComponent from './component/MapComponent'

const styles = theme => ({
  container: {
    background: '#f8f8f7',
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
      margin: '56px 0'
    }
  },
  box: {
    padding: '10px',
    [theme.breakpoints.down('sm')]: {
      padding: '20px 0'
    }
  },
  textbox:{
    padding: "15px",
    [theme.breakpoints.up('md')]: {
      paddingTop: "100px",
      textAlign: "left",
    }
  },
  content: {
    fontSize: '12px',
    padding: "10px",
    [theme.breakpoints.down('sm')]: {
      margin: "0 auto",
      padding: "0",
      width: "71%",
    }
  }
})

class Access extends React.Component {
  render() {
    const s = this.props.classes

    return (
      <Grid container className={s.container}>
        <Grid item xs={12} md={5}>
          <div className={s.box}>
            <div className={s.textbox}>
              <Typography variant="headline" className={s.title} style={{fontFamily: "serif"}} align="center">
                駿府城公園すぐちかく
              </Typography>
              <Typography variant="subtitle" className={s.content}>
                営業時間: 9：00～19：00 <br />
                休業日 ：毎週月曜日{' '}
                <span className={s.note}>年末年始、夏季休業あり</span>
                <br />
                座席数 ：テーブル14席 / カウンター4席<br />
                駐車場 ：4台（無料）<br />
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <div className={s.box}>
            <MapComponent />
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Access)
