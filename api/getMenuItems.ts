export async function getMenuItems() {
  try {
    const res = await fetch(`http://95.163.228.113:1337/api/menu-items`, {
      headers: {
        Authorization:
          "bearer 457e31550967d7b1cd0815da3f7d83ccf18305cdee87790d7b6736624bbebfbf4f6352ab3d5396ea87ce583803a9a2b5717d307e61adf7a02940ef73600c44dd4f16789b7ba91dee4ffc022342d30650b72613ac10cf23499ccebd0ec58dc51dd603566811c5d98b579f2deb5299ab315d541663dc77d5318f92fa78bb908126",
      },
    });
    return res.json();
  } catch (e) {
    throw e;
  }
}
