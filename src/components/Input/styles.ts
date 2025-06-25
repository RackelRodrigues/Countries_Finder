import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";

interface Props {
  isDark?: boolean;
}

export const InputContainer = styled.div<Props>`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  background-color: ${({ isDark }) =>
    isDark ? "var( --white)" : "var(--blue-900) "};
  color: ${({ isDark }) => (isDark ? "var(--blue950)" : "var(--white)")};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  & > * {
    background-color: inherit;
    color: inherit;
  }

  & > svg {
    order: 1;
    margin-left: 0.5rem;
  }

  & > input {
    order: 2;
    flex: 2;
    margin-left: 0.2rem;
  }

  @media (min-width: 610px) and (max-width: 1025px) {
    & > svg {
      order: 2;
    }

    & > input {
      order: 1;
      margin-left: 0.3rem;
    }
  }

  @media (max-width: 609px) {
    & > svg {
      order: 2;
      margin-right: 0.2rem;
    }

    & > input {
      order: 1;
      margin-left: 0.3rem;
    }
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  border-radius: 0.2rem;
  margin-left: 0.2rem;
  order: 2;
  flex: 2;

  ::placeholder {
    color: #888;
  }
`;

export const SearchIcon = styled(IoIosSearch)`
  font-size: 1.5rem;
  margin-left: 0.5rem;
  order: 1;
`;
