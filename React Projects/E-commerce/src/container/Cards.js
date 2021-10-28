import React from 'react';
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
import { blue, red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarIcon from '@material-ui/icons/Star';
import './card.css'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    fontSize:16,
    marginTop:"30px",
    cursor:'pointer'
  
  
      
  },
  title:{
fontSize:"0.7px",
color:"blue",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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

export default function Cards({title,price,id,category,image,rating,description}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <Card className={classes.root}>
         <Link to={`./product/${id}`} >
      <CardHeader
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        className={classes.title}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={category}
        
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {description.substring(0,100)}....
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      
        {rating.rate}{ <StarIcon  style={{color:"rgb(190, 190, 0)"}} />}
       
      </CardActions>
     </Link>
    </Card>
    
  );
}
