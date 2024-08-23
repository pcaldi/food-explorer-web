import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  display: flex;
  justify-content: space-between;

  position: absolute;
  bottom: 0;

  width: 100%;
  height: 7.7rem;
  padding: 2.4rem 12.3rem;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_300};

`;

export const Brand = styled.image`
    width: 18.6rem;
    height: 3.0rem;
`;

export const Copyright = styled.div`

> span {
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 160%;
}


`;
