import Image from "next/image";
import css from "./page.module.scss";

export default function Home() {
  return (
    <main className={css.main}>
      <div className={css.logo} />
    </main>
  );
}
