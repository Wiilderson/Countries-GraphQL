import styled from "styled-components";

export const Ul = styled.div`
  display: flex;
  width: 49%;
  height: 55px;
  margin: auto;
  justify-content: center;
  gap: 2px;
  > li {
    cursor: pointer;
    border-radius: 10%;
    /* box-shadow: 1px 1px #888888; */
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    list-style-type: none;
    width: 32px;
    height: 40px;
    display: flex;
    align-items: center;
    background-color: #2b3743;
    justify-content: center;

    :hover {
      background-color: #ffff;
      a {
        color: #030d16;
      }
    }

    a {
      color: #ffff;
      text-align: center;
      text-decoration: none;
    }
  }
`;
