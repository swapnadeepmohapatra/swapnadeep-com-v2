interface Projects {
  name: string;
  link: string;
  image: string;
  techStack: string;
  desc: string;
  important: Boolean;
}

const projects: Projects[] = [
  {
    name: "TinDev",
    link: "http://tindev.swapnadeep.com/",
    image: "/tindev-small.png",
    techStack: "React, Node.js, Express.js, MongoDB, Socket.io",
    desc: "A MERN stack PWA with swiping cards like Tinder to find like-minded developers.",
    important: true,
  },
  {
    name: "DevTube",
    link: "http://devtube.swapnadeep.com/",
    image: "/devtube-small.png",
    techStack: "React, Node.js, Express.js, MongoDB, Firebase Storage",
    desc: "A MERN stack video streaming app.",
    important: true,
  },
  {
    name: "Mate",
    link: "https://beta.mate.swapnadeep.com/",
    image: "/mate-small.png",
    techStack:
      "React, Node.js, Express.js, MongoDB, GraphQL, TypeScript, Jest, Mongoose",
    desc: "A MERN stack dating app.",
    important: true,
  },
  {
    name: "e-Commerce",
    link: "http://ecom.swapnadeep.com/",
    image: "/ecom-small.png",
    techStack: "React, Node.js, Express.js, MongoDB",
    desc: "A MERN stack PWA with Stripe integration for online gadgets shopping.",
    important: true,
  },
  {
    name: "Pachisi",
    link: "https://pachisi.swapnadeep.com/",
    image: "/pachisi-small.png",
    techStack: "React, TypeScript, Node.js, Express.js, Socket.io",
    desc: "A game based on popular pachisi game played in Mahabharat. Reviving the forgotten culture of India",
    important: true,
  },
  {
    name: "e-SwachhBin",
    link: "https://swachhbin.swapnadeep.com/",
    image: "/swachhbin.jpeg",
    techStack:
      "Raspberry Pi, Arduino, React.js, React Native, Express.js, Electron.js, Firebase, OpenCV",
    desc: "An IoT solution for real-time monitoring of garbage bins with android and web apps for users.",
    important: true,
  },
];

export { projects };
