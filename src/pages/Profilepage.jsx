import Project1 from "@/assets/project1.png";
import Project2 from "@/assets/project2.png";
import Project3 from "@/assets/project3.png";
import Project4 from "@/assets/project4.png";
import Marquee from "@/components/sections/Marquee";
import { Heading1, Heading2 } from "@/components/special/Typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useWindowScroll } from "react-use";

const skewCorrection = (deg, height) =>
  Math.tan((deg * Math.PI) / 180) * height;

const skewDifferece = (deg, width) => Math.tan((deg * Math.PI) / 180) * width;
const mapper = (val, x, y) => {
  const min = Math.min(x, y);
  const max = Math.max(x, y);
  return (val - min) / (max - min);
};
const ProfilePage = () => {
  const skills = [
    {
      name: "frontend",
      skillNames: [
        "Landing Page",
        "Design to code",
        "Pixel perfect",
        "Performant",
        "Clean Code",
        "Portfolio websites",
        "E-commerce",
        "Blog sites",
      ],
      rotation: 3,
    },
    {
      name: "backend",
      skillNames: [
        "rest api",
        "authentication",
        "Next js",
        "Node js",
        "Database operations",
      ],
      rotation: -3,
    },
    {
      name: "database",
      skillNames: ["MongoDb", "Prisma ORM", "Firebase"],
      rotation: 4,
    },
  ];

  const projects = {
    first: {
      name: "Rongberong",
      desc: "Color palette finder and generator",
      img: Project1,
      href: "https://rongberong.vercel.app/",
    },
    second: {
      name: "Muvitime",
      desc: "Screen sharing and video calling",
      img: Project2,
      href: "https://muvitime.vercel.app/",
    },
    third: {
      name: "Satlight",
      desc: "Track every sattelights out there",
      img: Project3,
      href: "https://satlight.vercel.app/",
    },
    four: {
      name: "Kano",
      desc: "Furniture for you and your next genreation",
      img: Project4,
      href: "https://kano-furniture.vercel.app/",
    },
  };

  // const scrollEl = useRef(null);
  // const carRef = useRef(null);
  // const groundRef = useRef(null);
  // const { x: scrollX, y: scrollY } = useWindowScroll();
  // const [top, setTop] = useState(0);
  // const [bottom, setBottom] = useState(0);
  // useEffect(() => {
  //   const dx = mapper(scrollY, 0, bottom);
  //   const prcnt = Math.min(dx * 100, 110);
  //   carRef.current.style.setProperty("--off-dist", `${prcnt}%`);
  // });

  // useEffect(() => {
  //   const bounds = groundRef.current.getBoundingClientRect();
  //   const diff = skewDifferece(6, bounds.width);
  //   const minBottom = bounds.top + diff - 200;
  //   setBottom(minBottom);
  // }, []);

  return (
    <div className="font-secondary relative">
      {/* hero */}

      <section className="mb-40">
        <div className="container">
          <p className="float-left w-44 uppercase font-semibold font-primary text-sm pr-5 pb-5">
            Over 2 years of hard learned experience in javascript
          </p>

          <Heading1>
            I'm a developer who knows how to write Javascript{" "}
          </Heading1>
        </div>
      </section>

      {/* selected products */}
      <section className="mb-40">
        <div className="">
          <div className="container">
            <Heading2>My projects</Heading2>
          </div>

          {/* projects showcase */}
          {/* "mx-2 py-3 border-y-2 border-primary flex flex-col md:flex-row gap-10 md:gap-3" */}
          <div className="md:container mx-2 flex flex-col  gap-10 md:gap-0">
            {/* first col */}
            <ProjectColumn className="border-t-2 border-primary">
              {/* first */}
              <div className=" flex-1  md:p-3 md:pl-0  ">
                <ProjectCard project={projects.first} />
              </div>
              <div className="border-l-2 border-primary"></div>
              {/* second */}
              <div className=" flex-1 md:p-3 md:pr-0">
                <ProjectCard project={projects.second} />
              </div>
            </ProjectColumn>

            {/* second col */}
            <ProjectColumn className="md:border-b-2 border-primary">
              {/* third */}
              <div className="flex-1 md:p-3 md:pl-0">
                <ProjectCard project={projects.third} />
              </div>
              <div className="border-l-2 border-primary"></div>
              {/* last */}
              <div className="flex-1 md:p-3 md:pr-0">
                <ProjectCard project={projects.four} />
              </div>
            </ProjectColumn>
          </div>
          <div className="flex items-center justify-center py-6">
            <Button
              variant="wide"
              size="xl">
              <Link to="/projects">See more projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* what I do */}
      <section className="pt-40">
        <div className="bg-foreground text-background pt-20 pb-40 origin-top-right -skew-y-[4deg] ">
          <div className="container pb-11">
            <Heading2>My skills</Heading2>
          </div>
        </div>
        <div className="bg-foreground py-10 ">
          <div className="container grid gap-10 auto-rows-fr py-10 ">
            {skills.map((skill, skillIdx) => {
              return (
                <div
                  style={{
                    rotate: `${skill.rotation}deg`,
                    transformOrigin: "center",
                  }}
                  key={skillIdx}
                  className={cn(
                    "bg-primary-foreground border-2 border-primary shadow-md rounded-lg md:px-20 py-5 flex flex-col gap-10 md:flex-row items-center"
                  )}>
                  <h4 className="uppercase font-semibold text-2xl">
                    {skill.name}
                  </h4>
                  {/* skills */}
                  <div
                    className={cn("ml-auto flex items-center justify-center")}>
                    <div className=" md:w-80 gap-2 flex flex-wrap justify-evenly ">
                      {skill.skillNames.map((skillName, skillNameIdx) => {
                        return (
                          <Badge
                            className="flex-grow-0"
                            size="lg"
                            variant={"outline"}
                            key={skillNameIdx}>
                            {skillName}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="container py-20 flex items-center justify-center">
            <Button
              asChild
              variant="wideInvert"
              size="xl">
              <Link to="/about-me">More about me</Link>
            </Button>
          </div>
        </div>
      </section>

      <Marquee text="Hire me" />
    </div>
  );
};

const ProjectCard = ({ className, project }) => {
  return (
    <Link to={project.href}>
      <div className="bg-foreground aspect-square md:aspect-video rounded-lg overflow-hidden relative flex">
        <div className="w-full h-full  relative flex items-center justify-center">
          <img
            className="w-full h-full object-top object-contain md:object-cover"
            src={project.img}
            alt=""
          />
        </div>
        <div className="absolute w-full h-full top-0 left-0  flex flex-col justify-end">
          <p className="text-primary-foreground bg-foreground bg-opacity-50 p-5 uppercase text-2xl font-primary backdrop-blur-md">
            <span className="font-bold">{project.name}</span>{" "}
            <span className="hidden md:inline-block">- {project.desc}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

const ProjectColumn = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex md:flex-row flex-col gap-5 md:gap-0 md:border-b-2 border-primary",
        className
      )}>
      {children}
    </div>
  );
};
export default ProfilePage;
