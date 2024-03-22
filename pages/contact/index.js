// circles
import Circles from "../../components/Circles";

//icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-screen bg-gray-900 ">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full ">
        {/* text & form  */}
        <div className="flex flex-col w-full max-w-[700px] ">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12 "
          >
            lets <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form action */}
          <motion.form 
                 variants={fadeIn("up", 0.1)}
                 initial="hidden"
                 animate="show"
                 exit="hidden"
          action="" className="flex-1 flex flex-col gap-6 w-full mx-auto">
            {/* group */}
            <div className="flex gap-x-6 w-full  ">
              <input type="text" placeholder="name" className="input" />
              <input type="text" placeholder="email" className="input" />
            </div>

            <input type="text" placeholder="subject" className="input" />
            <textarea className="textarea" placeholder="message"></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-10 flex items-center justify-center overflow-hidden hover:border-accent group ">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-20 ">
                Lets talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-10 absolute text-[22pz]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
