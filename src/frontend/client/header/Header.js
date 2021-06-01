import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withStyles } from "material-ui/styles";
import {styles} from "./Enhance/withStyles";
import logo from "../shared/images/title.png";

class Header extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <header className={classes.global}>
        <div className={classes.header}>
          <h1 className={classes.h1}>
            <Link to="/">
              <img src={logo} className={classes.logo} alt="珈琲工房すがの" />
            </Link>
            <i />
          </h1>
          <nav className={classes.megaNav}>
            <ul className={classes.ul}>
              <li className={classes.li}>
                <Link to="/news/" className={classes.link}>
                  <span>お知らせ</span>
                </Link>
              </li>
              <li className={classes.li}>
                <Link to="/menu/" className={classes.link}>
                  喫茶メニュー
                </Link>
              </li>
              <li className={classes.li}>
                <Link to="/coffeeList/" className={classes.link}>
                  <span>豆リスト</span>
                </Link>
              </li>
              <li className={classes.li}>
                <a href="https://sugano-uchicafe.stores.jp/" className={classes.link} target="_blank">
                  <span>通販</span>
                </a>
              </li>
              <li className={classes.li}>
                <Link to="/access/" className={classes.link}>
                  <span>アクセス</span>
                </Link>
              </li>
              {/* <li className="phone">お問い合わせ：054-2574-5920</li>
              <li className="address">静岡県静岡市葵区東草深町</li> */}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default withStyles(styles)(Header);
