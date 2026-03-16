import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 2rem;
  background-color: #1a1a1e;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  color: #fff;
  font-family: 'Inter', sans-serif;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.8rem;
    color: #a855f7;
  }
`;

export const FilterButtonsBoxe = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 1.5rem;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #3f3f46;
  background: #27272a;
  color: #fff;
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #a855f7;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #a855f7;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.1);
  }


  ${FilterButtonsBoxe} & {
    width: auto;
    padding: 6px 12px;
    font-size: 0.8rem;
    background-color: #3f3f46;

    &:hover {
      background-color: #a855f7;
    }
  }
`;

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;

  li {
    background: #27272a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 10px;
    transition: transform 0.1s;

    &:hover {
      transform: translateX(5px);
    }

    span {
      cursor: pointer;
      flex: 1;
    }

    button {
      background: #ef4444;
      width: 30px;
      height: 30px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      &::after {
        content: '✕';
        font-size: 14px;
      }
    }
  }
`;