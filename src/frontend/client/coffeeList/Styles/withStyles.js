import React from "react";


export const styles = theme => ({
  menu: {
    margin: "auto"
  },
  menuContents: {
    margin: "0 auto",
    padding: "30px 100px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "56px",
      padding: "10px"
    }
  },
  manual: {
    marginTop: "0"
  },
  content: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  },
  card: {
    marginTop: "-8px"
  },
  divider: {
    margin: "10px 0"
  },
  img: {
    maxWidth: "100%",
    height: "130px",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "80px"
    }
  },
  p: {
    fontSize: "12px"
  },
  maintext: {
    fontSize: "14px"
  },
  manual: {
    minHeight: "358px",
    [theme.breakpoints.down("sm")]: {
      minHeight: "200px"
    }
  },
  td: {
    padding: "8px"
  },
  topimg: {
    width: "100%",
    objectFit: "cover",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "200px"
    }
  },
  main: {
    padding: "16px"
  },
  wrapper: {
    background:  "#f8f8f7",
    marginBottom: "30px"
  },
  tell: {
    paddingTop: "30px",
  },
});
