import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--medium-color);
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

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
      box-shadow: 2px 4px 8px #0007;
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

interface LabelProps {
  color: string;
}

export const Label = styled.div<LabelProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 120px;
  height: 55px;
  border: 1px solid var(--medium-color);
  box-shadow: 1px 2px 5px #0008;
  border-radius: 5px;
  background-color: ${props => `#${props.color}`};

  span {
    color: var(--darker-color);
    font-weight: bold;
    font-size: 0.8em;
    max-width: 100px;
  }
`;
