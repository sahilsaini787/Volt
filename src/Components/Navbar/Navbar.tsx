// type NavbarPropType = {

// }
import styles from "@/Components/Navbar/Navbar.module.scss";

const Navbar = ({}) => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarStart}>
        <div className={styles.navbarLogo}>Volt</div>
        <div className={styles.navDropdownMenu}>
          <div className={styles.navDropDownBtnContainer}>
            <button className={styles.navDropDownBtn}>Blogs</button>
          </div>
        </div>
      </div>

      <div className={styles.userPrefBtns}>
        <div className={styles.switchLayoutBtnContainer}>
          <button className={styles.switchLayoutBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-[1.2rem] w-[1.2rem] transition-all -rotate-90 scale-0"
            >
              <rect width="7" height="7" x="3" y="3" rx="1"></rect>
              <rect width="7" height="7" x="3" y="14" rx="1"></rect>
              <path d="M14 4h7"></path>
              <path d="M14 9h7"></path>
              <path d="M14 15h7"></path>
              <path d="M14 20h7"></path>
            </svg>
          </button>
        </div>
        <div className={styles.switchThemeBtnContainer}>
          <button className={styles.switchThemeBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 3v1"></path>
              <path d="M12 20v1"></path>
              <path d="M3 12h1"></path>
              <path d="M20 12h1"></path>
              <path d="m18.364 5.636-.707.707"></path>
              <path d="m6.343 17.657-.707.707"></path>
              <path d="m5.636 5.636.707.707"></path>
              <path d="m17.657 17.657.707.707"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
