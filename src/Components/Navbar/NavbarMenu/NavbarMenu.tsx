"use client";

import Link from "next/link";
import styles from "@/Components/Navbar/NavbarMenu/NavbarMenu.module.scss";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

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
  const currentPathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>(currentPathname);
  const [showDropdownMenu, setShowDorpdownMenu] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsTouchDevice(navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    handleActiveTab(currentPathname);

    //hide the dropdown menu when the user visits a new page
    setShowDorpdownMenu(false);
  }, [currentPathname]);

  function handleActiveTab(menuItem: string) {
    setActiveTab(menuItem);
  }

  //for handeling click outside the dropdown menu area.
  //So that the dropdown menu on mobile devices disappears when
  //the user clicks anywhere else.
  useEffect(() => {
    if (isTouchDevice) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setShowDorpdownMenu(false);
        }
      };

      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isTouchDevice]);

  return (
    <div
      ref={dropdownRef}
      className={styles.navMenu}
      onPointerOver={
        !isTouchDevice ? () => setShowDorpdownMenu(true) : undefined
      }
      onPointerOut={
        !isTouchDevice ? () => setShowDorpdownMenu(false) : undefined
      }
    >
      <button
        className={styles.activeNavMenuItem}
        onClick={() => setShowDorpdownMenu(!showDropdownMenu)}
      >
        {menuList.filter((menuItem) => menuItem.href === activeTab)[0]?.title ||
          "Blogs"}
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
        className={`${styles.navMenuList} ${showDropdownMenu ? styles.showNavMenuDropdownList : ""}
        ${showDropdownMenu ? styles.showNavMenuDropdownListAnimation : styles.removeNavMenuDropdownListAnimation}`}
      >
        {menuList.map((menuItem) => (
          <li key={menuItem.href} className={styles.navMenuItem}>
            {/* 
              Apply tab highlighting initially on root tab ('/').
              Similarly highlight appropriate tab on switching.
            */}
            <Link
              href={menuItem.href}
              className={`${styles.navMenuItemLink} ${activeTab === menuItem.href ? styles.activeMenuTab : ""}
              ${activeTab === "" ? (menuItem.href === "/" ? styles.activeMenuTab : "") : ""}`}
            >
              {menuItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
