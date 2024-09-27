import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoints";


export const Container = styled.button`
  border: none;
  background: none;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};

  font-family: 'Poppins';
  font-size: 2.4rem;
  font-weight: 700;

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
    font-weight: 500;
  }

`;
