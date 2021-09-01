import React from "react";
import Card from "./Card";
// import Home from './Home';

import seo from "../img/SEO.jpg";
import webDevelopment from "../img/web_development.jpg";
import graphics from "../img/Graphics.jpg";
import security from "../img/security.jpg";
import management from "../img/Project_management.jpg";
import marketing from "../img/marketing.jpg";
import privacy from "../img/Privacy.jpg";

const Services = () => {
  const contents = [
    {
      src: seo,
      title: "Search Engine Optimization",
    },
    {
      src: webDevelopment,
      title: "Web Development",
    },
    {
      src: graphics,
      title: "Graphics",
    },
    {
      src: security,
      title: "Security",
    },
    {
      src: management,
      title: "Management",
    },
    {
      src: marketing,
      title: "Marketing",
    },
    {
      src: privacy,
      title: "Privacy",
    },
  ];

  return (
    <div className="container services-section">
      <div className="row gy-4">
        {contents.map((item, index) => {
          return <Card key={index} img={item.src} title={item.title} />;
        })}
      </div>
    </div>
  );
};
export default Services;
