import { Button, ButtonProps } from "@mui/material";
import React from "react";

/**
 * Wrapper for the mui Button component. Sets the default variant to 'contained'
 *
 * @param props The props of the button, same as mui button
 * @returns the TSX component
 */
const MuiButton = (props: ButtonProps) => {
  return <Button variant={props.variant || "contained"} {...props} />;
};

export default MuiButton;
