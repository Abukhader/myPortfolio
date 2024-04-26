import AKImage from './assets/ak-website.png';
import FullstackImage from './assets/fullstack.png';
import FlutterImage from './assets/flutter.png'
import commerceImage from './assets/ecommerce.png';
import ecommerceImage from './assets/commerc.png';
const myProjects = [
  {  id: 1,
     projectTitle: "React project",
    projectP: "AK-Website",
   category: ["react"],
    imgPath: AKImage,
    href: "https://github.com/Abukhader/AK-Website" 
  },
  {
    id: 2,
    projectTitle: "flutter project",
    projectP: "Tawassol App",
    category: ["flutter"],
    imgPath: FlutterImage,
    href: "https://github.com/Abukhader/tawassol"
  },
  {
    id: 3,
    projectTitle: "full-stack project",
    projectP: "web chat app",
    category: ["fullStack"],
    imgPath: FullstackImage,
    href: "https://github.com/Abukhader/web-chat-app"
  },
  {
    id: 4,
    projectTitle: "react & bootstrap project",
    projectP: "AK-Website",
    category: ["bootstrap"],
    imgPath: AKImage,
    href: "https://github.com/Abukhader/AK-Website"
  },
  {
    id: 5,
    projectTitle: "Projects under development",
    projectP: "E-Commerce",
    category: ["inProgress", "react"],
    imgPath: commerceImage,
    href: ""
  },
  {
    id: 6,
    projectTitle: "React project",
    projectP: "E-Commerce",
    category: ["react"],
    imgPath: ecommerceImage,
    href: "https://github.com/Abukhader/Ecommerce"
  },
  
];
export default myProjects