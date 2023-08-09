import Project1 from "@/assets/project1.png";
import Project2 from "@/assets/project2.png";
import Project3 from "@/assets/project3.png";
import Project4 from "@/assets/project4.png";
const ProjectsPage = () => {
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
  const projectArr = Object.values(projects);
  console.log(projectArr);
  return (
    <div className="font-secondary">
      <section className="mb-40">
        <div className="container">
          <h1 className="text-center text-8xl uppercase font-semibold">
            My projects
          </h1>
          <p className="pt-3 text-accent text-center text-xl">
            Here are some of my projects{" "}
          </p>
        </div>
      </section>

      <section className="mb-40">
        <ul className="container flex flex-col gap-5">
          {projectArr.map((project, projectIdx) => {
            return (
              <li
                key={projectIdx}
                className="border-2 border-primary  rounded-lg">
                <a
                  href={project.href}
                  className="p-5 bg-background text-foreground flex gap-10 rounded-lg">
                  <div className="flex flex-2 flex-col">
                    <img
                      className="w-full h-full object-cover rounded-lg"
                      src={project.img}
                      alt=""
                    />
                  </div>

                  <div className="flex-4 text-center flex flex-col items-center justify-center">
                    <h5 className="font-semibold text-2xl uppercase">
                      {project.name}
                    </h5>
                    <p className="font-primary text-lg">{project.desc}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
export default ProjectsPage;
