import styled from "styled-components";

export const Header = styled.header`
  margin: 0 auto;
  position: relative;
  z-index: 997;

  nav {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 120px;
    align-items: center;
    gap: 33rem;
    background-color: #191919;
  }

  nav > ul {
    display: flex;
    gap: 2rem;

    li {
      padding: 0 1rem;
      display: inline-block;
      vertical-align: middle;
      transform: perspective(1px) translateZ(0px);
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 1px;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        z-index: -1;
        left: 51%;
        right: 51%;
        bottom: -11.5px;
        background: var(--article-color);
        height: 1px;
        transition: left 0.3s ease-out, right 0.3s ease-out;
      }
      &:hover::before {
        left: 0;
        right: 0;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
  .nav_focused {
    color: white;
    font-weight: bolder;
    &::before {
      left: 0;
      right: 0;
    }
  }

  .img-box > div > svg:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    nav {
      gap: 1rem;
      justify-content: space-around;
    }

    nav > ul {
      gap: 1rem;
    }

    li {
    }
  }
`;

export const Wrap = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 40px 0;
  position: relative;

  .sub-text {
    font-size: 50px;
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }

  .copyRight {
    padding-top: 5rem;
    text-align: center;
  }

  .title {
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;

    section {
      padding: 0 2rem;
    }

    h1 {
      text-align: center;
    }

    .content-Tab {
      justify-content: center;
    }

    .flex-wrap {
      flex-direction: column;
      justify-items: start;
      row-gap: 0;
    }

    #skills {
      margin-left: 0;

      .content-wrap {
        display: block;

        .title {
          margin-bottom: 2rem;
        }
      }
    }

    #about {
      .content-first {
        .right-col {
          margin-left: 2rem;
          .grid-wrap {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            row-gap: 1rem;
          }
        }
      }

      .img-box .img-item {
        width: 145px;
        height: auto;
        text-align: left;
        position: static;
      }

      .square {
        display: none;
      }
    }
  }
`;

export const Main = styled.section`
  margin-top: 7rem;
  margin-bottom: 10rem;

  .intro-vscode-wrap {
    width: 100%;
    height: 32rem;
    display: flex;
    justify-content: flex-end;
  }

  .intro-vscode-inner {
    width: 62%;
    height: 100%;
    background-color: #1e1e1e;
    padding: 3%;
    padding-left: 5%;
    border-radius: 3%;
    border: 1px solid #333;
  }

  .intro-vscode-inner p {
    line-height: 1.7;
    color: #bec844;
    font-size: 1.1em;
  }

  .intro-vscode-inner span {
    line-height: 1.5;
  }

  .space5 {
    padding-left: 5%;
  }

  .space10 {
    padding-left: 10%;
  }

  .space15 {
    padding-left: 15%;
  }

  .--b {
    color: #4a7f9e;
  }

  .--p {
    color: #007aff;
  }

  .--w {
    color: white;
  }

  .--y {
    color: yellow;
  }

  .--s {
    color: #8fc7e1;
  }

  .intro-slider-img {
    width: 4%;
    height: 4%;
  }

  @keyframes flicker-effect {
    50% {
      opacity: 0;
    }
  }

  .flicker-item {
    position: relative;
    display: none;
    margin-left: 1%;

    &::after {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      background: white;
      width: 5px;
      height: 15px;
      animation: flicker-effect 1s step-end infinite;
    }
  }

  .active {
    display: inline-block;
  }

  article {
    text-align: left;
    position: relative;
    &:hover .intro-text-name::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  .intro-text {
    font-size: 2.275em;
    font-weight: bold;
    margin: 1.5rem 0rem 0rem;
    position: relative;
    line-height: 1.4;
    letter-spacing: 9px;
  }

  .intro-text-name {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 95%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background: linear-gradient(
        0deg,
        rgba(190, 200, 68, 1) 0%,
        rgba(190, 200, 68, 1) 100%
      );
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
  }

  @media (max-width: 768px) {
    .intro-vscode-wrap {
      width: 100%;
      justify-content: center;
      height: 32rem;
      margin-top: 10rem;
      margin-bottom: 5.5rem;
    }

    .intro-vscode-inner {
      width: 100%;
      padding: 5% 0;
      padding-left: 5%;
    }

    .intro-vscode-inner p {
      line-height: 1.75;
      color: #bec844;
      font-size: 110%;
    }

    .space5 {
      padding-left: 3%;
    }

    .space10 {
      padding-left: 4%;
    }

    .space15 {
      padding-left: 6%;
    }
  }
`;

export const About = styled.section`
  margin-bottom: 10rem;
  margin-top: 15rem;

  h2 {
    margin-bottom: 1rem;
  }

  .intro-text {
    font-size: 50px;
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }

  .content-first {
    display: flex;
  }

  .img-box {
    width: 100%;
    height: 400px;
    perspective: 1000px;
    position: relative;
  }

  .img-box .img-item {
    position: absolute;
    border-radius: 10px;
    width: 200px;
    height: 65.4%;
    top: 7%;
    left: 50%;

    img {
      width: 100%;
      border-radius: 10px;
    }
  }

  .img-item {
    transition: 0.8s;
    transform-style: preserve-3d;
    position: relative;
    width: 240px;
    height: 240px;
  }

  .flipped {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .back {
    transform: rotateY(180deg);
  }

  .proflie-img {
    object-fit: cover;
    &:hover {
      cursor: alias;
    }
  }

  .square {
    z-index: -1;
    width: 200px;
    height: 250px;
    border: 4px solid #e1e1e13b;
    position: absolute;
    bottom: 20%;
  }
  .right-col {
    margin-left: 19rem;
    margin-top: 2rem;
  }

  .flex-wrap {
    display: flex;
    gap: 1rem;
    justify-content: space-around;
    margin-bottom: 1rem;
  }

  .flex-wrap .name-wrap {
    flex-shrink: 0;
  }

  .flex-wrap .grid-wrap {
    display: grid;
    grid-template-rows: repeat(2);
    grid-template-columns: 1fr 2fr;
    row-gap: 3rem;
    column-gap: 2rem;

    .title {
      text-align: right;
    }
  }

  .content svg,
  .content img {
    width: 45px;
    margin: 0 0.2rem 1rem;
    padding: 0;
  }

  .circle-logo {
    display: flex;
    gap: 0.2rem;
    align-items: baseline;
  }

  @media (max-width: 768px) {
    .right-col {
      margin-left: 55%;
    }

    .flex-wrap .grid-wrap {
      display: flex;
      flex-flow: column;
      row-gap: 1rem;
    }

    .title {
      text-align: left !important;
    }

    .content {
      font-size: 90%;
    }
  }
`;
