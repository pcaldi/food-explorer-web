import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "content"
    "footer";

    > main {
      grid-area: content;
      overflow-y: auto;
      width: 106.8rem;
      margin: 0 auto;

        > header {
          display: flex;
          flex-direction: column;
          padding-top: 4rem;
          gap: 2.4rem;

          h1 {
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            line-height: 140%;
            color: ${({ theme }) => theme.COLORS.GRAY_200};

          }
        }
      }

`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.3rem;
`;

export const Empty = styled.div`
  width: 106.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  img {
    width: 40rem;
    height: 40rem;
    margin-bottom: 2.4rem;
  }

  span {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};

  }
`;
