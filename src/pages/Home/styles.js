import styled from "styled-components";

export const Container = styled.div`
  width: 100% ;

  display: grid;
  grid-template-rows: auto;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;
  }

`;

export const Dishes = styled.div`
  max-width: 112.2rem;
  margin: 0 auto;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

 > section h2 {
    margin-bottom: 0;
    font-size: 2.4rem;
 }
`;


