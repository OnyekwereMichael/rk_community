// import navbar from "../components/navbar"
// import footer from "../components/footer"
import picone from "../ASSESTS/picone.png";
import pictwo from "../ASSESTS/pictwo.png";
import picthree from "../ASSESTS/picthree.png";
import picfour from "../ASSESTS/picfour.png";
import imgone from "../ASSESTS/imgone.png";
import imgfour from "../ASSESTS/imaa.png";
import imgtwo from "../ASSESTS/imgtwo.png";
import imgthree from "../ASSESTS/imgthree.png";
import imgfive from "../ASSESTS/img.png";
import imgsix from "../ASSESTS/pick.png";
import { motion } from "framer-motion";

function Home() {
  const data = [
    {
      img: picone,
      head: "CANOPIES",
      para: "from $4.50/day",
      button: "Show Now",
    },
    {
      img: pictwo,
      head: "CHAIRS",
      para: "from $1.50/day",
      button: "Show Now",
    },
    {
      img: picthree,
      head: "TABLES",
      para: "from $1.50/day",
      button: "Show Now",
    },
    {
      img: picfour,
      head: "BAR SETS",
      para: "from $11.50/day",
      button: "Show Now",
    },
  ];

  const dat = [
    {
      pic: imgfour,
      graph: "3tf Banquet Table for Kids",
      price: "$4.50/day",
      feat: "featured",
    },
    {
      pic: imgfive,
      graph: "Gold Chiavari Chairs",
      price: "$4.50/day",
      feat: "featured",
    },
    {
      pic: imgthree,
      graph: "Alaskan white plate",
      price: "$4.50/day",
      feat: "featured",
    },
    {
      pic: imgsix,
      graph: "Metal Folding Chair",
      price: "$4.50/day",
      feat: "featured",
    },
    {
      pic: imgtwo,
      graph: "EV 18 Inch Powered Sub",
      price: "$4.50/day",
      feat: "featured",
    },
    {
      pic: imgone,
      graph: "Indoor/Outdoor Projector",
      price: "$4.50/day",
      feat: "featured",
    },
  ];
  // const [Slide, setSlide] = useState(true)
  // setTimeout(() => {
  // setSlide(false)
  // }, 4000)

  const loadout = {
    visible: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        x: {
          duration: 0.2,
          repeat: Infinity,
        },
      },
    },
  };

  const conitaner = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1.6,
        delay: 0.7,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.header variants={conitaner} initial="hidden" animate="visible">
      {/* <AnimatePresence>
          { Slide && (
              <motion.p 
              initial={{y: "-100vh", opacity: 0}}
              animate={{y: "40vh", x: "20vw", opacity: 1}}
              exit={{x: "100vw"}}
              transition={{duration: 1.5, ease: 'easeInOut'}} className=' font-bold wel text-white rounded w-44'>Welcome to our mall</motion.p>
          )}
          </AnimatePresence> */}

      <section>
        <p className="text-black-600 text-center pt-20 font-bold md:text-3xl">
          Get all your events needs sorted
        </p>
        <p className="p-5 text-center font-semibold">
          Shop and rent your event items on RKcommunity
        </p>
      </section>

      <section>
        <p className="pl-7 font-semibold pt-10"> Start shopping</p>
      </section>

      <section className="grid grid-cols-4 justify-center items-center ml-12 mt-12 wrap">
        {data.map((item, index) => (
          <motion.div
            variants={{
              hidden: {
                x: -50,
                y: -50,
              },
              visible: {
                x: 0,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            transition={{ duration: 0.3, delay: index * 0.13 }}
          >
            <div className="text-center">
              <img src={item.img} alt="" className="cmf" />
            </div>

            <div className="text-center font-bold ">
              <p>{item.head}</p>
            </div>

            <div className="text-center dollar">
              <p>{item.para}</p>
            </div>

            <div className="text-center rounded-full mt-2 butt1 w-28 p-1 ml-24 you ">
              <p className="text-white">{item.button}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="font-bold mt-20 ml-9 text-lg">
        <p>Featured Items</p>
      </section>

      <section className="grid grid-cols-6 justify-between items-center ml-12 wrap gap-10 mt-6 item">
        {dat.map((one, index) => (
          <motion.div
            variants={{
              hidden: {
                x: -50,
                y: -50,
              },
              visible: {
                x: 0,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            transition={{ duration: 0.3, delay: index * 0.07 }}
          >
            <div className="text-center">
              <img src={one.pic} alt="" className="cmf" />
            </div>

            <div className="text-center font-bold text-sm item_displayed">
              <p>{one.graph}</p>
            </div>

            <section className="flex justify-around one">
              <div className="text-center dollar font-semibold mt-3 text-sm ">
                <p>{one.price}</p>
              </div>

              <div className="mt-3 text-white feature rounded text-sm ">
                <p className="">{one.feat}</p>
              </div>
            </section>
          </motion.div>
        ))}
      </section>

      <section className="font-bold mt-20 ml-9 text-lg flex justify-between">
        <div>Categories</div>
        <div className="text-sm mr-4 text-orange-500">View all</div>
      </section>

      <section className="grid grid-cols-6 justify-between items-center ml-12 wrap gap-10 mt-6 item">
        {dat.map((one, index) => (
          <motion.div
            variants={{
              hidden: {
                x: -50,
                y: -50,
              },
              visible: {
                x: 0,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            transition={{ duration: 0.3, delay: index * 0.07 }}
          >
            <div className="text-center">
              <img src={one.pic} alt="" className="cmf" />
            </div>

            <div className="text-center font-bold text-sm item_displayed">
              <p>{one.graph}</p>
            </div>

            <section className="flex justify-around one ">
              <div className="text-center dollar font-semibold mt-3 text-sm ">
                <p>{one.price}</p>
              </div>

              <div className="mt-3 text-white feature rounded text-sm ">
                <p className="">{one.feat}</p>
              </div>
            </section>
          </motion.div>
        ))}
      </section>

      <section className=" mt-32 grid grid-cols-6 justify-between items-center ml-12 wrap gap-10  item">
        {dat.map((one, index) => (
          <motion.div
            variants={{
              hidden: {
                x: -50,
                y: -50,
              },
              visible: {
                x: 0,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            transition={{ duration: 0.3, delay: index * 0.07 }}
          >
            <div className="text-center">
              <img src={one.pic} alt="" className="cmf" />
            </div>

            <div className="text-center font-bold text-sm item_displayed">
              <p>{one.graph}</p>
            </div>

            <section className="flex justify-around one">
              <div className="text-center dollar font-semibold mt-3 text-sm">
                <p>{one.price}</p>
              </div>

              <div className="mt-3 text-white feature rounded text-sm two">
                <p className="two">{one.feat}</p>
              </div>
            </section>
          </motion.div>
        ))}
      </section>

      <section className="flex justify-center">
        <button className="butt2 text-center flex pl-12 pr-12 rounded-full mt-12 py-2">
          View more
        </button>
      </section>

      <motion.section
        className="loader"
        variants={loadout}
        animate="visible"
      ></motion.section>
    </motion.header>
  );
}

export default Home;
