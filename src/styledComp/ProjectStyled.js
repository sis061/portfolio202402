import styled from "styled-components";

export const Projects = styled.section`
  .item-img {
    border-radius: 20px;
    overflow: hidden;
    width: 460px;
    height: 320px;

    &::after {
      border-radius: 20px;
      content: "";
      pointer-events: none;
      position: absolute;
      z-index: 1;
      inset: 0px;
      background-color: rgb(0 0 0 / 64%);
      transition: opacity 300ms ease-in-out;
    }
    &:hover {
      &::after {
        opacity: 0.5;
      }
    }

    img {
      width: 100%;
      /* height: 100%; */
      vertical-align: middle;
      object-fit: cover;
    }
  }

  .content-Tab {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    .content-Tab {
      justify-content: center;
    }
  }

  .content-item {
    margin-top: 2rem;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
    }

    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }

    .item-cursor {
      z-index: 1;
      position: absolute;
      color: #bec844;
      animation: bounce 1s infinite;
    }
  }

  .item-info {
    flex-shrink: 1;
    padding: 1rem;
    z-index: 10;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    h3 {
      color: rgb(255, 255, 255);
      font-size: 1.667em;
      font-weight: 800;
      margin-bottom: 1rem;
    }

    p {
      font-size: calc(0.875em + 0.9px);
      color: rgb(213, 213, 213) !important;
    }
  }

  .skill-wrap {
    display: flex;

    .skill-item {
      background: rgb(105, 104, 105);
      padding: 4px 10px;
      border-radius: 50px;
      text-transform: capitalize;
      font-size: 11px;
      margin-right: 6px;
      color: rgb(255, 255, 255);
      font-weight: 500;
    }
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.5); */
  background: rgb(0 0 0 / 27%);
  z-index: 998;
  display: ${(props) => (props.modalOpen ? "block" : "none")};
`;

export const Modal = styled.div`
  position: relative;

  .container {
    overflow: hidden;
    border-radius: 15px;
    padding: 2rem;
    background-color: #1e1e1e;
    z-index: 999;
    height: 90vh;
    width: 75%;
    position: fixed;
    top: ${(props) => (props.modalOpen ? "5%" : "-180%")};
    left: 50%;
    transform: translate(-50%);
    transition: top 0.5s ease-in-out;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    overflow-y: auto;

    & > div > svg {
      margin-left: 1rem;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .modal-content {
    padding: 3rem 1rem;

    h2 {
      margin-bottom: 3rem;
    }
  }

  .content-wrap {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }

  .content-text {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .text-wrap {
    a {
      word-break: break-all;
    }
    a:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    .sub {
      font-weight: bold;
      font-size: 1.3rem;

      svg {
        margin-right: 0.5rem;
      }
    }

    .info {
      padding-right: 1.5rem;
      letter-spacing: 1px;
      line-height: 1.5rem;

      mark {
        padding: 0 0.2rem;
        background: none;
        color: #bec844;
        font-weight: bold;
      }
    }
  }

  .mobile-flex {
    position: absolute;
    right: 45%;
    bottom: 10%;
    display: flex;
    justify-content: center;
  }

  @keyframes mobilescrollDown {
    0% {
      margin-top: 0;
    }
    100% {
      margin-top: -1796px;
    }
  }

  @keyframes scrollDown {
    0% {
      margin-top: 0px;
    }
    100% {
      margin-top: -400px;
    }
  }

  .content-img {
    flex-shrink: 0;
    overflow: hidden;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    &:hover .item-cursor-inner {
      opacity: 1;
    }

    .img-item {
      overflow: hidden;
      margin-bottom: 1rem;
      height: 60vh;
      width: auto;

      img {
        object-fit: contain;
        animation: scrollDown 8s infinite linear;
        width: 100%;
        vertical-align: middle;
      }
    }
  }

  .item-cursor-inner {
    z-index: 1;
    position: absolute;
    top: 27vh;
    left: 50%;
    transform: translateX(-50%);
    color: #bec844;
    animation: bounce 1s infinite;
    opacity: 0;
  }

  .img-item-gif {
    margin: 0 auto;
    width: 50%;
    height: auto;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .skill-wrap {
    width: 100%;
  }

  .skill-wrap span {
    display: inline-block;
    background: #4a4a4a;
    padding: 6px 13px;
    border-radius: 4px;
    text-transform: capitalize;
    word-break: keep-all;
    font-size: 11px;
    margin-right: 6px;
    color: #e1e1e1;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .sub-icon {
    display: inline-block;
    margin-right: 0.5rem;
  }

  .go-project {
    background-color: #3f566e;
    height: 60px;
    position: absolute;
    width: 100%;
    left: 0px;
    padding: 17px;
    color: rgb(255, 255, 255);
    font-weight: 600;
    text-align: center;
    margin-top: 4rem;

    svg {
      width: 16px;
      vertical-align: bottom;
      margin-left: 6px;
      fill: rgb(255, 255, 255);
    }
  }

  @media (max-width: 768px) {
    .container {
      height: 92.5vh;
      width: 85%;
    }
    .content-wrap {
      flex-direction: column;

      .content-text {
        gap: 1.5rem;
      }
      .content-img {
        width: 100%;
      }
    }

    .img-item-gif {
      width: 80%;
    }
  }
`;
