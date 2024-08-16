import "./navbar.css";
import { useState } from "react";
import { motion } from "framer-motion";

const itemContainervariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(0px at 0px 0px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
      
    },
  },
};

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openDriver, setOpenDriver] = useState(false);
  return (
    <>
      <motion.div className='sidebar' animate={openNav ? "open" : "closed"}>
        <motion.div className='bg' variants={variants}>
          <motion.div className='links' variants={itemContainervariants}>
            <motion.a
              href={`#`}
              className='navlink'
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}>
              خانه
            </motion.a>
            <motion.a
              onClick={() => setOpenDriver(!openDriver)}
              href={`#`}
              className='navlink driverMenu'
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}>
              لورم اپیسوم
            </motion.a>
            <motion.ul className={openDriver ? "openDriver" : "closeDriver"}>
              <motion.li variants={itemVariants}>
                1 لورم ایپسوم ساختگی
              </motion.li>

              <motion.li variants={itemVariants}>
                1 لورم ایپسوم ساختگی
              </motion.li>

              <motion.li variants={itemVariants}>
                1 لورم ایپسوم ساختگی
              </motion.li>

              <motion.li variants={itemVariants}>
                1 لورم ایپسوم ساختگی
              </motion.li>
            </motion.ul>

            <motion.a
              href={`#`}
              className='navlink'
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}>
              لورم اپیسوم
            </motion.a>

            <motion.a
              href={`#`}
              className='navlink'
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}>
              لورم اپیسوم
            </motion.a>

            <motion.a
              href={`#`}
              className='navlink'
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}>
              لورم اپیسوم
            </motion.a>
          </motion.div>
        </motion.div>
        <button className='navbtn' onClick={() => setOpenNav((prev) => !prev)}>
          <svg width='23' height='23' viewBox='0 0 23 23'>
            <motion.path
              strokeWidth='3'
              stroke={openNav? 'black' :'white' }
              strokeLinecap='round'
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <motion.path
              strokeWidth='3'
              stroke='white'
              strokeLinecap='round'
              d='M 2 9.423 L 20 9.423'
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
            />
            <motion.path
              strokeWidth='3'
              stroke={openNav? 'black' :'white' }
              strokeLinecap='round'
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>
      </motion.div>

      <motion.div className='links_desk' variants={itemContainervariants}>
        <motion.a
          href={`#`}
          className='navlink_desk'
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
          خانه
        </motion.a>

        <div className='dropdown'>
          <span>لورم اپیسوم</span>
          <div className='dropdown-content'>
          <a> 1لورم ایپسوم ساختگی </a>

          <a> 2لورم ایپسوم ساختگی </a>

          <a> 3لورم ایپسوم ساختگی </a>
         
          </div>
        </div>

        <motion.a
          href={`#`}
          className='navlink_desk'
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
          لورم اپیسوم
        </motion.a>

        <motion.a
          href={`#`}
          className='navlink_desk'
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
          لورم اپیسوم
        </motion.a>

        <motion.a
          href={`#`}
          className='navlink_desk'
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
          لورم اپیسوم
        </motion.a>
      </motion.div>
    </>
  );
};

export default Navbar;
