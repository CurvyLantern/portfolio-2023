import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import styles from "@/styles/marquee.module.css";
import Project1 from "@/assets/project1.png";
import Project2 from "@/assets/project2.png";
import Project3 from "@/assets/project3.png";
import Project4 from "@/assets/project4.png";
import { Link } from "react-router-dom";
import Marquee from "@/components/sections/Marquee";
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

  return (
    <div className="font-secondary">
      {/* hero */}
      <section className="mb-20">
        <div className="container">
          <p className="float-left w-44 uppercase font-semibold font-primary text-sm pr-5">
            Over 2 years of hard learned experience in javascript
          </p>

          <h1 className="text-right text-8xl uppercase font-semibold">
            I'm a developer who knows how to write Javascript{" "}
          </h1>
        </div>
      </section>

      {/* selected products */}
      <section className="mb-20">
        <div className="container">
          <h2 className="text-6xl uppercase font-semibold py-5">My projects</h2>

          {/* projects showcase */}
          <div className="border-y-2 border-primary">
            {/* first col */}
            <div className="flex border-b-2 border-primary">
              {/* first */}
              <div className=" flex-1 p-3 pl-0">
                <Link to={projects.first.href}>
                  <div className="aspect-video rounded-lg overflow-hidden relative flex">
                    <div className="w-full h-full  relative flex items-center justify-center">
                      <img
                        className="w-full h-full object-cover"
                        src={projects.first.img}
                        alt=""
                      />
                    </div>
                    <div className="absolute w-full h-full top-0 left-0  flex flex-col justify-end">
                      <p className="text-primary-foreground bg-foreground bg-opacity-50 p-5 uppercase text-2xl font-primary backdrop-blur-md">
                        <span className="font-bold">{projects.first.name}</span>{" "}
                        - {projects.first.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="border-l-2 border-primary"></div>
              {/* second */}
              <div className=" flex-1 p-3 pr-0">
                <Link to={projects.second.href}>
                  <div className="aspect-video rounded-lg overflow-hidden  relative">
                    <div className="w-full h-full  relative flex items-center justify-center">
                      <img
                        className="w-full h-full  object-cover"
                        src={projects.second.img}
                        alt=""
                      />
                    </div>
                    <div className="absolute w-full h-full top-0 left-0  flex flex-col justify-end">
                      <p className="text-primary-foreground bg-foreground bg-opacity-50 p-5 uppercase text-2xl font-primary backdrop-blur-md">
                        <span className="font-bold">
                          {projects.second.name}
                        </span>{" "}
                        - {projects.second.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* second col */}
            <div className="flex">
              {/* third */}
              <div className="flex-1 p-3 pl-0">
                <Link to={projects.third.href}>
                  <div className="aspect-video rounded-lg overflow-hidden  relative">
                    <div className="w-full h-full  relative flex items-center justify-center">
                      <img
                        className="w-full  h-full object-cover"
                        src={projects.third.img}
                        alt=""
                      />
                    </div>
                    <div className="absolute w-full h-full top-0 left-0  flex flex-col justify-end">
                      <p className="text-primary-foreground bg-foreground bg-opacity-50 p-5 uppercase text-2xl font-primary backdrop-blur-md">
                        <span className="font-bold">{projects.third.name}</span>{" "}
                        - {projects.third.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="border-l-2 border-primary"></div>
              {/* last */}
              <div className="flex-1 p-3 pr-0">
                <Link to={projects.four.href}>
                  <div className="aspect-video rounded-lg overflow-hidden bg-red-600 relative">
                    <div className="w-full h-full  relative flex items-center justify-center">
                      <img
                        className="w-full  h-full object-cover"
                        src={projects.four.img}
                        alt=""
                      />
                    </div>
                    <div className="absolute w-full h-full top-0 left-0  flex flex-col justify-end">
                      <p className="text-primary-foreground bg-foreground bg-opacity-50 p-5 uppercase text-2xl font-primary backdrop-blur-md">
                        <span>{projects.four.name}</span> - {projects.four.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
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
      <section>
        <h2 className="container text-6xl uppercase font-semibold py-5">
          My skills
        </h2>
        <div className="bg-foreground py-10">
          <div className="container grid auto-rows-fr py-10 ">
            {skills.map((skill, skillIdx) => {
              return (
                <div
                  key={skillIdx}
                  className="bg-primary-foreground border-2 border-primary shadow-md rounded-lg px-20 py-5 flex items-center">
                  <h4 className="uppercase font-semibold text-2xl">
                    {skill.name}
                  </h4>
                  {/* skills */}
                  <div className="ml-auto flex items-center justify-center">
                    <div className=" w-80 gap-2 flex flex-wrap ">
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
          <div className="container flex items-center justify-center">
            <Button
              aschild
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
export default ProfilePage;
