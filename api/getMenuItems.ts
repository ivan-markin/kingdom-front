export async function getMenuItems() {
  try {
    const res = await fetch(`${process.env.KINGDOM_PUBLIC_URL}/menu-items`);
    return res.json();
  } catch (e) {
    throw e;
  }
}
