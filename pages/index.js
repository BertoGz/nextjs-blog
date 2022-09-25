import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello i'm Berto Gonzalez! Im a software engineer and artist at heart. I love to
          create. You can contact me <a href="mailto:bertogzlx@gmail.com">here</a>.
        </p>
        <p>
          Im currently busy learning <Link href="https://nextjs.org/"><a>Next.js</a></Link> as my next step in the Front-end world.
          Im also doing abit of game dev with <Link href="https://godotengine.org/"><a>Godot</a></Link> as well.
        </p>
        <p className="tags">React.js React Native Typescript Redux React-Query Jest Graphql Rest Android Ios Git </p>
     
      </section>
    </Layout>
  );
}
