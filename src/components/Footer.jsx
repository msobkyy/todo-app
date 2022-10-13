import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="flex justify-center items-center text-md bg-gray-200 p-5 dark:bg-secondary-dark dark:text-white">
        Created With <BsFillHeartFill className="mx-2 text-red-400" /> by
        @MSOBKYY <a href="https://github.com/msobkyy"><FaGithubSquare size={30} className="mx-4 "/></a>
      </div>
    </footer>
  );
}

export default Footer;
