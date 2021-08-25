/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";
import styles from "../styles/Home.module.css";

const Main = () => {
  const [colorMode, setColorMode] = useColorMode();
  const changeColorMode = (mode) => {
    // console.log(colorMode);
    setColorMode(mode);
  };
  return (
    <main className={styles.main} sx={style.main}>
      <h1 className={styles.title}>
        Welcome to{" "}
        <a href="#" sx={{ color: "textColor" }}>
          Next.js!
        </a>
      </h1>
      <p className={styles.description}>
        <a href="#">
          <code
            onClick={() => changeColorMode("code1")}
            className={`${styles.code1} code`}
          >
            pages/index.js
          </code>
        </a>{" "}
        <a href="#">
          <code
            onClick={() => changeColorMode("code2")}
            className={`${styles.code2} code`}
          >
            pages/index.js
          </code>
        </a>{" "}
        <a href="#">
          <code
            onClick={() => changeColorMode("code3")}
            className={`${styles.code3} code`}
          >
            pages/index.js
          </code>
        </a>{" "}
        <a href="#">
          <code
            onClick={() => changeColorMode("code4")}
            className={`${styles.code4} code`}
          >
            pages/index.js
          </code>
        </a>
      </p>
      <div className={styles.grid}>
        <a href="#" className={styles.card} sx={style.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
        <a href="#" className={styles.card} sx={style.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>
        <a href="#" className={styles.card} sx={style.card}>
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>
        <a href="#" className={styles.card} sx={style.card}>
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </main>
  );
};

export default Main;

const style = {
  main: {
    background: (theme) =>
      `linear-gradient(to right, ${theme.colors.gradientColor1}, ${theme.colors.gradientColor2})`,
  },
  card: {
    color: "normalColor",
    backgroundColor: "backgroundColor",
    "&:hover": {
      color: "textColor",
      borderColor: "textColor",
    },
    "&:focus": {
      color: "textColor",
      borderColor: "textColor",
    },
    "&:active": {
      color: "textColor",
      borderColor: "textColor",
    },
  },
};
