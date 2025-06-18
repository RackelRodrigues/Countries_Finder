import styled from "styled-components";

interface Props {
  isDark?: boolean;
}

export const Container = styled.div<Props>`
  width: 100%;
  height: 100%;
  max-width: 20rem;
  background-color: ${({ isDark }) =>
    isDark ? "var(--grey-50)" : "var(--blue-900)"};
  color: ${({ isDark }) => (isDark ? "var(--blue950)" : "var(--white)")};
  cursor: pointer;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  & > * {
    color: inherit;
  }

  @media (max-width: 609px) {
    max-width: 28rem;
    height: auto;
  }
`;

export const ImgCountry = styled.img`
  width: 100%;
  height: 12.5rem;
  border-radius: 0.3rem 0.3rem 0 0;

  @media (max-width: 609px) {
    height: 100%;
  }
`;

export const Name = styled.h1`
  font-size: 1.5rem;
  max-width: 20rem;
  padding: 0.5rem 0 0.5rem 1rem;
`;

export const InfoCountry = styled.p`
  span {
    font-weight: bold;
    margin-right: 0.3rem;
  }
`;

export const ContainerDetails = styled.div`
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0 1rem 1rem;
  gap: 0.5rem;
`;
