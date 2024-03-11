import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  padding: 8px;
  min-width: 50px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 14px;
  border: 1px solid ${p => p.theme.colors.black};
  background: transparent;
  text-align: center;
  cursor: pointer;
  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out,
    color 250ms ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px 0px ${p => p.theme.colors.green};
    transform: scale(1.1);
  }
`;
