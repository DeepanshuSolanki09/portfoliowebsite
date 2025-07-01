import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import portfolio from '/Screenshot 2025-06-30 142623.png'
import house from '/Screenshot 2025-06-30 141901.png'
import diary from '/Screenshot 2025-06-30 141629.png'
import DDD from '/Screenshot 2025-06-30 141958.png'
import galaxy from '/Screenshot 2025-06-30 142105.png'
import hero from '/Portfolio-pana.svg'

function App() {
  const projects = [
  {
    "title": "Portfolio Website",
    "photo": portfolio,
    "description": "A fully responsive personal portfolio built using React and TailwindCSS",
    "link": "https://your-demo-link.com/portfolio",
    "key" : 0,
  },
  {
    "title": "Blog Application",
    "photo": "http://yentit.com/wp-content/uploads/2023/06/Cara-Membuat-Web-Dummy.jpg",
    "description": "A full-featured blog platform where users can create, edit, delete, and read blog posts. Built using the MERN stack with markdown support and user authentication.",
    "link": "https://your-demo-link.com/blog",
    "key" : 1,
  },
  {
    "title": "Haunted House Model",
    "photo": house,
    "description": "A spooky haunted house scene created using Three.js with realistic lighting, fog, textures, and ghost animations.",
    "link": "https://your-demo-link.com/haunted-house",
    "key" : 2,
  },
  {
    "title": "Dev Diary Web App",
    "photo": diary,
    "description": "A developer-focused diary app to write, share, and rate diary entries with cloud file storage, comments, and real-time notifications.",
    "link": "https://github.com/DeepanshuSolanki09/diary-sharing-app-backend",
    "key" : 3,
  },
  {
    "title": "3D Product Viewer",
    "photo": DDD,
    "description": "An interactive 3D viewer to showcase products with rotation, zoom, and lighting using Three.js.",
    "link": "https://your-demo-link.com/3dviewer",
    "key" : 4,
  },
  {
    "title": "Galaxy Model in Three.js",
    "photo": galaxy,
    "description": "A detailed galaxy model created with particles and shaders in Three.js, offering customizable spiral arms and colors.",
    "link": "https://your-demo-link.com/galaxy-model",
    "key" : 5,
  }
]
  const [display, setdisplay] = useState(false);
  const [show, setshow] = useState(false);
  const [index,setindex] = useState(-1);
  useEffect(() => {
    if (display || show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [display, show]);

  return (
    <div className="min-h-screen">
      <div>
        <div className="h-[80px] bg-black flex justify-between items-center px-3 py-2 text-white md:px-44 md:py-10">
          <h1 className="font-medium md:text-3xl text-xl">Deepanshu</h1>
          <button
            className="bg-white text-black md:w-[160px] w-[100px] py-4 md:rounded-full rounded-xl font-medium text-lg"
            onClick={() => setdisplay(true)}
          >
            Contact
          </button>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-evenly w-full min-h-screen md:h-screen items-center md:px-5">
          <div className="h-1/2 md:w-1/3 w-full flex flex-col items-center md:items-start">
            <h1 className="font-bold md:text-7xl text-3xl text-center md:text-left mb-5">I'm A WebDeveloper</h1>
            <p className="font-medium text-lg mb-5 text-center md:text-left">
              {" "}
              I build fast, responsive, and animated web interfaces with React
            </p>
            <button
              className="bg-black text-white w-[160px] py-4 rounded-lg font-medium text-lg"
              onClick={() => setdisplay(true)}
            >
              Contact
            </button>
          </div>
          <div className="md:h-1/2 md:w-1/4 md:scale-115 w-1/2 scale-125">
          <img src={hero} className="h-full w-full scale-125"></img>
          </div>
        </div>

        {display ? (
          <div className="fixed inset-1 max-h-screen backdrop-blur-sm overflow-y-hidden flex justify-center items-center">
            <div className="h-auto w-[400px] bg-black/20 rounded-xl flex flex-col px-4 py-6 items-center justify-center">
              <h1 className="text-3xl text-center font-bold mb-5">
                Contact Form
              </h1>
              <input
                type="text"
                className="px-3 py-3 bg-white text-sm font-medium rounded-lg my-2 w-full"
                placeholder="Enter Your Name"
              ></input>
              <input
                type="text"
                className="px-3 py-3 bg-white text-sm font-medium rounded-lg my-2 w-full"
                placeholder="Enter your Email"
              ></input>
              <input
                type="text"
                className="px-3 py-3 bg-white text-sm font-medium rounded-lg my-2 w-full"
                placeholder="Enter Contact Reason"
              ></input>
              <button className=" py-4 bg-black text-white text-lg font-medium rounded-lg mt-5 my-1 w-full">
                Submit
              </button>
              <button
                className=" py-4 bg-black text-white text-lg font-medium rounded-lg my-1 w-full"
                onClick={() => setdisplay(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="min-h-screen w-full flex justify-center items-center py-20">
        <div className="flex flex-col justify-center gap-10 w-3/4 h-full">
          <h1 className="font-bold text-4xl mb-5 text-center">Projects</h1>
          <div className="flex justify-center flex-col items-center flex-wrap md:w-[950px] md:flex-row h-auto py-[50px] gap-5">
            {projects.map((data) => (
              <div className="md:w-[300px] w-4/5 md:h-[300px] h-auto  rounded-xl shadow-xl md:px-4 py-4 flex flex-col gap-3" key={data.key}>
              <div className="w-full h-3/4 overflow-hidden">
                <img src={data.photo} className="h-full w-full object-contain"></img>
              </div>
              <h1 className="text-xl font-semibold">{data.title}</h1>
              <button
                className="py-2 text-sm font-medium bg-black text-white rounded-lg "
                onClick={() => {
                  setshow(true);
                  setindex(data.key);
                }}
              >
                see more
              </button>
            </div>
            ))}
          </div>
        </div>
      </div>

      {show ? (
        <div className="fixed inset-1 max-h-screen backdrop-blur-sm overflow-y-hidden flex justify-center items-center">
          {projects.filter((data) => data.key === index).map((data) => (
            <div className="h-auto w-[400px] bg-white/60 rounded-xl flex flex-col px-4 py-6 items-center justify-center">
            <h1 className="text-3xl text-center font-bold mb-5">{data.title}</h1>
            <div className="h-[200px] w-[300px]">
              <img src={data.photo} className="h-full w-full object-contain"></img>
            </div>
            <h1 className=" text-lg text-center font-medium rounded-lg mt-5 my-1 w-full">
              {data.description}
            </h1>
            <h1 className=" py-4 bg-black text-white text-xl text-center cursor-pointer font-medium rounded-lg mt-5 my-1 w-full">
              <a href={data.link}>Get Link</a>
            </h1>
            <button
              className=" py-4 bg-black text-white text-lg font-medium rounded-lg my-1 w-full"
              onClick={() => {
                setshow(false);
                setindex(-1);
              }}
            >
              Cancel
            </button>
          </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}

      <div className="bg-black w-full h-1/4 p-12 flex flex-col gap-10 text-white justify-around items-center md:flex-row md:items-start">
        <div>
          <h1 className="font-medium text-3xl">My Contacts</h1>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-medium mb-2">Contact</h2>
          <h4 className=" flex gap-2 items-center">
            <TbBrandGmail />
            solankideepanshu2006@gmail.com
          </h4>
          <h4 className=" flex gap-2 items-center">
            <FaPhoneAlt />
            9871409724
          </h4>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-medium mb-2">Social</h2>
          <h4 className=" flex gap-2 items-center">
            <FaInstagram />
           <a href="https://www.instagram.com/i_m___deepanshusolanki/?next=%2F&hl=en"> i_m__deepanshusolanki</a>
          </h4>
          <h4 className=" flex gap-2 items-center">
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/deepanshu-solanki-081346318/"> DeepanshuSolanki </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
