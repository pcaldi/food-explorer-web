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

<<<<<<< HEAD
 > section > h2 {
=======
 > section h2 {
>>>>>>> 62dd28a760fc8950cb391fb6e2d8f90ae65487db
    margin-bottom: 0;
    font-size: 2.4rem;
 }
`;


