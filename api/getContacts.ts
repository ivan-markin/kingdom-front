export async function getContacts() {
  try {
    const res = await fetch(`${process.env.KINGDOM_PUBLIC_URL}/contacts`);
    return res.json();
  } catch (e) {
    throw e;
  }
}
