import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello i'm Berto Gonzalez! Im a software engineer and artist at heart.
          I love to create. You can contact me 
          <a href="mailto:bertogzlx@gmail.com"> here</a>.
        </p>
        <p>
          Im currently busy learning
          <Link href="https://nextjs.org/">
            <a> Next.js </a>
          </Link>
          as my next step in the Front-end world. Im also doing abit of game dev
          with 
          <Link href="https://godotengine.org/">
            <a> Godot </a>
          </Link>
          as well.
        </p>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>Skills</h2>
        <p className="tags">
          React.js - React Native - Typescript - Redux - React-Query - Jest - Graphql - Rest
          Android - Ios - Git
        </p>
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Berto's Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
