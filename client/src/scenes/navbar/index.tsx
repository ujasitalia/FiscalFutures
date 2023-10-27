/* eslint-disable no-empty-pattern */
import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import PixIcon from "@mui/icons-material/Pix";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

export default function Navbar({}: Props) {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.2rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* Left side */}
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }}></PixIcon>
        <Typography variant="h4" fontSize="16px">
          FiscalFutures
        </Typography>
      </FlexBetween>

      {/* Right side */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
}
