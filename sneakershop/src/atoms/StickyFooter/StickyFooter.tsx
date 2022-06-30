import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "./StickyFooter.css";

function Copyright() {
  return (
    <div className="copyrightFooter">
      <Typography variant="body2" color="whitesmoke">
        {"Copyright © "}
        <Link color="inherit" href="https://houseofkickz.netlify.app/">
          House of Kickz
        </Link>{" "}
        {new Date().getFullYear()}{" "}
      </Typography>
    </div>
  );
}

export default function StickyFooter() {
  return (
    <Box
      className="stickyFooter"
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
      }}
    >
      <Copyright />
    </Box>
  );
}
