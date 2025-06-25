import styled from "styled-components";
import { IoMoonSharp } from "react-icons/io5";
import { FiSun } from "react-icons/fi";

interface Props {
  isDark?: boolean;
}

export const Container = styled.header<Props>`
  width: 100%;
  height: 5rem;
  display: flex;
  background-color: aqua;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ isDark }) =>
    isDark ? "var( --white)" : "var(--blue-900) "};
  padding: 0 4rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: ${({ isDark }) => (isDark ? "var(--blue950)" : "var(--white)")};

  & > * {
    color: inherit;
  }

  @media screen and (min-width: 610px) and (max-width: 1025px) {
    padding: 0 2rem;
    gap: 1.2rem;
    top: 0;
    left: 0;
  }

  @media (max-width: 609px) {
    padding: 0 1rem;
    gap: 1.2rem;
  }
`;

export const Logo = styled.h2`
  font-family: var(--font-family);
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 609px) {
    font-size: 1.2rem;
  }
`;

export const Theme = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;

  font-family: var(--font-family);
  font-size: 0.8rem;
  font-weight: 300;
  border: none;
  outline: none;
  cursor: pointer;
  gap: 0.2rem;
`;

export const MoonIcon = styled(IoMoonSharp)<Props>`
  background-color: transparent;
  font-size: 1rem;
`;

export const SunIcon = styled(FiSun)<Props>`
  background-color: transparent;
`;
