interface RouteItem {
  title: string;
  href: string;
}

export const ROUTES: RouteItem[] = [
  { title: 'מתכונים', href: '/recipes' },
  { title: 'ביקורות', href: '/bikorot' },
  { title: 'אודות', href: '/about' },
  { title: 'צור קשר', href: '/contact' },
];
