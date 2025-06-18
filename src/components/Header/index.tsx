import { useNavigate } from "react-router-dom";
import { Container, Logo, MoonIcon, SunIcon, Theme } from "./styles";

interface HeaderProps {
  theme?: boolean;
  onChangeTheme: (isDark: boolean) => void;
}

const Header = ({ theme, onChangeTheme }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <>
      <Container isDark={theme}>
        <Logo onClick={() => navigate("/")}>Where in the world?</Logo>

        <Theme onClick={() => onChangeTheme(!theme)} theme={theme}>
          {theme ? <MoonIcon theme={theme} /> : <SunIcon theme={theme} />}
          <span>{theme ? "Dark Mode" : "Light Mode"}</span>
        </Theme>
      </Container>
    </>
  );
};

export default Header;
