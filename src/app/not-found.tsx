// src/app/not-found.tsx
import Link from "next/link";
import styles from "@/app/not-found.module.scss";

export default function NotFound() {
  return (
    <div className={styles.main}>
      <div className={styles.page404Container}>
        <p className={styles.msg404}>404</p>
        <h1 className={styles.msgNotFound}>
          Looks like you’ve found the doorway to the great nothing
        </h1>
        <p className={styles.msgVisitHomePage}>
          Sorry about that! Please visit our homepage to get where you need to
          go.
        </p>
        <div className={styles.redirect404Buttons}>
          <Link href="/" className={styles.goBackHome}>
            Go back home
          </Link>
          <Link href="/contact-us" className={styles.contactUs}>
            Contact Support <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
