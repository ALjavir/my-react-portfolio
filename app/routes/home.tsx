

import Footer from "~/footer/footer";
import type { Route } from "./+types/home";
import NavBar from "~/navbar/navbar";
import "./home-style.css";
import Hero from "~/sections/hero/hero";
import Skills from "~/sections/skills/skills";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Al Javir | Portfolio" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="home-container">
      <NavBar />

      <main className="section-content">
        <Hero />
<Skills />
      </main>
      <Footer />
    </div>
  );
}
