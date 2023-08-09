import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  return (
    <div className="font-secondary">
      <header className="py-5 mb-20">
        <div className="container flex items-center justify-between">
          {/* logo */}
          <p className="font-cursive text-3xl font-bold">naseem</p>
          <div className="flex items-center">
            {/* available */}
            <p className="w-36 mr-10">Open for any jobs and collaborations</p>

            <div className="flex items-center gap-5 border-4 border-primary p-1 rounded-full">
              {/* menu */}
              <ul className="flex">
                <li className="flex-1">
                  <a
                    href="#"
                    className="px-8 py-2">
                    Projects
                  </a>
                </li>
                <li className="flex-1">
                  <a
                    href="#"
                    className="px-8 py-2">
                    About
                  </a>
                </li>
                <li className="flex-1">
                  <a
                    href="#"
                    className="px-8 py-2">
                    Contact
                  </a>
                </li>
              </ul>

              {/* cta */}
              <Button
                variant="highlight"
                size="lg">
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="mb-20">
        <div className="container">
          <p className="float-left w-44 uppercase font-semibold font-primary text-sm pr-5">
            Over 2 years of hard learned experience in javascript
          </p>

          <h1 className="text-8xl uppercase font-semibold">
            I'm a developer who knows Javascript{" "}
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
                <div className="aspect-video rounded-lg bg-red-600 relative">
                  <div className="absolute w-full h-full top-0 left-0 p-5 flex flex-col justify-end">
                    <p className="text-primary-foreground uppercase text-2xl font-primary">
                      Name of project 1
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-l-2 border-primary"></div>
              {/* second */}
              <div className=" flex-1 p-3 pr-0">
                <div className="aspect-video rounded-lg bg-red-600 relative">
                  <div className="absolute w-full h-full top-0 left-0 p-5 flex flex-col justify-end">
                    <p className="text-primary-foreground uppercase text-2xl font-primary">
                      Name of project 2
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* second col */}
            <div className="flex">
              {/* third */}
              <div className="flex-1 p-3 pl-0">
                <div className="aspect-video rounded-lg bg-red-600 relative">
                  <div className="absolute w-full h-full top-0 left-0 p-5 flex flex-col justify-end">
                    <p className="text-primary-foreground uppercase text-2xl font-primary">
                      Name of project 3
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-l-2 border-primary"></div>
              {/* last */}
              <div className="flex-1 p-3 pr-0">
                <div className="aspect-video rounded-lg bg-red-600 relative">
                  <div className="absolute w-full h-full top-0 left-0 p-5 flex flex-col justify-end">
                    <p className="text-primary-foreground uppercase text-2xl font-primary">
                      Name of project 4
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center py-6">
            <Button
              variant="wide"
              size="xl">
              See more projects
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
                  className="bg-primary-foreground border-2 border-primary shadow-md rounded-lg px-20 py-5 flex">
                  <h4 className="uppercase font-semibold text-2xl">
                    {skill.name}
                  </h4>
                  {/* skills */}
                  <div className="ml-auto">
                    <div className=" w-80 gap-2 flex flex-wrap">
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
              variant="wideInvert"
              size="xl">
              More about me
            </Button>
          </div>
        </div>
      </section>

      {/* hire me slide */}
      <div className="overflow-hidden">
        <div className=" flex gap-10 bg-foreground text-background text-9xl uppercase font-primary">
          {Array(50)
            .fill(0)
            .map((_, idx) => {
              return (
                <p
                  key={idx}
                  className="flex-shrink-0 ">
                  Hire me
                </p>
              );
            })}
        </div>
      </div>

      {/* footer */}
      <footer>
        <div className="container">
          <p>Open for any offers and jobs</p>

          {/* social icons */}
          <ul>
            <li>fb</li>
            <li>ln</li>
            <li>git</li>
          </ul>

          <button>send me email</button>
        </div>

        {/* copyright */}
        <div className="container">copyright by naseem</div>
      </footer>
    </div>
  );
};
export default ProfilePage;
