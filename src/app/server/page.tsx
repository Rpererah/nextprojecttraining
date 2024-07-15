"use server";

async function getData() {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Dados gerados no servidor");
    }, 10000);
  });
}

export default async function ServerComponent() {
  const data = await getData();

  return (
    <>
      <hr />
      <h1>Usando server</h1>
      <small>Tem um atraso proposital de 10sec</small>
      <div>
        <p>Data: {data}</p>
      </div>
    </>
  );
}
