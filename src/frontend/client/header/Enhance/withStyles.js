import React, { Component } from "react";

export const styles = (theme) => ({
  global: {
    backgroundColor: 'rgba(49,21,1,1)',
    width: '103px',
    height: '100%',
    position: 'fixed',
    zIndex: '100',
    top: 0,
    left: 0,
    minHeight: '450px',
    [theme.breakpoints.down('sm')]: {
      overflow: 'hidden',
      width: '100%',
      height: 'auto',
      backgroundPosition: 'top',
      backgroundSize: '100%',
      position: 'fixed',
      top: '0',
      padding: 0,
      zIndex: 1010,
      minHeight: 0,
    },
  },
  globalRight: {
    backgroundColor: 'white',
    width: '78px',
    height: '100%',
    position: 'fixed',
    zIndex: '100',
    top: 0,
    right: 0,
    minHeight: '450px',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      overflow: 'hidden',
      width: 'auto',
      height: 'auto',
      backgroundPosition: 'top',
      backgroundSize: '100%',
      position: 'relative',
      padding: 0,
      zIndex: 1010,
      minHeight: 0,
    },
  },
  header: {
    display: 'block',
    margin: '140px 0',
    [theme.breakpoints.down('sm')]: {
      margin: '0',
    },
  },
  h1: {
    [theme.breakpoints.down('sm')]: {
      margin: '30px 0 30px 2%',
      width: '18%',
      textAlign: 'center',
      float: 'left',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '15px 10px',
    },
  },
  icon: {
    width: '50%',
  },
  megaNav: {
    [theme.breakpoints.down('sm')]: {
      float: 'left',
      width: '75%',
    },
  },
  ul: {
    margin: '0 auto',
    listStyle: 'none',
    padding: '15px 0',
    textAlign: 'left',
    display: 'table',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
      margin: 0,
      padding: '15px 0',
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0',
    },
  },
  li: {
    display: 'block',
    padding: '20px 0',
    fontSize: '13px',
    [theme.breakpoints.down('sm')]: {
      float: 'left',
      // fontSize: "11",
      cursor: 'pointer',
      verticalAlign: 'middle',
      display: 'table-cell',
      padding: '20px 25px 0',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '15px 4px',
    },
  },
  link: {
    color: 'white',
    fontSize: '12px',
    fontWeight: '100',
    textDecoration: 'none',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '10px',
    },
  },
  logo: {
    width: '86px',
    position: 'relative',
    top: '0',
    display: 'block',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      top: '0',
      display: 'block',
      position: 'relative',
    },
    [theme.breakpoints.down('xs')]: {
      width: '63px',
    },
  },
})
