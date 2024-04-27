export async function getContacts() {
  try {
    const res = await fetch(`http://95.163.228.113:1337/api/contacts`);
    return res.json();
  } catch (e) {
    throw e;
  }
}
