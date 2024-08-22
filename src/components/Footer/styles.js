import styled from "styled-components";

export const Container = styled.footer`

  display: flex;
  justify-content: space-between;

  position: absolute;
  bottom: 0;

  width: 100%;
  height: 77px;
  padding: 24px 123px;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_300};

`;

export const Brand = styled.image`
    width: 186px;
    height: 30px;
`;

export const Copyright = styled.div`

> span {
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-size: 14px;
  font-weight: 400;
  line-height: 160%;
}


`;
