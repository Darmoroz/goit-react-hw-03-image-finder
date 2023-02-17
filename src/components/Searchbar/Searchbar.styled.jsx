import styled from 'styled-components';

export const SearchbarStyled = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  margin-bottom: ${p => p.theme.spacing(4)};
  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(2)};
  background-color: ${p => p.theme.colors.searchBackground};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.11), 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  max-width: 500px;
  width: 100%;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.spacing()};
  overflow: hidden;
  button[type='submit'] {
    display: flex;
    border: ${p => p.theme.spacing(0)};
    cursor: pointer;
    transition: opacity 200ms linear;
    opacity: 0.5;

    :hover {
      opacity: 1;
    }
  }
  input[name='search'] {
    min-height: ${p => p.theme.spacing(9)};
    width: 100%;
    padding: ${p => p.theme.spacing()};
    line-height: 1.5;
    border: none;
    outline: none;
  }
`;
