export async function getChat({ queryKey }) {
  const apiRes = await fetch(`http://localhost:3000/chat`);
  if (!apiRes.ok) {
    //?on verra ça plus tard
    //throw new console.error("not ok");
  }
  return apiRes.json();
}

export async function getRemoved({ queryKey }) {
  const apiRes = await fetch(`http://localhost:3000/removed`);
  if (!apiRes.ok) {
    //?on verra ça plus tard
    //throw new console.error("not ok");
  }

  // setTimeout(() => {
  //   queryClient.invalidateQueries(queryKey);
  // }, 10000);
  return apiRes.json();
}
