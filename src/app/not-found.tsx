// src/pages/404.tsx
import Link from "next/link";

export default function Custom404() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>We couldn’t find the page you were looking for.</p>
      <Link href="/">Go back home</Link>
    </div>
  );
}
