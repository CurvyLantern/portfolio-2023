import { Button } from "@/components/ui/button";
import styles from "@/styles/marquee.module.css";
import HangingPng from "@/assets/hanging.png";
import CreativePng from "@/assets/creativity.png";
import BeCreativePng from "@/assets/be-creative.png";
import LearingPng from "@/assets/learning.png";
import Marquee from "@/components/sections/Marquee";
import { Heading1 } from "@/components/special/Typography";
const AboutPage = () => {
  return (
    <div className="font-secondary">
      {/* hero */}
      <section className="mb-20">
        <div className="container">
          <Heading1 className="lg:text-center">Hi there , I'm Naseem</Heading1>
        </div>
      </section>

      {/* I can help you with */}
      <article className="mb-20">
        <div className="container">
          <h2 className="text-6xl uppercase font-semibold py-5">
            I can Help you with
          </h2>

          {/* content */}
          <div className="border-t-2 border-primary grid grid-cols-1 lg:grid-cols-2 gap-10 ">
            {/* left side */}
            <div className="py-10 flex flex-col">
              <p className="order-2 md:order-[0] font-primary">
                Searching through the internet , researching about new ways to
                get the job done and making performant codes more performant is
                what gets me going 💪{" "}
              </p>

              {/* creative img */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={CreativePng}
                  alt=""
                />
              </div>
            </div>

            {/* right side */}
            <div className="">
              {/* frontend */}
              <article className="flex py-10 border-b-2 border-primary">
                <div></div>
                <div>
                  <h4 className="pb-5 text-3xl font-primary uppercase font-semibold">
                    Frontend developer
                  </h4>
                  <p className="w-2/3">
                    I love to make websites look good or at least try as much as
                    I can 😐. Designing sites is a hard job and that's why I
                    love to code. Facing new challenges everyday , learning
                    about new js frameworks every other day keeps me going.
                  </p>

                  <ul className="ml-4 p-4 flex flex-col gap-2 text-xl uppercase list-disc">
                    <li>Next Js</li>
                    <li>React</li>
                    <li>Vue</li>
                    <li>Vanilla Js</li>
                    <li>Three Js</li>
                    <li>Tailwind , scss , css3</li>
                    <li>Html5</li>
                  </ul>
                </div>
              </article>

              {/* backend */}
              <article className="py-10">
                <h4 className="pb-5 text-3xl font-primary uppercase font-semibold">
                  Backend developer
                </h4>
                <p className="w-2/3">
                  I don't have vast knowledge about backend but I am learning
                  new things everyday. I can use node js as a backend server and
                  now that there are frameworks like NextJs , backend has become
                  somewhat easier I think.
                </p>

                <ul className="ml-4 p-4 flex flex-col gap-2 text-xl uppercase list-disc">
                  <li>Node Js</li>
                  <li>Express</li>
                  <li>Fastify</li>
                  <li>Next Js</li>
                  <li>Authentication</li>
                </ul>
              </article>

              {/* database */}
              <article className="py-10">
                <h4 className="pb-5 text-3xl font-primary uppercase font-semibold">
                  Databases
                </h4>
                <p className="w-2/3">
                  Now here's the real deal. Dealing with databases is hard.But I
                  can get stuff going
                </p>

                <ul className="ml-4 p-4 flex flex-col gap-2 text-xl uppercase list-disc">
                  <li>MongoDB</li>
                  <li>Sql (using Prisma ORM)</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </article>

      {/* Experience */}

      {/* Hobbies */}
      <div className="bg-foreground text-background py-32">
        <div className="flex items-center justify-center">
          <div className="w-[300px] h-[300px]">
            <img
              width={300}
              height={300}
              className="w-full object-contain"
              src={LearingPng}
              alt=""
            />
          </div>
        </div>

        <p className="leading-normal font-primary text-xl xsm:text-2xl md:text-4xl w-2/3 text-center mx-auto py-20">
          During my idle time, I like to research about various things. For
          example, "what a blackhole is". I watch anime, movies and play
          videogames. I love to cook.Whenever I get a chance I cook whatever
          comes to mind :V
        </p>

        <div className="flex items-center justify-center">
          <div className="w-[300px] h-[300px]">
            <img
              width={300}
              height={300}
              className="w-full object-contain"
              src={BeCreativePng}
              alt=""
            />
          </div>
        </div>
      </div>

      <Marquee text="Let's talk" />
    </div>
  );
};
export default AboutPage;
