import React from 'react'
import "./HomeButtons.css"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const HomeButtons = () => {
  return (
    <div className="card__group">
      <Link to="/enroll">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent className="Card__Content">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                Enroll Ticket
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Enroll a new Ticket
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>{" "}
      <Link to="/resell">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent className="Card__Content">
              <Typography gutterBottom variant="h5" component="div">
                Resell Ticket
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Resell a pre owned ticket
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      <Link to="/invalidate">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent className="Card__Content">
              <Typography gutterBottom variant="h5" component="div">
                Invalidate Ticket
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Invalidate an used Ticket
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      <Link to="/view-all">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent className="Card__Content">
              <Typography gutterBottom variant="h5" component="div">
                Available Tickets
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Show Available Tickets
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};

export default HomeButtons