import { Container, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { ReactNode } from 'react';
import { MdSearch } from 'react-icons/md';
import { useWindowScroll } from 'react-use';

import { ROUTES } from './Layout.constants';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { y } = useWindowScroll();

  return (
    <div>
      <Flex
        shadow={y > 50 ? 'sm' : undefined}
        as="header"
        px={10}
        py={15}
        position="fixed"
        bg="white"
        w="full"
        justify={{ base: 'center', sm: 'center', md: 'space-between' }}
        alignItems="center"
        zIndex={10}
      >
        <Heading as="h2" size="xl" fontWeight="thin">
          רימצ׳ינטה
        </Heading>
        <Flex as="nav" gap={5} alignItems="center" display={{ base: 'none', md: 'flex' }}>
          {ROUTES.map(({ title, href }) => {
            return (
              <Flex
                key={href}
                borderBottom="1px solid transparent"
                _hover={{ borderBottom: '1px solid' }}
                py={1}
              >
                <Link href={href}>{title}</Link>
              </Flex>
            );
          })}
        </Flex>
        <Flex cursor="pointer" display={{ base: 'none', md: 'flex' }}>
          <MdSearch />
        </Flex>
      </Flex>
      <Container maxW="container.sm" py={{ base: 20, md: 32 }} minHeight={'100vh'}>
        {children}
      </Container>
      <Flex
        display={{ base: 'flex', md: 'none' }}
        position="fixed"
        bottom={0}
        right={0}
        p={4}
        w="full"
        bg="white"
        justifyContent="space-around"
      >
        {ROUTES.map(({ title, href }) => {
          return (
            <Flex
              key={href}
              borderBottom="1px solid transparent"
              _hover={{ borderBottom: '1px solid' }}
              py={1}
            >
              <Link href={href}>{title}</Link>
            </Flex>
          );
        })}
      </Flex>
    </div>
  );
};

export default Layout;
