"use client";
import { useState } from "react";

export default function Home() {
  const [isVisible, setVisible] = useState(false);
  return (
    <main>
      <h1>Hello</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;

          const users = [{ name: "b" }, { name: "c" }, { name: "a" }];

          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
    </main>
  );
}
