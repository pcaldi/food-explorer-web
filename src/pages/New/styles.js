import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 9.6rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

`;

export const Form = styled.div`
    display: flex;
    width: 112.0rem;
    flex-direction: column;
    gap: 2.4rem;

    margin: 0 auto;


  > header {
    display: flex;
    flex-direction: column;

     button {
      margin-top: 20px;
    }

    h1 {
      padding-top: 2.4rem;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  .ing-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .tags {
    width: 82.1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: .8rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    padding: .6rem .8rem;
    border-radius: .8rem;

    &:focus-within {
      outline: .1rem solid ${({ theme }) => theme.COLORS.WHITE};
    }

    input {
      background-color: transparent;
    }
  }

  .price {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border-radius: .8rem;
    padding: 1.2rem 1.4rem;


    &:focus-within {
      outline: .1rem solid ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  .btn {
    display: flex;
    justify-content: flex-end;

    button {
      max-width: 17.2rem;
      padding: 1.2rem 2.4rem;
      background: ${({ theme }) => theme.COLORS.LIGHT_RED};
    }

  }

`;

export const Items = styled.div`
  display: flex;
  gap: 2.4rem;

  section input  {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border-radius: .8rem;
  }

  .name {
    min-width: 46.3rem;
  }

`

export const Image = styled.div`
  padding: 1.2rem 3.2rem;
  width: 100%;
  min-width: 22.9rem;
  border-radius: .8rem;
  position: relative;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE};

  &:focus-within {
    outline: .1rem solid ${({ theme }) => theme.COLORS.WHITE};
  }

  > label {
    display: flex;
    gap: .8rem;
    cursor: pointer;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    span {
      font-family: "Poppins", sans-serif;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }

    input {
      position: absolute;
      right: 0;
      z-index: -1;

      max-width: 22.9rem;
    }

    svg, span {
      transition: filter 0.2s;
    }

    &:hover {
      svg, span {
        filter: brightness(0.9);
      }
    }
  }
`

export const Category = styled.div`
  width: 100%;
  min-width: 36.4rem;

  > label {
    position: relative;
    width: 100%;
    padding: 1.2rem 1.6rem;
    border-radius: .8rem;


    select {
      border: none;
      appearance: none;
      cursor: pointer;

      width: 100%;
      padding: 1.2rem 1.6rem;
      border-radius: .8rem;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      color: ${({ theme }) => theme.COLORS.GRAY_100};

      font-weight: 400;
      font-size: 1.4rem;
      line-height: 160%;
    }

    svg {
      width: 2.4rem;
      height: 2.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      position: absolute;
      top: 1.2rem;
      right: -35rem;
      cursor: pointer;
      pointer-events: none;
      transition: filter 0.2s;
    }
    &:hover {
      svg {
        filter: brightness(0.9);
      }
    }
  }

`;


