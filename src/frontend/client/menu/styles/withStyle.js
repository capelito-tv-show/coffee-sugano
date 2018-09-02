import React, { Component } from "react";

export const styles = theme => ({
  categoryTitle: {
    width: "100%",
    borderBottom: "1px solid rgba(49,21,1,1)",
    borderTop: "1px solid rgba(49,21,1,1)",
  },
  mainTitle: {
    fontFamily: "serif",
    margin: "8px 0",
    paddingLeft: "8px",
    color: "rgba(49,21,1,1)",
    textAlign: "left",
    fontWeight: "50",
  },
  menuPaper: {
    boxShadow: "none"
  },
  menuList: {
    paddingBottom: "5px"
  },
  menuCard: {
    padding: "8px",
    listStyle: "none",
    margin: "0"
  },
  MenuCard: {
    paddingBottom: "20px",
  },
  table: {
    display: "flex"
  },
  title: {
    display: "inline-block",
    margin: "0",
    fontSize: "12px",
  },
  price: {
    margin: "0",
    paddingLeft:"6px",
    marginLeft: "auto",
    fontSize: "12px"
  },
  detail: {
    paddingBottom: "5px",
    margin: "0",
    fontSize: "10px"
    // borderBottom: "1px solid #D0D0D0"
  }
});
