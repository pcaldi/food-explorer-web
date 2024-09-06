import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINT } from "./deviceBreakPoints";

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;

  @media (max-width: ${DEVICE_BREAKPOINT.MD}){
      font-size: 1.2rem;
  }
}

body {

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
		-webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
	  font-family: 'Roboto', sans-serif;
	  font-size: 1.6rem;
	  outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.7);
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border-radius: 8px;
  }


`;
