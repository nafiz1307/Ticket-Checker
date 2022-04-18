import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Invalidate.css"

const Invalidate = () => {
  return (
    <div>
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
          <div className="page__header">
            <h1>Invalidate Ticket</h1>
          </div>
          <div className="ticket__invalidate">
            <TextField
              id="standard-basic"
              label="Ticket Identifier"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Buyer Public Key"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Signature"
              variant="standard"
            />
            <TextField id="standard-basic" label="Name" variant="standard" />
            <TextField
              id="standard-basic"
              label="Phone Number"
              variant="standard"
            />
          </div>

          <Button variant="contained" size="large" color="error">
            Invalidate
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Invalidate