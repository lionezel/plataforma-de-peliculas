import { Box, styled } from "@mui/material";

export const CardContainer = styled(Box)`
  display: flex;
  width: 200px;
  height: 300px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 50px;
  margin-left: 50px;
  text-decoration: none;
  &:hover {
    background-color: "#000";
  }
`;

export const Img = styled('img')`
  border-radius: 15px;
`
