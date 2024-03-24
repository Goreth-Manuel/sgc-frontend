import styled from "styled-components";

export const ContainerTag = styled.main`
  min-height: 100vh;
  color: black;
  width: 90%;
  margin: 0 auto;
  padding-top: 60px;

  section {
    display: flex;
    flex-direction: column;
    label {
      display: flex;
      align-items: center;
      font-size: 2rem;
      font-weight: semibold;
      
    }
    .scroll-buttons {
      position: relative;
      width: 100%;
      padding: 0 60px;
      .prev-button {
        position: absolute;
        left: -10px;
        top: 45%;
        cursor: pointer;
      }
      .next-button {
        position: absolute;
        right: 0;
        top: 45%;
        cursor: pointer;
      }
    }
    .card-list {
      display: flex;
      margin-top: 60px;
      width: 100%;
      overflow-x: hidden;
      gap: 30px;
      padding-bottom: 20px;
      -webkit-overflow-scrolling: touch;
      
      .card {
        background-color: #fff;
        flex-shrink: 0;
        width: 300px;
        min-height: 280px;
        display: flex;
        overflow: hidden;
        border-radius: 6px;
        overflow: hidden;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        outline: none;
        .picture {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 400px;
          img {
            width: 100%;
          }
        }
        .content {
          background-color: #00aacc;
          padding: 20px 40px;
          width: 55%;

          display: flex;
          flex-direction: column;
          .food-name {
            color: #fff !important;
            font-size: 2.2rem;
            font-weight: bold;
            font-family: "Montserrat";
            line-height: 1;
            margin-bottom: 10px;
          }
          .badge {
            width: 90px;
            text-align: center;
            color: #fff;
            background-color: #1dd1a1;
            padding: 4px 15px;
            border-radius: 32px;
            font-size: 0.75rem;
            text-transform: uppercase;
            font-weight: 600;
          }
          .week-day {
            font-size: 0.75rem;
            color: #fff;
            text-transform: uppercase;
            font-weight: 500;
            margin-top: 12px;
            font-weight: 600;
          }
        }
        .nutrition {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          label {
            font-size: 0.85rem;
            color: #fff;
            font-weight: 600;
            border-bottom: 1px solid #fff;
            margin-bottom: 8px;
          }
          span {
            margin-top: 5px;
            font-size: 0.85rem;
            color: #fff;
          }
        }
      }
    }
  }
`;
