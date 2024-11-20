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
  const [showDropdownMenu, setShowDorpdownMenu] = useState<boolean>(false);

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
  let hoverTimer: any = 0;
  return (
    <div
      className={styles.navMenu}
      onPointerOver={() => setShowDorpdownMenu(true)}
      onPointerOut={() => setShowDorpdownMenu(false)}
    >
      <button
        className={styles.activeNavMenuItem}
        onClick={() => setShowDorpdownMenu(!showDropdownMenu)}
      >
        {activeTab === ""
          ? "Blogs"
          : menuList.filter((menuItem) => menuItem.href === activeTab)[0]
              ?.title}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${styles.dropdownBtnSVG} ${showDropdownMenu ? styles.animateDropdownSVG_Up : styles.animateDropdownSVG_Down}`}
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <ul
        className={`${styles.navMenuList} ${showDropdownMenu ? styles.showNavMenuList : ""}
        ${showDropdownMenu ? styles.showNavMenuListAnimation : styles.removeNavMenuListAnimation}`}
      >
        {menuList.map((menuItem) => (
          <li key={menuItem.href} className={styles.navMenuItem}>
            <Link
              href={menuItem.href}
              className={`${styles.navMenuItemLink} ${activeTab === menuItem.href ? styles.activeMenuTab : ""}`}
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
