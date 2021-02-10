import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const GitHubUser = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.user.avatar_url}
          title={props.user.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.user.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Following: {props.user.following}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Public Repos: {props.user.public_repos}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GitHubUser;
