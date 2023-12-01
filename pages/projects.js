import React from "react";
import PageBanner from "../components/Common/PageBanner";
import ProjectsCard from "../components/Projects/ProjectsCard";

const Projects = () => {
  return (
    <>
      <PageBanner
        pageTitle="Projects"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Projects"
        bgImgClass="item-bg1"
      />

      <ProjectsCard />
    </>
  );
};

export default Projects;
