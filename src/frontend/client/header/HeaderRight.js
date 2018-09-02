import React, { Component } from "react";
import { Link } from "react-router-dom";
import {withStyles} from "material-ui/styles";
import {styles} from "./Enhance/withStyles";
import logo from "../shared/images/glyph-icons2.png";

class HeaderRight extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <header className={classes.globalRight}>
        <div className={classes.header}>
          <h1 className={classes.h1}>
            <a href="https://www.instagram.com/explore/tags/%E7%8F%88%E7%90%B2%E5%B7%A5%E6%88%BF%E3%81%99%E3%81%8C%E3%81%AE/" target="_blank">
              <img src={logo} className={classes.icon} alt="珈琲工房すがの" />
            </a>
          </h1>
        </div>
      </header>
    );
  }
}

export default withStyles(styles)(HeaderRight);
