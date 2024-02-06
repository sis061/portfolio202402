import React, { useState, useEffect } from "react";
import Project from "./Project";

//  ----------스타일드 컴포넌트----------

import * as styled from "../styledComp/MainStyled";

//  ----------Slick Slider----------

import Slider from "react-slick";

// ---------- 폰트어썸 라이브러리 ----------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMobileScreen,
  faEnvelope,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

//-----------------------------------------------------------

export const Main = () => {
  // eslint-disable-next-line
  const [project, setProject] = useState(false);
  // eslint-disable-next-line
  const [isScrolled, setIsScrolled] = useState(false);

  //-----------------------------------------------------------
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //-----------------------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //-----------------------------------------------------------
  const handleTabClick = (index) => {
    const navItems = document.querySelectorAll("nav ul li");
    const sections = document.querySelectorAll("section");

    if (index >= 0 && index <= navItems.length) {
      const target = sections[index];
      const offsetTop = target.offsetTop - 130;

      setProject(true);

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  //-----------------------------------------------------------

  const navItems = document.querySelectorAll("nav ul li");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    // 현재 스크롤이 있는 영역의 id 값을 저장해줄 변수
    let current = "";
    sections.forEach((section) => {
      // 각 section의 top 위치(절대적 위치)
      const offset = +400;
      const sectionTop =
        window.scrollY + section.getBoundingClientRect().top - offset;

      // 누적된 스크롤이 section의 top 위치에 도달했거나 section의 안에 위치할 경우
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((menu) => {
      menu.classList.remove("nav_focused");
      // 메뉴 아이템의 클래스 리스트를 얻기 위해 `className` 사용
      const targetSection = menu.className
        .split(" ")
        .find((cls) => cls !== "nav_focused");
      if (targetSection === current) {
        // 현재 있는 영역의 id와 메뉴의 클래스가 일치할 때
        menu.classList.add("nav_focused");
      }
    });
  });

  // 슬라이더 세팅 --------------------------------------

  const [currentIndex, setCurrentIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    beforeChange: (_, newIndex) => {
      setCurrentIndex(newIndex);
    },
  };

  //-----------------------------------------------------------
  const handleFlicker = (index) => (index === currentIndex ? "active" : "");

  //-----------------------------------------------------------
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 3000);

    return () => clearTimeout(interval);
  }, [isFlipped]);

  const handleImageClick = () => {
    setIsFlipped(!isFlipped);
  };

  //-----------------------------------------------------------
  return (
    <>
      <styled.Header>
        <nav id="nav">
          <div className="img-box">
            <div onClick={scrollToTop}>
              <FontAwesomeIcon
                icon={faHome}
                style={{ color: "#fff", fontSize: "2em" }}
              />
            </div>
          </div>
          <ul>
            <li onClick={() => handleTabClick(1)} className="project">
              Projects
            </li>
            <li className="About" onClick={() => handleTabClick(2)}>
              About
            </li>
            <li className="Resume" onClick={() => {}}>
              <a
                href="https://drive.google.com/file/d/180WAC-x-1eqMyMbK_L2wjtRYyqBQ81UP/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{textDecoration:"none"}}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </styled.Header>
      <styled.Wrap id="wrap">
        <styled.Main>
          <div className="intro-vscode-wrap">
            <div className="intro-vscode-inner">
              <p>
                <span className="--b">const</span>{" "}
                <span className="--p">WhoIAm</span>{" "}
                <span className="--w">=</span>{" "}
                <span className="--y">{"{"} </span>
                <br />
                <span className="--s space5"> "name": </span>"
                <strong>정성우</strong>" <span className="--w">,</span>
                <br />
                <span className="--s space5">"motto": </span>{" "}
                <span className="--b">{"["}</span>
                <br />
                <span className="--w space10">{"{"}</span>
                <br />
                <span className="--s space15">"title": </span> "엉덩이가 무거운
                개발자"<span className="--w">,</span>
                <br />
                <span className="--s space15">"content": </span> "모르는 것은 알
                때까지. 시작한 일은 끝까지."
                <span className={`flicker-item ${handleFlicker(0)}`}></span>
                <br />
                <span className="--w space10">{"},{"}</span>
                <br />
                <span className="--s space15">"title": </span> "두 눈에 불을 켠
                개발자"<span className="--w">,</span>
                <br />
                <span className="--s space15">"content": </span> "새로운 기술과
                지식에 두려움 없이."
                <span className={`flicker-item ${handleFlicker(1)}`}></span>
                <br />
                <span className="--w space10">{"},{"}</span>
                <br />
                <span className="--s space15">"title": </span> "양 팔은 활짝 편
                개발자"<span className="--w">,</span>
                <br />
                <span className="--s space15">"content": </span> "팀원과 함께
                노력하고 성장하는."
                <span className={`flicker-item ${handleFlicker(2)}`}></span>
                <br />
                <span className="--w space10">{"}"}</span>
                <br />
                <span className="--b space5">{"]"}</span>
                <br />
                <span className="--y">{"}"} </span>
              </p>
            </div>
          </div>
          <article>
            <h1 className="intro-text">
              안녕하세요,
              <br />
              <Slider {...settings} style={{ overflow: "hidden" }}>
                <div>
                  엉덩이가 무거운
                  <img
                    className="intro-slider-img"
                    src="/img/main-slider-img01.png"
                    alt="main-slider-img01"
                  />
                </div>
                <div>
                  두 눈에 불을 켠
                  <img
                    className="intro-slider-img"
                    src="/img/main-slider-img02.png"
                    alt="main-slider-img02"
                  />
                </div>
                <div>
                  양 팔은 활짝 편
                  <img
                    className="intro-slider-img"
                    src="/img/main-slider-img03.png"
                    alt="main-slider-img03"
                  />
                </div>
              </Slider>
              프론트엔드 개발자 <br />
              <span className="intro-text-name">정성우</span>입니다.
            </h1>
          </article>
        </styled.Main>
        <Project />
        <styled.About id="About">
          <h1 className="sub-text">About.</h1>
          <div className="About-content">
            <div className="content-first">
              <div className="left-col">
                <div className={`img-box`} onClick={handleImageClick}>
                  <div className={`img-item ${isFlipped ? "flipped" : ""}`}>
                    <div className="front">
                      <img
                        src="/img/profile.jpg"
                        alt=""
                        className="proflie-img"
                      />
                    </div>
                    <div className="back">
                      <img
                        src="/img/profile_back.png"
                        alt=""
                        className="proflie-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-col">
                <h2>정성우</h2>
                <div className="flex-wrap">
                  <div className="name-wrap">
                    <a href="tel:010-9245-0215">
                      <p>
                        <FontAwesomeIcon
                          icon={faMobileScreen}
                          size="lg"
                          style={{ color: "#d6d6d6", marginRight: "0.5rem" }}
                        />
                        010-9245-0215
                      </p>
                    </a>

                    <a href="mailto:sis061@naver.com">
                      <p>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          style={{ color: "#d6d6d6", marginRight: "0.5rem" }}
                        />
                        sis061@naver.com
                      </p>
                    </a>
                    {/* <a
                      className="circle-logo"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://velog.io/@sis061/"
                    >
                      <FontAwesomeIcon
                        icon={faCircle}
                        size="xs"
                        style={{ color: "d6d6d6", marginRight: "0.5rem" }}
                      />
                      <p>https://velog.io/@sis061/</p>
                    </a> */}
                    <a
                      className="circle-logo"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/sis061"
                    >
                      <FontAwesomeIcon
                        icon={faCircle}
                        size="xs"
                        style={{ color: "#d6d6d6", marginRight: "0.5rem" }}
                      />
                      <p>https://github.com/sis061</p>
                    </a>
                  </div>
                  <div className="grid-wrap">
                    <h3 className="title">EDUCATION</h3>
                    <div className="content">
                      <p>
                        EZEN 아카데미 - 프론트엔드 개발 및 실무프로젝트 구현 과정
                        수료
                      </p>
                      <p>단국대학교 광고홍보학과 졸업</p>
                    </div>
                    <h3 className="title">SKILLS</h3>
                    <div className="content">
                      <img src="/img/js-logo.png" alt="" />
                      <img src="/img/html5-logo.png" alt="" />
                      <img src="/img/css3-logo.png" alt="" />
                      <img src="/img/react-logo.png" alt="" />
                      <img src="/img/nodejs-logo.png" alt="" />
                      <img src="/img/jquery-logo.png" alt="" />
                      <img src="/img/ts-logo-512.png" alt="" />
                      <img src="/img/styledComponent-logo.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </styled.About>
      </styled.Wrap>
    </>
  );
};

export default Main;
