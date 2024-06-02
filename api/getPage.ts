import {iHouse} from '@/interfaces/House.interface';
import {iHousePage} from '@/interfaces/HousePage.interface';
import {error} from 'console';

export async function getPage(
  alias: string,
): Promise<{data: iHousePage} | null> {
  const getAlias = (alias: string) => {
    switch (alias) {
      case 'model_b':
        return 1;
      case 'model_c':
        return 2;
      case 'model_d':
        return 3;
    }
  };
  const res = await fetch(
    `${process.env.KINGDOM_API_URL}/house-pages/${getAlias(alias)}?populate=*`,
    {
      headers: {
        Authorization: `bearer ${process.env.KINGDOM_API_KEY}`,
      },
      next: {revalidate: 600},
    },
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}
