import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Greeting = styled.div`
  font-size: 22px;
`;

export const UserName = styled.span`
  color: ${p => p.theme.colors.tomato};
`;

export const Button = styled.button`
  display: block;
  padding: 8px;
  min-width: 100px;
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
    box-shadow: 0px 0px 10px 0px ${p => p.theme.colors.tomato};
    transform: scale(1.1);
  }
`;
