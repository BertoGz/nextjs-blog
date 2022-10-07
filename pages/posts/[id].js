import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostById } from "../../lib/posts";
import Date from "../../components/date";
import utilStyles from '../../styles/utils.module.css';

// get static props runs serverside
// here we fetch data about certain post
export async function getStaticProps({ params }) {
  const postData = await getPostById(params.id);
  return {
    props: {
      postData,
    },
  };
}

// getStaticPaths will pre-render all the pages return by the getAllPostIds
// this does not scale well so we should only return X amount of pages that the
// user might have access to immediately
// else we have to create a loading state for a page that was not pre-rendered
// by next.js
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
