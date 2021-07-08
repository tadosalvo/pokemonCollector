import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '75.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

const CardComponent = () => {

    // need to logically handle prices if they have holofoil, normal, common ect.
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };


    const [test, setTest] = useState({
        name: "pokemon testName",
        image: "https://images.pokemontcg.io/ex14/10.png",
        id: "ex14-10",
        set: { id: "ex14", name: "Crystal Guardians", series: "EX" },
        artist: "Jet the goat",
        tcgPlayer: {
            prices: { holofoil: { market: 7.75 }, reverseHoloFoil: { market: 150 } },
            url: "https://prices.pokemontcg.io/tcgplayer/sm8-96"
        }

    })

    return (
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title= {test.name}
            subheader={test.set.name + " " + test.set.series}
          />
          <CardMedia
            className={classes.media}
            image={test.image}
            title="Paella dish"
          />
          <CardContent>

            <Typography variant="body2" color="textSecondary" component="p">
              Artist: {test.artist } 
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              price: {test.tcgPlayer.prices.holofoil.market}
            </Typography>

          </CardContent>

          <CardActions disableSpacing>

            <IconButton aria-label="add to favorites">
              <button>add to collection</button>

            </IconButton>
           

            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
             <button>go to tcgplayer</button>
            </IconButton>
            
          </CardActions>
        
        </Card>
      );
}

export default CardComponent
