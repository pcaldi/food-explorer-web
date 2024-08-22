import styled from "styled-components";

export const Container = styled.div``;

export const Item = styled.div`
  max-width: 837px;
  height: 48px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_300};

  border-radius: 8px;
  padding: 8px 4px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;


`;
