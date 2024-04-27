export async function getMenuItems() {
  try {
    const res = await fetch(`http://95.163.228.113:1337/api/menu-items`);
    return res.json();
  } catch (e) {
    throw e;
  }
}
