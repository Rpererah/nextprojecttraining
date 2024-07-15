//next create a new page using page.tsx just make a folder with the slug name you want, w/ file name page.tsx

import { Suspense } from "react";
import { AddTag } from "./add-tag";
import { Tags } from "./tags";
import ServerComponent from "./server/page";
import LoadingFallback from "./server/loading";
import ClientComponent from "./cliente/page";

export default function Home() {
  return (
    <main>
      <p>Hello world!</p>
      <Tags />
      <AddTag />

      <Suspense fallback={<LoadingFallback />}>
        <ServerComponent />
      </Suspense>
      <ClientComponent />
    </main>
  );
}
