import React from "react";
import { withStyles } from "material-ui/styles";
import GridList, { GridListTile, GridListTileBar } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";

import MenuImage from "../../shared/images/coffeesugano.jpg";
import IntroTitle from "../../shared/images/Intro.png";
import ItemImage from "../../shared/images/raw-beans.jpg";
import Img2 from "../../shared/images/store-indoor.jpg";


const tileData = [
  {
    img: Img2,
    title: "Image",
    author: "author",
    featured: true
  },
  {
    img: ItemImage,
    title: "Image",
    author: "author",
    featured: false
  },
  {
    img: MenuImage,
    title: "Image",
    author: "author",
    featured: true
  },
];



const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: "white"
  }
});

function AdvancedGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} cols={3.5} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton className={classes.title} />
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default withStyles(styles)(AdvancedGridList);
