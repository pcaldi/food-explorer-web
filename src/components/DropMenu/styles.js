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

  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  position: fixed;
  z-index: 9999;

  overflow-y: hidden;

  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &[data-menu-is-open="true"] {
    transform: translateX(0);
  }

  > header {
      grid-area: header;
      width: 100%;
      display: flex;
      gap: 1.6rem;
      padding: 2.4rem;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

      > button {
        display: flex;
        background: none;
        border: none;

        svg {
          color:  ${({ theme }) => theme.COLORS.GRAY_100};
          font-size: 2.4rem;
        }
      }

      > span {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 2rem;
        font-weight: 400;

      }
    }


  main {
    grid-area: content;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
    width: 100%;

    > button ,
    .btn {
      background: none;
      border: none;
      text-align: left;
      width: 90%;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 2.4rem;
      font-weight: 400;
      font-family: 'Poppins', sans-serif;

      border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_400};

    }
  }

  > footer {
    grid-area: footer;
  }

`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  border-radius: .5rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  svg {
    color:  ${({ theme }) => theme.COLORS.GRAY_100};
    width: 1.8rem;
    height: 1.8rem;
    margin-left: 1.6rem;
  }

  input {
    &::placeholder {
      font-size: 1.2rem;
    }

  }

`;
