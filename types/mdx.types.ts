export interface PostDetails {
  title: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  tags: string[];
}

export interface PostsList {
  data: PostDetails;
  slug: string;
}
