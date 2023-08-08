import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TbChevronRight, TbMenu } from "react-icons/tb";
import MyPhoto from "@/assets/PersonalPhoto.webp";
import Menu from "@/ui/Menu";
const Homepage = () => {
  return (
    <div>
      {/* header */}
      <header className="bg-background shadow-md">
        <div className="container">
          {/* <div className="text-center py-2">
            <p className="text-xl font-primary lowercase">
              _n
              <span className="text-[1.8em] font-bold  text-accent">@</span>
              seem
            </p>
          </div> */}
          <div className="flex items-center py-2">
            <div className="mr-auto">
              <Menu />
            </div>

            <div className=" text-center py-2">
              <p className="text-xl font-primary lowercase">
                _n
                <span className="text-[1.8em] font-bold  text-accent">@</span>
                seem
              </p>
            </div>

            <div className="ml-auto">
              <Button variant="highlight">Let's chat</Button>
            </div>
          </div>
        </div>
      </header>

      {/* main */}
      <main className="font-secondary flex flex-col md:container md:px-16">
        {/* left side */}
        <div className="flex-1 flex flex-col md:flex-row">
          <section className="pt-10 h-full flex-1">
            <div className="container md:pl-0">
              <h1 className="py-5 text-7xl font-extrabold">
                Hi! I am Ashfaq Naseem
              </h1>

              <p className="text-xl">
                Creating functional websites using NextJs, React, Vue and
                html/css for over <span className="font-bold">2 years</span>
              </p>

              {/* cta division */}
              <div className="flex items-center gap-10 py-10">
                <Button variant="highlight">Hire me</Button>
                <Link
                  href="#"
                  className="group inline-flex flex-col font-bold">
                  <div className="mb-1 inline-flex items-center font-bold">
                    My projects
                    <span className="pl-2 group-hover:pl-4 text-xl flex items-center justify-center">
                      <TbChevronRight />
                    </span>
                  </div>
                  <div className="h-[2px] w-[90%] bg-primary"></div>
                </Link>
              </div>

              <div className="py-10">
                <p className="font-bold text-2xl">+20</p>
                <p className="text-lg">Clients or work done</p>
              </div>

              <div className="py-10">
                <p className="font-bold text-2xl">572</p>
                <p className="text-lg">Projects Done</p>
              </div>
            </div>
          </section>

          {/* profile section */}
          <section className="pt-10 bg-accent text-accent-foreground md:flex-1 flex h-screen md:h-auto">
            <div className="container flex flex-col">
              <h2 className="py-10 w-1/2 mx-auto text-3xl text-center">
                Create your site with me in{" "}
                <span className="font-bold">React</span>{" "}
                <span className="font-bold">NextJs</span> or{" "}
                <span className="font-bold">Vue</span>
              </h2>

              <div
                className="flex h-full justify-center  bg-no-repeat bg-contain bg-center"
                style={{
                  backgroundImage: `url(${MyPhoto})`,
                }}>
                {/* <img
                className=""
                src={MyPhoto}
                alt=""
              /> */}
              </div>
            </div>
          </section>
        </div>

        {/* statistics section */}
        <section className="bg-primary">
          <div className="container flex py-10 ">
            <div className="flex-1 flex flex-col justify-center ">
              <h2 className="text-xl font-bold text-primary-foreground">
                Project Statistics 2023
              </h2>
              <div>
                <Button>Know More</Button>
              </div>
            </div>
            <div className="flex-1">
              {/* accordio 1 */}
              <div>
                <Accordion
                  type="single"
                  collapsible>
                  <AccordionItem
                    value="item-1"
                    className="text-primary-foreground">
                    <AccordionTrigger className="py-2">
                      Website Design
                    </AccordionTrigger>
                    <AccordionContent>Some content goes here</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              {/* accordio 2 */}
              <div>
                <Accordion
                  type="single"
                  collapsible>
                  <AccordionItem
                    value="item-2"
                    className="text-primary-foreground">
                    <AccordionTrigger className="py-2">
                      UI/UX design
                    </AccordionTrigger>
                    <AccordionContent>Some content goes here</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              {/* accordio 3 */}
              <div>
                <Accordion
                  type="single"
                  collapsible>
                  <AccordionItem
                    value="item-3"
                    className="text-primary-foreground">
                    <AccordionTrigger className="py-2">
                      Brand logo designs
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, it adheres to the golden ratio desing pattern
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
    </div>
  );
};

export default Homepage;
