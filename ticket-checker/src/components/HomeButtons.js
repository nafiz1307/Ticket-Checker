import React from 'react'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./HomeButtons.css"

const buttons = [
  <Button key="one">Enroll Ticket</Button>,
  <Button key="two">Resell Ticket</Button>,
  <Button key="three">Invalidate Ticket</Button>,
];

const HomeButtons = () => {
  return (
    <div className="button__group">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup color="secondary" size="large" orientation="vertical">
          {buttons}
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default HomeButtons