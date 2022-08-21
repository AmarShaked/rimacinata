import { StaticImageData } from 'next/image';

import dough from '../public/images/dough.png';

interface RecipeItem {
  title: string;
  image: StaticImageData;
  summary: string;
  href: string;
}

export const RecipesRoutes: RecipeItem[] = [
  {
    title: 'בצק סמולינה',
    image: dough,
    href: '/recipes/semolina',
    summary:
      'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפא',
  },
];
