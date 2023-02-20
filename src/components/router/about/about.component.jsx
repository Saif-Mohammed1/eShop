import {
  faFacebookF,
  faLinkedin,
  faWhatsapp,
  faTelegram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  AboutContainer,
  Description,
  Facebook,
  Image,
  Info,
  Li,
  LinkedIn,
  PreviousProject,
  Skill,
  Social,
  Telegram,
  WhatsApp,
  GitHub,
} from "./about.styles";
import { Fragment } from "react";
const skills = [
  "react",
  "redux",
  "react-redux",
  "reselect",
  "redux-saga",
  "redux-logger",
  "redux-persist",
  "styled-components",
  "react-router-dom",
  "fontAwesomeIcon",
];
const projects = [
  { name: "Shop", Url: "https://superlative-chebakia-1f1043.netlify.app/" },
  ,
  { name: "Memory-Game", Url: "https://saif-mohammed1.github.io/Memory-Game/" },
  ,
  { name: "To-DO-List", Url: "https://saif-mohammed1.github.io/To-DO-List/" },
  ,
  {
    name: "HTML_CSS_Template_One",
    Url: "https://saif-mohammed1.github.io/HTML_CSS_Template_One/",
  },
  {
    name: "HTML_CSS_Template_Two",
    Url: "https://saif-mohammed1.github.io/Template-Two/#",
  },
  {
    name: "HTML_CSS_Template_Three",
    Url: "https://saif-mohammed1.github.io/HTML_And_CSS_Template_Three/",
  },
];
const About = () => {
  return (
    <AboutContainer>
      <Info>
        <Image
          src="https://lh3.googleusercontent.com/XYxtjRUJNIkGVfdbIXoPQSiESShEfCkNdstDD8uAH2v3H_0b88CDukuxsU9rj2HnNSEBTdTHXm5Pm1zzZ52KEiVFwtULkPCSVZ7WWL_nw3f6AD-Q3Gjbm-A8xJl6jMOjb7Y_S_y2j_i8SYEWsbxa2kl8UjP0etcWXBP0PeE-25O5zFan7rI5eT6SyGFx2jbGUqzMxrHR6MFeqO22JpayYn2AezpRxBnVL5wF4SBGjM5ajPANx6WtHK7k_8Iif-JlJ0i-AXcBqpJDoSbxET15XLF_4uWhMrN5lrLnFDinY76CPBNqqt3tpMLDUxvg1FVdBklX3NyYVo47USh_cbRfi9g4L9o_r9_it16l15ml8ZWX4rfZLdXY9tmcPhq9SjQ-1En44edh85uZNvP_cRlA6CzISbO8wKpdBuHDeR8LStwA7TOBvastjLLPxj67g6WQvCj3DDvYlk6jciwXQqzODM0mT8z2iDcjjkkTRxfk_GUBrT8oZ_fEGsYfrXFKPB7TlQpBxhoXngYLxnR-X43Ps2jUzyHvDgJaT4pMIN52qFHdw8SNbEkD7maWRaFi101guIx-M7s9T6WGOUwkBfEhWnFiq6vq3gypC5LNubba_ucQo5wN_pXq6NUCq_QZom442fYLH0yWsKwe3DEROi26ny7FPWTjWhLYXk1cnw5QRz9hi3FX6kyTGuq9LJNNVv2T9U2q2mLCxNMwpr9iubzDErw2MhEWxiGWbMxx1hrn9OBU4UPtlKVry9m-D4-4j8R4C2dPCm0v_ZKsqCW6pwpQezHaWaHodOsOggfC6awkWHHZzOKYnCYHRChUohbfb78-52_QnrjZ3kVb6-mgSHtlATvU502Pcw-S_1NbUTDto3cQJEM0XeO5wzVvFOmsmhyO5Z5i_ZyDZ4TInfHnCjIxSHiz1bKgClbjqaoW4W3ny__JTm7EiJdKRClvlFvtSJFsv0UIflz6yhFpgV_PCakzThNsvD__xn4FL3_ThzDA_JZJqaI191N0Yh_kZqfUd93CJ2vCkM8xSbpVfoilRPYR7u5WKSXT4S3mU0YvnGTkTDxITwTFjdQwpriszZc=s256-no?authuser=4"
          alt="Saif Mohammed"
        />
        <p>
          Hello everyone My name is <span>Saif Mohammed</span>
        </p>
        <p>Location : Egypt</p>
        <Social>
          <li>
            <a
              href="https://github.com/Saif-Mohammed1"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/saif.mohammed0"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/saif-mohammed-2a4ab31a6/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/@Saif_M0hammed"
              target="_blank"
              rel="noreferrer"
            >
              <Telegram icon={faTelegram} />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+201024599132"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsApp icon={faWhatsapp} />
            </a>
          </li>
        </Social>
      </Info>
      <Description>
        <h1> Project Description</h1>
        <p>
          in this project, there are pages that users have access to see and
          there are pages only Admin has access to see like storing data you can
          use this email to try these features
          <strong> test.123@gmail.com </strong> and password is
          <strong> 12345678 </strong>
          then after signing in some buttons will be visible to you for example
          you will see in nave bar this <strong> + </strong> after click on it u
          will move to addItems page which allows you to add the item to your
          store you will find there <strong> select </strong> its not doing
          anything shows you which section you have in the database to add the
          item you need to enter the 5 form field
          <strong> first field is the title </strong> if the title you put is
          exist in the database it will push the item you add under that title
          if it not exist it will create a new seaction under that title first
          is
          <br />
          <strong> second field is the Name of that product </strong>
          <br />
          <strong> third field is the ImageUrl of that product </strong>
          <br />
          <strong> fourth field is the price of that product </strong>
          <br />
          <strong> fifth field is the Rating of that product </strong>
          <br />
          and there is a select option call
          <strong> Home Page </strong> if you select it it will replace input
          field to three form fields there are responsible for the main page
          section you can add which section you have the to main page
          <strong> first field is the title of that section </strong>
          <br />
          <strong>second field is the background image of that section </strong>
          <br />
          <strong> and the last field is the route of that section </strong> for
          example "/shop/hats..."
        </p>
      </Description>
      <Skill>
        <h1>Skilled I used in my project</h1>
        <ul>
          {skills.map((skill, index) => (
            <Fragment key={index}>
              <Li>{skill}</Li>
            </Fragment>
          ))}
        </ul>
      </Skill>
      <PreviousProject>
        <h1>My previous projects</h1>
        <ul>
          {projects.map(({ name, Url }, index) => (
            <Fragment key={index}>
              <Li>
                <a href={Url} target="_blank" rel="noreferrer">
                  {name}
                </a>
              </Li>
            </Fragment>
          ))}
        </ul>
      </PreviousProject>
    </AboutContainer>
  );
};
export default About;
