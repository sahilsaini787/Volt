"use client";

import Link from "next/link";
import styles from "@/Components/Navbar/NavbarMenu/NavbarMenu.module.scss";
import { useState, useEffect } from "react";

const menuList = [
  { id: crypto.randomUUID(), title: "Blogs", href: "/" },
  {
    id: crypto.randomUUID(),
    title: "Tools",
    href: "/tools",
  },
  {
    id: crypto.randomUUID(),
    title: "Learn",
    href: "/learn",
  },
];

export default function NavbarMenu() {
  const [activeTab, setActiveTab] = useState<string>("");
  //get activeTab on page reload
  useEffect(() => {
    const savedState = sessionStorage.getItem("activeTab");
    if (savedState) {
      setActiveTab(savedState);
    }
  }, []);

  //set activeTab in localstorage every time state changes
  useEffect(() => {
    if (activeTab !== null) {
      sessionStorage.setItem("activeTab", activeTab);
    }
  }, [activeTab]);

  function handleActiveTab(menuItem: string) {
    setActiveTab(menuItem);
  }

  return (
    <div className={styles.navMenu}>
      <ul className={styles.navMenuList}>
        {menuList.map((menuItem) => (
          <li
            key={menuItem.href}
            className={`${styles.navMenuItem} ${activeTab === menuItem.href ? styles.activeMenuTab : ""}`}
          >
            <Link
              href={menuItem.href}
              className={styles.navMenuItemLink}
              onClick={() => handleActiveTab(menuItem.href)}
            >
              {menuItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
