import React, { useState, useEffect } from "react";

import projectsData from "../data/projectData";

import * as styled from "../styledComp/ProjectStyled";

//폰트어썸 라이브러리
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleLeft,
  faEarthAmericas,
  faArrowPointer,
  faExternalLink,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project() {
  const [modalOpen, setModalOpen] = useState(false);
  const [project, setProject] = useState(null);
  // eslint-disable-next-line
  const [isScrolled, setIsScrolled] = useState(false);

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

  const handleContentItemClick = (project) => {
    setModalOpen(!modalOpen);
    setProject(project);
    // console.log(project.id);
  };

  const handleCloseButtonClick = () => {
    setModalOpen(false);
  };

  const sections = document.querySelectorAll("section");
  const menus = document.querySelectorAll("nav > ul > li");

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

    menus.forEach((menu) => {
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

  return (
    <>
      <styled.Projects id="project">
        <h1 className="sub-text">Projects.</h1>
        <div className="content-Tab">
          {projectsData.map((clickedProject) => (
            <div
              className="content-item"
              onClick={() => handleContentItemClick(clickedProject)}
              key={clickedProject.id}
            >
              <div className="item-img">
                <img src={`${clickedProject.img}`} alt={clickedProject.img} />
              </div>
              <div className="item-info">
                <h3>{clickedProject.title}</h3>
                <p>{clickedProject.sub}</p>
                <p className="skill-wrap">
                  {clickedProject.modal &&
                    clickedProject.modal[0] &&
                    clickedProject.modal[0].skills.map((skill, skillIndex) => (
                      <span className="skill-item" key={skillIndex}>
                        {skill}
                      </span>
                    ))}
                </p>
              </div>
              <div className="item-cursor">
                <FontAwesomeIcon icon={faArrowPointer} size="xl" />
              </div>
            </div>
          ))}
        </div>
      </styled.Projects>
      {project && (
        <ModalItem
          project={project}
          modalOpen={modalOpen}
          handleCloseButtonClick={handleCloseButtonClick}
        />
      )}
    </>
  );
}
const ModalItem = ({ project, modalOpen, handleCloseButtonClick }) => (
  <>
    <styled.ModalOverlay
      modalOpen={modalOpen}
      onClick={handleCloseButtonClick}
    />
    <styled.Modal modalOpen={modalOpen}>
      <div className="container">
        {project.modal.map((modalData, index) => (
          <div key={index}>
            <FontAwesomeIcon
              icon={faCircleLeft}
              size="2x"
              style={{ color: "#4d586a" }}
              onClick={handleCloseButtonClick}
            />
            <div className="modal-content">
              <h2>{project.title}</h2>
              <div className="content-wrap">
                <div className="content-text">
                  <div className="text-wrap">
                    {modalData.info.map((info, index) => (
                      <p
                        key={index}
                        className="info"
                        dangerouslySetInnerHTML={{ __html: info }}
                      />
                    ))}
                  </div>
                  <div className="text-wrap">
                    <p className="sub">사용된 기술</p>
                    <div className="skill-wrap">
                      {modalData.skills.map((skill, skillIndex) => (
                        <span key={skillIndex}>{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-wrap">
                    <p className="sub">
                      <FontAwesomeIcon
                        icon={faEarthAmericas}
                        size="1x"
                        style={{ color: "#a9b2c1" }}
                      />
                      Website
                    </p>
                    <a
                      href={modalData.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p>{modalData.website}</p>
                    </a>
                  </div>
                  <div className="text-wrap">
                    <p className="sub">
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="1x"
                        style={{ color: "#9da5b4" }}
                      />
                      GitHub
                    </p>
                    <a
                      href={modalData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p>{modalData.github}</p>
                    </a>
                  </div>
                </div>
                <div className="content-img">
                  <a
                    href={modalData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {modalData.img && modalData.img.length > 0
                      ? modalData.img.map((img, imgIndex) => (
                          <div key={imgIndex} className="img-item">
                            <img src={`${img}`} alt="" />
                          </div>
                        ))
                      : null}
                    {modalData.gif && modalData.gif.length > 0
                      ? modalData.gif.map((gif, gifIndex) => (
                          <div key={gifIndex} className="img-item-gif">
                            <img src={`${gif}`} alt="" />
                          </div>
                        ))
                      : null}
                    <div className="item-cursor-inner">
                      <FontAwesomeIcon icon={faExternalLink} size="xl" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </styled.Modal>
  </>
);

export default Project;
