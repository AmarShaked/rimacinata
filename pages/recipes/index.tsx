import { Box, Flex, StackDivider, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import BlogImage from '../../components/BlogImage';
import { RecipesRoutes } from '../../constants/recipes';

const RecipesList = () => {
  return (
    <VStack divider={<StackDivider borderColor="gray.500" />}>
      {RecipesRoutes.map((route) => {
        return (
          <Link href={route.href} key={route.title}>
            <Flex py={3} gap={{ base: 2, md: 4 }} cursor="pointer" alignItems="center">
              <Flex
                minWidth={{ base: '75px', md: 36 }}
                height={{ base: '75px', md: 36 }}
                flexBasis="80px"
              >
                <BlogImage src={route.image} alt="recipe image" placeholder="blur" rounded="sm" />
              </Flex>

              <Flex direction="column" maxH="md">
                <Text fontSize={{ base: 'md', md: '2xl' }}>{route.title}</Text>
                <Text
                  noOfLines={{ base: 2, md: 4 }}
                  fontWeight="thin"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  fontSize={{ base: 'md', md: 'lg' }}
                >
                  {route.summary}
                </Text>
              </Flex>
              <Box></Box>
            </Flex>
          </Link>
        );
      })}
    </VStack>
  );
};

export default RecipesList;
