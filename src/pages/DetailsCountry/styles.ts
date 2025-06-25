import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";

interface Props {
  isDark?: boolean;
}

export const Container = styled.div<Props>`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${({ isDark }) =>
    isDark ? "var(--grey-50)" : "var(--blue-950)"};
  color: ${({ isDark }) => (isDark ? "var(--blue950)" : "var(--white)")};
  padding-top: 2rem;
  & > * {
    color: inherit;
  }
  @media screen and (min-width: 610px) and (max-width: 1025px) {
    flex-direction: column;

    height: 100%;
    padding-top: 1rem;
  }

  @media (max-width: 609px) {
    flex-direction: column;
    max-width: 50rem;
    max-height: 100%;
    height: 100%;
    padding-top: 1rem;
  }

  .Container-info {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    min-height: 30rem;

    @media screen and (min-width: 610px) and (max-width: 1025px) {
      margin-left: 0;
      width: 100%;
    }

    @media (max-width: 609px) {
      flex-direction: column;
      margin-top: 1rem;
    }
  }

  .ContainerDetails {
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    gap: 2rem;
    height: 100%;
    max-height: 20rem;
    @media screen and (min-width: 610px) and (max-width: 1025px) {
      padding: 0 1rem;
      height: 100%;
    }
    @media (max-width: 609px) {
      display: block;
      height: 100%;
      max-height: 100%;
    }
  }
`;

export const ContainerInfo = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
  @media screen and (min-width: 610px) and (max-width: 1025px) {
    height: 100%;
    flex-direction: column;

    max-width: 50rem;
    padding-top: 4rem;
  }

  @media (max-width: 609px) {
    flex-direction: column;
    height: 100%;
    padding: 1rem 1rem;
  }
  .tagName {
    margin-top: 1rem;
  }
`;

export const ContainerTagName = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  @media screen and (min-width: 610px) and (max-width: 1025px) {
    padding: 0 1rem;
    height: 100%;
  }
  @media screen and (max-width: 609px) {
    height: 100%;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 0.3rem;

    @media (max-width: 609px) {
      padding: 0.5rem 0 0.3rem 0;
      margin-right: 0;
      height: 100%;
    }
  }

  @media (max-width: 609px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ImgCountry = styled.img`
  width: 100%;
  height: 100%;
  max-width: 50rem;
  max-height: 30rem;
  border-radius: 0.3rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 610px) and (max-width: 1025px) {
    max-width: 45rem;
    max-width: 30rem;
  }
  @media (max-width: 609px) {
    max-width: 25rem;
    max-height: 15rem;
  }
`;

export const Name = styled.h1`
  font-family: var(--font-family);
  font-size: 3rem;

  @media screen and (min-width: 610px) and (max-width: 1025px) {
    font-size: 2rem;
    padding: 0.5rem 1rem;
  }
`;

export const InfoCountry = styled.p`
  font-family: var(--font-family);
  font-size: 1.3rem;
  margin-top: 1rem;

  span {
    font-weight: bold;
    margin-right: 0.2rem;
  }
  @media (max-width: 609px) {
    max-width: 18rem;
  }
`;

export const Tag = styled.span<Props>`
  padding: 0.3rem 1rem;
  background-color: ${({ isDark }) =>
    isDark ? "var(--white)" : "var(--blue-900)"};
  color: ${({ isDark }) => (isDark ? "var(--grey-950)" : "var(--white)")};
  box-shadow: 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.1rem;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: 1.2rem;
  font-weight: 100;
  margin-right: 0.8rem;
  border-radius: 0.2rem;

  @media (max-width: 609px) {
    margin-right: 0.3rem;
    padding: 0.3rem 0.7rem;
    margin-top: 0.5rem;
  }
`;

export const Button = styled.button<Props>`
  outline: none;
  border: none;
  background-color: ${({ isDark }) =>
    isDark ? "var(--white)" : "var(--blue-900)"};
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 1.2rem;
  position: relative;
  left: 4rem;
  z-index: 2;
  @media screen and (min-width: 610px) and (max-width: 1025px) {
    left: 2rem;
  }
  @media (max-width: 609px) {
    left: 1rem;
  }
`;

export const BackIcon = styled(IoIosArrowRoundBack)<Props>`
  font-size: 1.8rem;
  color: ${({ isDark }) => (isDark ? "var(--white)" : "var(--black)")};
`;

export const ContainerLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
