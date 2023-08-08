import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TbMenu } from "react-icons/tb";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Menu = () => {
  const [menuPressed, setMenuPressed] = useState(false);
  const onMenuBtnPress = () => {
    setMenuPressed((cur) => !cur);
  };
  return (
    <div className="relative">
      {/* <ul
        className="hidden md:flex gap-5 font-secondary font-light tracking-wider uppercase 
  text-sm text-foreground">
        <li className="hover:text-accent">
          <Link href="#">My Works</Link>
        </li>
        <li>About Me</li>
        <li>Projects</li>
        <li>Blog</li>
      </ul> */}

      <Dialog className="">
        <DialogTrigger asChild>
          <Button
            className=""
            variant="ghost"
            size="icon"
            onClick={onMenuBtnPress}>
            <TbMenu />
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0 bg-accent text-accent-foreground max-w-none top-0 left-0 translate-x-0 translate-y-0 ">
          <ul
            className=" p-10 flex flex-col gap-10 font-primary font-medium tracking-wider uppercase 
  text-xl ">
            <li className="hover:text-accent">
              <Link href="#">My Works</Link>
            </li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Blog</li>
          </ul>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Menu;
