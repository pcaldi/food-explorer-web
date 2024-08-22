import { styled } from "styled-components"

export const Container = styled.div`
  max-width: 304px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: inline-flex;
  padding: 24px;
  border-radius: 8px;
  margin: 24px;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  position: relative;

  img {
    width: 176px;
    height: 176px;
  }

`;

export const IconHeader = styled.button`
  position: absolute;
  top: 18px;
  right: 16px;

  border: none;
  background: transparent;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    width: 24px;
    height: 24px;
  }


`;



export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;

  h2 {
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  font-family: 'Poppins';
  font-size: 24px;
  font-weight: 700;
  line-height: 140%;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    width: 24px;
    height: 24px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: center;

    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 160%;

    margin-bottom: 15px;
  }

  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
    text-align: center;

    font-size: 32px;
    font-weight: 400;
    line-height: 160%;

    margin-bottom: 15px;
  }

`;

export const Order = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

`;
