import { styled } from "styled-components"

export const Container = styled.div`
  max-width: 30.4rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: inline-flex;
  padding: 2.4rem;
  border-radius: .8rem;
  margin: 2.4rem;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  position: relative;

  img {
    width: 17.6rem;
    height: 17.6rem;
  }

`;

export const IconHeader = styled.button`
  position: absolute;
  top: 1.8rem;
  right: 1.6rem;

  border: none;
  background: transparent;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    width: 2.4rem;
    height: 2.4rem;
  }

`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .2rem;

  h2 {
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  font-family: 'Poppins';
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 140%;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: center;

    font-family: Roboto;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 160%;

    margin-bottom: 1.5rem;
  }

  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
    text-align: center;

    font-size: 3.2rem;
    font-weight: 400;
    line-height: 160%;

    margin-bottom: 1.5rem;
  }

`;

export const Order = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

`;
