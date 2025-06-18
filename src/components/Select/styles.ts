import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

interface Props {
  isDark?: boolean;
}

export const SelectContainer = styled.div<Props>`
  position: relative;
  width: 100%;
  height: 3rem;
  max-width: 20rem;
  display: flex;
  align-items: center;
  border-radius: 0.2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  padding: 0 0.5rem;
  background-color: ${({ isDark }) =>
    isDark ? "var( --white)" : "var(--blue-900) "};
  color: ${({ isDark }) => (isDark ? "var(--blue950)" : "var(--white)")};

  & > * {
    background-color: inherit;
    color: inherit;
  }
  select:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
`;

export const SelectStyled = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  border: none;
  width: 100%;
  height: 2.5rem;
  cursor: pointer;
  select:active {
    outline: none;
    box-shadow: none;
    border: none;
  }
`;

export const SelectButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export const SelectIconDown = styled(IoIosArrowDown)`
  pointer-events: none;
`;

export const SelectIconUp = styled(IoIosArrowUp)`
  pointer-events: none;
`;

export const SelectOptions = styled.option<Props>`
  font-family: var(--font-family);
  font-size: 1rem;
  background-color: ${({ isDark }) =>
    isDark ? "var( --white)" : "var(--blue-900) "};
  color: ${({ isDark }) => (isDark ? "var(--blue950)" : "var(--white)")};
  cursor: pointer;
`;
