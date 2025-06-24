const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Homepage() {
  await delay(3000);
  return (
    <div>
      <header>Store</header>
    </div>
  );
}
