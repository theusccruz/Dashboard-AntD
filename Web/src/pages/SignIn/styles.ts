import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(#006eff, #c2dcff);
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 450px;
  height: 350px;

  background: #fff;
  border-radius: 10px;
  padding: 25px;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    margin-bottom: 15px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 250px;
    border-radius: 5px;
  }
`;
