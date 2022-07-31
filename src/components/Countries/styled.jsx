import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  * {
    box-sizing: border-box;
  } */
  /* background-color: #202d36; */

  .container {
    margin: auto;
    display: flex;
    width: 1040px;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .card {
    background-color: #2b3743;
    margin: 10px;
    color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 300px;
  }
  .card-header img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-height: 200px;
    width: 270px;
    margin: auto;
  }

  .tag {
    background: #cccccc;
    border-radius: 50px;
    font-size: 12px;
    margin: 0;
    color: #fff;
    padding: 2px 10px;
    text-transform: uppercase;
    cursor: pointer;
  }
  .tag-teal {
    background-color: #47bcd4;
    font-size: 18px;
  }
  .tag-purple {
    background-color: #5e76bf;
  }
  .tag-pink {
    background-color: #cd5b9f;
  }

  .card-body p {
    font-size: 14px;
    margin: 0 0 20px;
  }
`;

export const NameCoun = styled.div``;

export const InfosCountr = styled.div`
  width: 80%;
  height: 100px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;

  h4 {
    width: 86%;
  }

  > p {
    width: 50%;
  }
`;
