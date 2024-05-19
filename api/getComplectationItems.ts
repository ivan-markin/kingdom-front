import {error} from 'console';

export async function getComplectationItems() {
  try {
    const res = await fetch(
      `${process.env.KINGDOM_API_URL}/complectation-items`,
      {
        headers: {
          Authorization: `bearer ${process.env.KINGDOM_API_KEY}`,
        },
        next: {revalidate: 600},
      },
    );
    return res.json();
  } catch (e) {
    throw error(e);
  }
}
