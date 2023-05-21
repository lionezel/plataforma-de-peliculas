import AcUnitIcon from "@mui/icons-material/AcUnit";
import {
  Containers,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  Wrapper,
} from "./styled";
import { IconContext } from "react-icons";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Outlet />
      <Containers>
        <Wrapper>
          <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
            <LogoContainer>
              <AcUnitIcon />
            </LogoContainer>

            <Menu>
              <MenuItem>
                <Link to="/">
                  <MenuItemLink>Inicio</MenuItemLink>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/peliculas">
                  <MenuItemLink>Peliculas</MenuItemLink>
                </Link>
              </MenuItem>
              <MenuItem>
                <MenuItemLink>Serie</MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink>Home</MenuItemLink>
              </MenuItem>
            </Menu>
          </IconContext.Provider>
        </Wrapper>
      </Containers>
    </>
  );
};
