import React, { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const linksAndButtons = document.querySelectorAll("a, button");
    const cursorText = document.querySelector(".cursor-text");
    const cursorTextGo = document.querySelector(".cursor-text-go");
    const cursorTextClick = document.querySelector(".cursor-text-click");
    const cursorTextNext = document.querySelector(".cursor-text-next");

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY });
    };

    const onMouseEnterElement = (event) => {
      const element = event.target;
      if (element.classList.contains("view")) {
        gsap.to(cursor, { scale: 4 });
        if (cursorText) {
          cursorText.style.display = "block";
        }
      } else if (element.classList.contains("go")) {
        gsap.to(cursor, { scale: 4 });
        if (cursorTextGo) {
          cursorTextGo.style.display = "block";
        }
      } else if (element.classList.contains("click")) {
        gsap.to(cursor, { scale: 4 });
        if (cursorTextClick) {
          cursorTextClick.style.display = "block";
        }
      } else if (element.classList.contains("next")) {
        gsap.to(cursor, { scale: 4 });
        if (cursorTextNext) {
          cursorTextNext.style.display = "block";
        }
      } else {
        gsap.to(cursor, { scale: 4 });
      }
    };

    const onMouseLeaveElement = () => {
      gsap.to(cursor, { scale: 1 });
      if (cursorText) {
        cursorText.style.display = "none";
      }
      if (cursorTextGo) {
        cursorTextGo.style.display = "none";
      }
      if (cursorTextClick) {
        cursorTextClick.style.display = "none";
      }
      if (cursorTextNext) {
        cursorTextNext.style.display = "none";
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    linksAndButtons.forEach((element) => {
      element.addEventListener("mouseenter", onMouseEnterElement);
      element.addEventListener("mouseleave", onMouseLeaveElement);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      linksAndButtons.forEach((element) => {
        element.removeEventListener("mouseenter", onMouseEnterElement);
        element.removeEventListener("mouseleave", onMouseLeaveElement);
      });
    };
  }, []);

  return (
    <>
      <div id="custom-cursor" className="custom-cursor !hidden md:!flex">
        <span className="cursor-text">View</span>
        <span className="cursor-text-go">Go</span>
        <span className="cursor-text-click">Click</span>
        <span className="cursor-text-next">Next Page</span>
      </div>
    </>
  );
};

export default Cursor;
