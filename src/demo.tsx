import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Zoom from '@mui/material/Zoom';

export default function ActionAreaCard() {
  const [show, setShow] = useState(false);
  return (
    <Box
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      sx={{ m: 1, width: 150, position: "relative" }}
    >
      <Card>
        <CardActionArea
          onClick={() => {
            console.log("pasticcio");
          }}
        >
          <CardMedia
            sx={{ height: 150, objectFit: "contain" }}
            component="img"
            image="https://backstage.io/logo_assets/svg/Icon_Gradient.svg"
            alt="Backstage"
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: 25,
              backgroundColor: "#393939"
            }}
          >
            <Typography
              variant="body1"
              component="div"
              sx={{
                mx: -2,
                my: -2,
                color: "white",
                textAlign: "center"
              }}
            >
              Backstage yah yah oh well
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {show && (
      <Zoom in={show}>
        <Card
          sx={{
            display: "block",
            width: 150,
            position: "absolute",
            top: 160,
            left: 20,
            zIndex: 1
          }}
        >
          <Button
            variant="contained"
            sx={{ width: 160 }}
            onClick={() => {
              console.log("salsiccio dev");
            }}
          >
            dev
          </Button>
          <Button variant="contained" sx={{ width: 160 }}>
            test
          </Button>
          <Button variant="contained" sx={{ width: 160 }}>
            stage
          </Button>
          <Button variant="contained" sx={{ width: 1 }}>
            prod
          </Button>
        </Card>
      </Zoom>
      )}
    </Box>
  );
}
