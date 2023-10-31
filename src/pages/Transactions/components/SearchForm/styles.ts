import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    height: 56px;
    flex: 1%;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 0 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    height: 56px;
    border: 2px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-300']};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;
    transition:
      background-color 0.175s,
      border-color 0.175s,
      color 0.175s;
    background-color: transparent;

    &:hover {
      border: 2px solid ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['green-500']};
    }
  }
`
