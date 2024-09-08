import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
    margin-top: 2.4rem;
  }
`;
