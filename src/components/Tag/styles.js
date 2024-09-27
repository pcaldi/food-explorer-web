import styled from "styled-components";


export const Container = styled.span`
  padding: .4rem .8rem;
  border-radius: .5rem;
  /* margin-right: 1.2rem; */
  font-size: 1.4rem;
  line-height: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  color: ${({ theme }) => theme.COLORS.WHITE};

`;
