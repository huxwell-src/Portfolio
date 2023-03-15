import React from "react";
import Card from "./Card";
import CentralTittle from "./CentralTittle";

const Skills = () => {
  const width = "lg:w-[48%]";
  const height = "md:min-h-[240px]";
  return (
    <div className="section" id="Skills">
      <div className="container mx-auto">
        <div className="flex justify-around flex-col  ">
          {/* Texto*/}
          <div>
            <CentralTittle
              tittle="Skills"
              subtittle="What are my skills?"
              text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum voluptatum sed quas sapiente natus magnam provident amet, veritatis rem cumque mollitia sint delectus! Accusamus deleniti earum nobis itaque eius. "
            ></CentralTittle>
          </div>
          <div className="flex flex-wrap flex-col md:flex-row justify-center items-center">
            <Card
              tittle="Front end"
              text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum voluptatum sed quas sapiente natus magnam provident amet, veritatis rem cumque mollitia sint delectus! Accusamus deleniti earum nobis itaque eius. "
              width={width}
              height={height}
            >
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>
              <a
                href="https://www.w3.org/html/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>

              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>
              <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                  alt="sass"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>

              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                  alt="tailwind"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>

              <a
                href="https://reactnative.dev/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://reactnative.dev/img/header_logo.svg"
                  alt="reactnative"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>
            </Card>
            <Card
              tittle="Data Base"
              text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum voluptatum sed quas sapiente natus magnam provident amet, veritatis rem cumque mollitia sint delectus! Accusamus deleniti earum nobis itaque eius. "
              width={width}
              height={height}
            >
              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                  alt="firebase"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                  alt="mongodb"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>
              <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                  alt="mysql"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>
              <a
                href="https://www.oracle.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg"
                  alt="oracle"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>
              <a
                href="https://www.microsoft.com/en-us/sql-server"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
                  alt="mssql"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>
            </Card>
            <Card
              tittle="Desing"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum voluptatum sed quas sapiente natus magnam provident amet, veritatis rem cumque mollitia sint delectus! Accusamus deleniti earum nobis itaque eius. "
              width={width}
              height={height}
            >
              <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                  alt="figma"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>
              <a
                href="https://www.invisionapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg"
                  alt="invision"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>
              <a
                href="https://www.photoshop.com/en"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"
                  alt="photoshop"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>
              <a
                href="https://www.adobe.com/products/xd.html"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://cdn.worldvectorlogo.com/logos/adobe-xd.svg"
                  alt="xd"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>
            </Card>
            <Card
              tittle="Other"
              text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum voluptatum sed quas sapiente natus magnam provident amet, veritatis rem cumque mollitia sint delectus! Accusamus deleniti earum nobis itaque eius. "
              width={width}
              height={height}
            >
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"
                  alt="git"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="github"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>
              <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Linux_Logo_in_Linux_Libertine_Font.svg"
                  alt="linux"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>
              <a
                href="https://wordpress.com/es/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/512px-WordPress_blue_logo.svg.png"
                  alt="Wordpress"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>
              <a
                href="https://woocommerce.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/512px-WooCommerce_logo.svg.png"
                  alt="Woocommerce"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>
              <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="nodejs"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>
              <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                  alt="express"
                  width="40"
                  height="40"
                  className="mx-1"
                />{" "}
              </a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
