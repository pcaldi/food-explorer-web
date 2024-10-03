import styled from "styled-components";

import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoints";

export const Container = styled.button`
<<<<<<< HEAD
  width: 100%;

=======
>>>>>>> 62dd28a760fc8950cb391fb6e2d8f90ae65487db
  background: ${({ theme }) => theme.COLORS.DARK_RED};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  border-radius: .5rem;
  padding: 1.2rem 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;

  &:disabled {
    opacity: 0.5;
  }

 /*   @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    padding: .8rem 1.2rem;
    font-size: 1rem;
    gap: .4rem;
  }
 */
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 3.2rem;
  }

/*   @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    svg {
      font-size: 2rem;
    }

    span {
      font-size: 1rem;
    }
  } */


`;
