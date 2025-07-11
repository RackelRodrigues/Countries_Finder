import styled from "styled-components";
interface Props {
  isDark?: boolean;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  padding: 0 2.9rem;

  @media (min-width: 610px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 2rem;
  }

  @media (max-width: 609px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 1rem;
  }
`;

export const Background = styled.div<Props>`
  background-color: ${({ isDark }) =>
    isDark ? "var( --grey-50)" : "var(--blue-950)"};
  height: 100%;
  width: 100%;
  min-height: 100vh;

  .search-container {
    width: 100%;
    display: flex;
    padding: 0 4rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2rem auto;

    @media (min-width: 610px) and (max-width: 1025px) {
      margin: 2rem auto;
      padding: 0 2rem;
      gap: 1rem;
    }
    @media (max-width: 609px) {
      padding: 0 1rem;
      gap: 1rem;
    }
  }
`;

export const ContainerInput = styled.div`
  width: 40rem;
`;
