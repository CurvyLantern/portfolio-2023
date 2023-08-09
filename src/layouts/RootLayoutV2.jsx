import { Outlet, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  TbBrandFacebook,
  TbBrandGithub,
  TbBrandLinkedin,
} from "react-icons/tb";
import HireMe from "@/components/special/HireMe";
const RootLayoutV2 = () => {
  const menu_links = [
    {
      name: "Projects",
      href: "projects",
    },
    {
      name: "About",
      href: "about-me",
    },
    {
      name: "Contact",
      href: "contact",
    },
  ];
  const social_links = [
    {
      name: "fb",
      fullName: "Facebook",
      icon: TbBrandFacebook,
      href: "",
    },
    {
      name: "ln",
      fullName: "Linkedin",
      icon: TbBrandLinkedin,
      href: "",
    },
    {
      name: "git",
      fullName: "Github",
      icon: TbBrandGithub,
      href: "",
    },
  ];
  return (
    <div className="font-secondary">
      <header className="py-5 mb-20">
        <div className="container flex items-center justify-between">
          {/* logo */}
          <Link to={"/"}>
            <p className="font-cursive text-3xl font-bold">naseem</p>
          </Link>
          <div className="flex items-center">
            {/* available */}
            <p className="w-36 mr-10">Open for any jobs and collaborations</p>

            <div className="flex items-center gap-5 border-4 border-primary px-2 rounded-full py-1">
              {/* menu */}
              <ul className="flex">
                {menu_links.map((menu, menuIdx) => (
                  <li
                    key={menuIdx}
                    className="flex-1 rounded-full hover:shadow-md  hover:text-accent transition-colors">
                    <Link
                      to={menu.href ? menu.href : "#"}
                      className="block px-8 py-3 ">
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* cta */}
              <HireMe socialLinks={social_links} />
            </div>
          </div>
        </div>
      </header>

      <Outlet />

      {/* footer */}
      <footer className="bg-foreground text-background">
        <div className="container flex justify-between items-center py-40">
          <p className=" mr-10 font-primary">Open for any jobs and offers</p>

          {/* social icons */}
          <ul className="flex gap-5">
            {social_links.map((social, socialIndex) => {
              return (
                <li key={socialIndex}>
                  <a
                    href={social.href ? social.href : "#"}
                    className="transition-colors w-14 h-14 rounded-full border-2 border-background flex items-center justify-center hover:bg-background hover:text-foreground hover:border-foreground"
                    aria-name={social.name}>
                    {social.icon ? (
                      <social.icon className="w-6 h-6" />
                    ) : social.name ? (
                      social.name
                    ) : (
                      "brand"
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <Button
            size="xl"
            variant="wide"
            className="">
            send me email
          </Button>
        </div>

        {/* copyright */}
        <div className="container text-sm text-opacity-25 text-background text-center py-5">
          copyright by naseem
        </div>
      </footer>
    </div>
  );
};
export default RootLayoutV2;
