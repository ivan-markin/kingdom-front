export async function getMenuItems() {
  try {
    const res = await fetch(`${process.env.KINGDOM_API_URL}/menu-items`, {
      headers: {
        Authorization: `bearer ${process.env.KINGDOM_API_KEY}`,
      },
      next: { revalidate: 600 },
    });
    return res.json();
  } catch (e) {
    throw e;
  }
}
