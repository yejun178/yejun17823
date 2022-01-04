/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "안녕하세요 👋.",
  title2: "에준",
  logo_name: "yejun()",
  nickname: "harry / picleric",
  full_name: "변예준",
  subTitle: "프론트엔드 개발자입니다🔥.",
  resumeLink:
    "https://docs.google.com/document/d/1A_jWRG74Rst427tg1izLa6vRXclS9_9F856jWJPJlDY/edit?usp=sharing",
  mail: "ssij0117@naver.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/yejun178",
  gmail: "yejun7279@gmail.com",
  instagram: "https://www.instagram.com/felicity_0106/",
};

const skills = {
  data: [
    {
      title: "My Stack",
      fileName: "FullStackImg",
      skills: [
        "⚡ 저는 프론트엔드를 메인으로 개발합니다",
        "⚡ Android Studio와 Flutter와 Dart를 사용하여 미숙하지만 앱을 만들수 있습니다",
        "⚡ C, C++, Java를 사용하여 알고리즘을 해결할수 있습니다",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ git과 github를 사용하여 프로젝트 협업을 합니다",
        "⚡ FireBase를 사용하여 백엔드를 처리합니다",
        "⚡ Docker를 사용합니다",
      ],
      softwareSkills: [
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Shantilal Shah Engineering College",
      subtitle: "Bachelor in Information Technology",
      logo_path: "ssec.png",
      alt_name: "SSEC",
      duration: "2021 - Present",
      descriptions: [
        "⚡ I'm currently pursuing my bachelors in Information Technology.",
        // "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "http://www.ssgec.ac.in/",
    },
    {
      title: "Dr. S. & S. S. Ghandhy College Of Engineering & Technology",
      subtitle: "Diploma in Information Technology",
      logo_path: "ssgandhy.png",
      alt_name: "SSGC",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "http://www.ssgc.cteguj.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Hackathon",
      subtitle: "Hack The Mountains",
      logo_path: "hackathon1.svg",
      certificate_link:
        "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    {
      title: "A300: Atlas Security",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "Cyber Security & Cyber Forensics",
      subtitle: "Workshop at IIT Bombay",
      logo_path: "iit.png",
      certificate_link:
        "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
      alt_name: "Workshop",
      color_code: "#2AAFED",
    },
    {
      title: "MLH Local Hack Day: Build",
      subtitle: "Major League Hacking",
      logo_path: "mlh-logo.svg",
      certificate_link:
        "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
      alt_name: "Google",
      color_code: "#fe0037",
    },
    {
      title: "Hack20",
      subtitle: "Flutter International Hackathon",
      logo_path: "flutter.png",
      certificate_link:
        "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
      alt_name: "Flutter International Hackathon",
      color_code: "#2AAFED",
    },
    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "제 경험은",
  subtitle: "겪어온 과정을 보여드리겠습니다",
  description: "여라가지 기관의 교육과 대회를 하였습니다.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "경북소프트웨어고등학교",
          company: "GyeongBuk SoftWare High School",
          company_url: "http://school.gyo6.net/gbsw",
          logo_path: "slogo.jpg",
          duration: "2021.03 ~ 2023.03(졸업예정)",
          location: "High School",
          description: `2021년 03월부터 현재까지 경북소프트웨어고등학교를 재학중입니다.
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "경북소프트웨어고등학교 해킹동아리",
          company: "동아리 회장",
          company_url: "https://www.cyberguardians.or.kr/",
          logo_path: "cyber.jpg",
          duration: "2021.03 ~ 2021.12",
          location: "Work From Home",
          description: `경북소프트웨어고등학교 해킹동아리를 회장으로써 정보보안 사업 사이버 가디언즈를 진행하게 되었습니다. 
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "제 7회 대구대학교 정보보호영재교육원",
          company: "고등전문A과정",
          company_url: "hhttps://star.daegu.ac.kr/",
          logo_path: "degu.jpg",
          duration: "2021.03 ~ 2021.12",
          location: "영재교육원",
          description: `대구대학교 정보보호영재교육원을 다니면서 화이트해커로써 해킹공격과 방어 기술을 습득하였습니다.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "제 6회 대구대학교 정보보호영재교육원",
          company: "고등기초심화과정",
          company_url: "hhttps://star.daegu.ac.kr/",
          logo_path: "degu.jpg",
          duration: "2020.03 ~ 2020.12",
          location: "영재교육원",
          description: `대구대학교 정보보호영재교육원을 다니면서 화이트해커로써 해킹공격과 방어 기술을 습득하였습니다.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "제 5회 대구대학교 정보보호영재교육원",
          company: "중등기초심화과정",
          company_url: "hhttps://star.daegu.ac.kr/",
          logo_path: "degu.jpg",
          duration: "2019.03 ~ 2019.12",
          location: "영재교육원",
          description: `대구대학교 정보보호영재교육원을 다니면서 화이트해커로써 해킹공격과 방어 기술을 습득하였습니다.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "제 4회 대구대학교 정보보호영재교육원",
          company: "중등기초1과정",
          company_url: "hhttps://star.daegu.ac.kr/",
          logo_path: "degu.jpg",
          duration: "2018.03 ~ 2018.12",
          location: "영재교육원",
          description: `대구대학교 정보보호영재교육원을 다니면서 화이트해커로써 해킹공격과 방어 기술을 습득하였습니다.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Contest",
      experiences: [
        {
          title: "제 7회 정보보안 경진대회 단체전",
          company: "우수상",
          logo_path: "degu.jpg",
          duration: "2021.11.06",
          location: "한국교육학술정보원 정보보호영재교육원 교육부 주관",
          description:
            "제 7회 정보보안 경진대회 전국 단체전에서 3위로 우수상을 수상하였습니다.",
          color: "#4285F4",
        },
        {
          title: "제 7회 정보보안 경진대회 개인전",
          company: "최우수상",
          logo_path: "degu.jpg",
          duration: "2021-10-30",
          location: "한국교육학술정보원 정보보호영재교육원 교육부 주관",
          description:
            "제 7회 정보보안 경진대회 전국 2위 영남권 1위로 최우수상을 수상하였습니다.",
          color: "#196acf",
        },
        {
          title: "제 1회 경북소프트웨어고등학교 해커톤",
          company: "우수상",
          logo_path: "ct.jpg",
          duration: "2021.10.15 ~ 2021.10.16",
          location: "경북소프트웨어고등학교 주관",
          description:
            "제 1회 경북소프트웨어고등학교 해커톤에서 2등으로 우수상을 수상하였습니다.",
          color: "#040f26",
        },
        {
          title: "전국 창업 아이디어 경진대회",
          company: "한국장학재단 이사장상",
          logo_path: "ct.jpg",
          duration: "2021.06.15",
          location: "교육부 한국장학재단 신용보증기금 주관",
          description:
            "2021년 고졸성공 취업대박람회 창업경진대회 3위로 한국장학재단 이사장상을 수상하였습니다.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "제가 여태까지 배운 기술을 바탕으로 진행한 프로젝트입니다 :)",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "mypic.jpg",
    description:
      "저에게 관련된 질문 및 연락은 위 아이콘을 눌러 연락해주시면 감사하겠습니다:)",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "제가 개발 관련 공부를 위해 정리를 하고 기록한 블로그입니다 :)",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "도리맵",
      url: "https://github.com/yejun178/Dori-Map",
      description:
        "HTMl과 CSS그리고 BootStrap을 사용하여 경북소프트웨어고등학교 학생들을 위한 길찾기 및 편의시설 제공웹사이트입니다.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "1",
      name: "경북소프트웨어고등학교 3C인증제사이트",
      url: "https://github.com/GBSWHS/3C-certification",
      description:
        "경북소프트웨어고등학교에 취업 역량강화를 위한 제도인 3C인증제 점수를 부여하고 관리하는 사이트를 제작하였습니다",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
      ],
    },
    {
      id: "2",
      name: "아이디어팟",
      description:
        "아이디어를 가진 드리머와 개발기술력이 있는 메이커끼리 서로 협업하여 프로젝트를 완성할수있도록 도와주는사이트입니다",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
