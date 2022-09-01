import cx from 'classnames';
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
      <header
        className={cx(
          'flex justify-center items-center fixed px-10 py-6 bg-white w-full z-10 md:justify-between top-0',
          {
            shadow: y > 50,
          },
        )}
      >
        <Link href={'/'}>
          <h2 className="text-xl font-thin">רימצ׳ינטה</h2>
        </Link>
        <nav className="hidden gap-5 items-center md:flex">
          {ROUTES.map(({ title, href }) => {
            return (
              <div
                key={href}
                className="py-1 border-b border-transparent hover:border-b hover:border-gray-600"
              >
                <Link href={href}>{title}</Link>
              </div>
            );
          })}
        </nav>
        <div className="hidden cursor-pointer md:flex">
          <MdSearch />
        </div>
      </header>
      <div className="min-h-screen py-20 md:py-14">{children}</div>
      <div className="flex fixed bottom-0 right-0 p-4 w-full bg-white justify-around md:hidden">
        {ROUTES.map(({ title, href }) => {
          return (
            <div
              className="py-1 border-b border-transparent hover:border-b hover:border-gray-600"
              key={href}
            >
              <Link href={href}>{title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Layout;
