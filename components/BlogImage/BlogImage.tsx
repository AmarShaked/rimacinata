import { chakra } from '@chakra-ui/react';
import NextImage from 'next/image';

const BlogImage = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) =>
    [
      'width',
      'height',
      'src',
      'alt',
      'quality',
      'placeholder',
      'blurDataURL',
      'loader',
      'layout',
      'sizes',
    ].includes(prop),
});

export default BlogImage;
