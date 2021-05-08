import styled from 'styled-components';

export const Container = styled.div`
  * {
    box-sizing: border-box;  
  }
  
  display: flex;
`;
export const Wrapper = styled.div`
  width: 350px;
  height: 400px;
  margin: 0 auto;
  background: #ddd;
  border-radius: 5px;
  
  
  > form > input {
    width: 100%;
    padding: 15px;
  }  
  > form > button {
    width: 100%;
    padding: 15px;
  }
  
  > form > div {
    height: 350px;
    padding: 15px;
  }
`;