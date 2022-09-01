import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

import { PostDetails, PostsList } from '../types/mdx.types';
import fs from 'fs';
import path from 'path';

interface Props {
  posts: PostsList[];
}

const Home = ({ posts }: Props) => {
  return (
    <div>
      {posts.map((post) => {
        const href = '/posts/' + post.slug;
        return (
          <Link href={href} key={href}>
            <div className="flex py-3 gap-2 md:gap-4 cursor-pointer items-center">
              <div className="min-w-[75px] md:min-w-32 min-h-[75px] md:min-h-32 basis-[80px]">
                <Image width={50} height={50} src={post.data.thumbnailUrl} alt="recipe image" />
              </div>

              <div className="flex flex-col">
                <span className="text-base md:text-2xl">{post.data.title}</span>
                <span className="font-thin overflow-hidden text-ellipsis md:text-lg">
                  {post.data.description}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const postsDir = path.resolve(__dirname, '../../../posts');
  const files = fs.readdirSync(postsDir);

  const posts: PostsList[] = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join(postsDir, filename), 'utf-8');
    const { data } = matter(markdownWithMeta);
    return {
      data: data as PostDetails,
      slug: filename.split('.')[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Home;
