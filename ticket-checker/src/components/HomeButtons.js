import React from 'react'
import Button from "@mui/material/Button";
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
      {" "}
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
    </div>
  );
};

export default HomeButtons