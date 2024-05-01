export async function getContacts() {
  try {
    const res = await fetch(`${process.env.KINGDOM_API_URL}/contact`, {
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
