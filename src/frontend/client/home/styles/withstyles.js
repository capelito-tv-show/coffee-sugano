import React, { Component } from 'react'
import Main4 from '../../shared/images/sandwich-set.jpg'
import Main3 from '../../shared/images/gift-special.jpg'
import MainSM from '../../shared/images/coffeesugano.jpg'

export const styles = theme => ({
  wrapper: {
    position: 'absolute',
    top: '0',
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: '-103px',
      height: '100%'
    }
  },
  top: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  second: {
    position: 'relative',
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '0',
      height: 'auto'
    }
  },
  newscontet: {
    position: 'relative',
    width: '100%',
    height: '46%',
    [theme.breakpoints.down('sm')]: {
      padding: '0',
      height: 'auto'
    }
  },
  bloc: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box'
  },
  MainVisual: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: '40px 78px 40px 0',
    overflow: 'hidden',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      padding: '0',
      border: '20px solid white'
    }
  },
  MainImg: {
    height: '100%',
    width: '100%',
    backgroundPosition: 'left top',
    boxSizing: 'border-box',
    backgroundAttachment: 'fixed',
    background: `url(${Main3}) 50% 50% / cover no-repeat`,
    [theme.breakpoints.down('sm')]: {
      backgroundSize: 'auto 100vh',
      background: `url(${MainSM}) 50% 50% / cover no-repeat`
    }
  },
  inner: {
    fontWeight: '100',
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'rgba(1,1,1,0.7)',
      padding: '0 0 0 103px',
      height: '100%',
      color: 'white'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0'
    }
  },
  IntroTitle: {
    width: '95%'
  },
  subtitle: {
    width: '46%'
  },
  IntroText: {
    color: 'white',
    width: '97%',
    margin: '10px 0'
  },
  innerRight: {
    height: '100%',
    padding: '20px ',
    color: 'black',
    fontWeight: '100',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '20px 0'
    }
  },
  innerCenter: {
    height: '100%',
    padding: '0',
    fontWeight: '100',
    [theme.breakpoints.up('md')]: {
      padding: '30px 0 0 103px',
      height: '400px'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '20px'
    }
  },
  InnerText: {
    [theme.breakpoints.up('md')]: {
      width: '50%',
      margin: '55px'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '20px'
    }
  },
  card: {
    [theme.breakpoints.up('md')]: {
      padding: '0 20px',
      marginTop: '20px',
      textAlign: 'left',
      borderRight: '1px solid #f8f8f7',
      borderLeft: '1px solid #f8f8f7'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 20px',
      padding: '10px'
    }
  },
  CardImage: {
    width: '100%',
    maxHeight: '300px',
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '240px'
    }
  },
  MainTitle: {
    margin: '10px 0',
    fontWeight: 'lighter'
  },
  p: {
    fontSize: '14px',
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px'
    }
  },
  detail: {
    fontSize: '12px',
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px'
    }
  },
  MainIntro: {
    top: 78,
    position: 'absolute',
    width: '33%',
    [theme.breakpoints.down('sm')]: {
      padding: '0',
      width: '100%',
      marginTop: '100px'
    }
  },
  intro: {
    width: '100%',
    margin: '0',
    [theme.breakpoints.up('md')]: {
      padding: '0 96px 0 123px',
      height: '100%',
      position: 'absolute'
    }
  },
  MenuImage: {
    margin: '0',
    width: '100%',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%'
  },
  linkToMenu: {
    background: 'none',
    padding: '15px',
    color: 'white',
    border: '1px solid white',
    [theme.breakpoints.down('sm')]: {
      color: 'rgba(49,21,1,1)',
      border: '1px solid rgba(49,21,1,1)'
    }
  },
  sellButton: {
    padding: '15px',
    background: 'rgba(49,21,1,1)',
    color: 'white'
  },
  menulink: {
    color: 'rgba(49,21,1,1)',
    textDecoration: 'none'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  buy: {
    color: 'rgba(49,21,1,1)'
  },
  InnerImg: {
    paddingTop: '50px'
  },
  howToBuy: {
    background: 'none',
    marginLeft: '10px',
    padding: '15px',
    border: '1px solid rgba(49,21,1,1)'
  },
  footer: {
    fontWeight: '100',
    textAlign: 'center',
    backgroundColor: '#f8f8f7',
    [theme.breakpoints.up('md')]: {
      padding: '0 0 0 103px',
      width: '100%',
      color: 'black'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0'
    }
  }
})
