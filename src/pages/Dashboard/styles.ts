import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: var(--darker-color);
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: var(--darker-color);
    border: 2px solid var(--white-color);
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: var(--error-color);
      `}

    &::placeholder {
      color: var(--medium-color);
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: var(--button-form-color);
    border-radius: 0 5px 5px 0;
    border: 0;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: var(--button-form-color-hover);
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: var(--white-color);
    border-radius: 5px;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: var(--dark-color);
      }

      p {
        font-size: 18px;
        color: var(--medium-color);
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: var(--light-color);
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: var(--error-color);
  margin-top: 8px;
`;
