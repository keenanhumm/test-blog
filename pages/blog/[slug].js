import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import marked from 'marked';

const Post = ({ htmlString, data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync('posts');
  console.log({ files })
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".md", "")
    }
  }));
  console.log({ paths })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  console.log({ slug })
  const markdownWithMetaData = 
    fs.readFileSync(path.join('posts', `${slug}.md`)).toString();
  const parsedMarkdown = matter(markdownWithMetaData);
  const htmlString = marked(parsedMarkdown.content)

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data
    }
  }
}

export default Post;
