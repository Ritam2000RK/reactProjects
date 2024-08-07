import React from "react";
import { useState, useEffect } from "react";

function ScrollTracker() {
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll() {
    setScrollPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollPosition);

  return (
    <>
      <h1>Scroll Position is: {scrollPosition}</h1>
      <div className="">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem,
          commodi in ratione dolores voluptate? Necessitatibus non qui nisi
          molestias voluptates iusto similique, doloremque in ipsum quis!
          Adipisci, architecto vitae!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          laudantium. Optio fugit nemo cupiditate earum sapiente facilis, hic
          inventore fuga dolorem harum totam illo maxime soluta id.
          Consequuntur, placeat voluptates?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
          commodi consequuntur molestiae sed natus optio voluptatem sapiente, at
          itaque sequi, architecto earum dolorum sit vel rem nemo doloremque,
          iste assumenda?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          consequatur! Eveniet cupiditate molestiae, quae quidem nulla in, animi
          doloribus quisquam adipisci neque itaque eaque esse necessitatibus
          perspiciatis dicta aliquam! A!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          quas inventore commodi quasi vel ipsa molestiae dicta in voluptates,
          eveniet possimus ut cumque rem sapiente aut, eaque consectetur ratione
          dignissimos!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          impedit consequuntur quod rem magnam eligendi ex temporibus tempora
          iste, illo labore officia, praesentium perferendis! Molestias esse
          quae corrupti maiores ea?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          soluta eos consectetur voluptates molestias maxime sapiente culpa
          iusto, rem ullam aspernatur sequi impedit deleniti, architecto laborum
          quibusdam quis et excepturi.
        </p>
      </div>
    </>
  );
}

export default ScrollTracker;
