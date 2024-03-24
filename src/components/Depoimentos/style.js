import styled from "styled-components";

export const ContainerTag = styled.main`
  min-height: 60vh;
  color: black;
  width: 80%;
  margin: 0 auto;
  padding-top: 80px;

  section {
    display: flex;
    flex-direction: column;
   
    h1 {
        font-size: 2.5rem;
        color: #54595f;
        text-align: center;
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
        width: 500px;
        min-height: 280px;
        display: flex;
        overflow: hidden;
        border-radius: 6px;
        overflow: hidden;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        outline: none;
        .picture {
          padding: 20px 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 55%;
          img {
            width: 100%;
            border-radius: 50%;
          }
        }
        .content {
          background-color: #00aacc;
          padding: 20px 40px;
          width: 45%;

          display: flex;
          flex-direction: column;
          .food-name {
            color: #fff !important;
            font-size: 1.5rem;
            font-weight: bold;
            font-family: "Montserrat";
            line-height: 1;
            margin-top: 45px;
            padding-bottom: 8px;
            border-bottom: 1px solid #fff;
           
          }
    
          .week-day {
            font-size: 0.75rem;
            color: #fff;
            text-transform: uppercase;
            font-weight: 500;
          }
        }
        .nutrition {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          label {
            font-size: 1rem;
            color: #fff;
            font-weight: 500;
          }

        }
      }
    }
  }
`;
