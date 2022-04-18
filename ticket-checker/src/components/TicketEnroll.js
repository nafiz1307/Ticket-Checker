import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./TicketEnroll.css";
import Button from "@mui/material/Button";


const TicketEnroll = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "100%",
          "& > *": {
            m: 1,
          },
        }}
      >
        <div className="ticket__enroll">
          <TextField id="standard-basic" label="Name" variant="standard" />
          <TextField
            id="standard-basic"
            label="Phone Number"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Ticket Identifier"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="User Public Key"
            variant="standard"
          />
          <TextField id="standard-basic" label="Signature" variant="standard" />
        </div>
        <Button variant="contained" size="large">
          Enroll
        </Button>
      </Box>
    </div>
  );
};

export default TicketEnroll;
