/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui";
import theme from "../styles/index";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Main from "../components/Main";
import Gradients from "../styles/gradients.json";

export default function Home() {
  // console.log(Gradients);const string = JSON.stringify(Gradients);console.log(string);console.log(JSON.parse(string));
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Main />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {Gradients.map((grade) => (
            <div
              style={{
                width: "175px",
                height: "150px",
                background: `linear-gradient(to right,${grade.colors.toString()});`,
              }}
            >
              {grade.name}
            </div>
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
}
