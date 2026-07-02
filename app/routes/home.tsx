

import type { Route } from "./+types/home";
import NavBar from "~/navbar/navbar";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Al Javir | Portfolio" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <NavBar />

    </div>
  );
}
