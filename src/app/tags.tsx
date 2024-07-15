export async function Tags() {
  const response = await fetch("http://localhost:4000/tags", {
    next: {
      tags: ["get-tags"],
    },
  });
  const data = await response.json();
  return (
    <ul>
      {data.map((item: { slug: string }, index: number) => (
        <li key={index}>{item.slug}</li>
      ))}
    </ul>
  );
}
