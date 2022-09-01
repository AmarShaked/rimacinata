import matter from 'gray-matter';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';

import { PostDetails } from '../../types/mdx.types';
import fs from 'fs';
import path from 'path';

interface Props {
  data: PostDetails;
  mdxSource: MDXRemoteSerializeResult;
}

const PostPage = ({ data: { title, tags }, mdxSource }: Props) => {
  return (
    <div className="">
      <div className="flex bg-black w-full items-center p-5 flex-col justify-center mb-4 h-48 md:h-80">
        <h2 className="text-5xl text-white mb-4 md:text-6xl md:mb-10">{title}</h2>
        <div className="flex gap-3">
          {tags.map((tag) => (
            <div className="flex items-center bg-white px-2 py-1" key={tag}>
              <span className="text-sm">{tag}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="prose mx-auto max-w-5xl p-4 md:text-xl">
        <MDXRemote {...mdxSource} components={{ Image }} />
      </div>
    </div>
  );
};

export default PostPage;

export const getStaticPaths = async () => {
  const postsDir = path.resolve(__dirname, '../../../../posts');
  const files = fs.readdirSync(postsDir);
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8');
  const { data, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      data: data as PostDetails,
      slug,
      mdxSource,
    },
  };
};
