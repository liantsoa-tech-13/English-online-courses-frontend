import Link from 'next/link';
import styles from './Sidebar.module.css'

const Sidebar: React.FC = () => {
    return (
        <div className={styles.sideBar}>
            <div className={styles.element} id={styles.logo}>
                  <img className={styles.logoImage} src="Logo//Logo.png" alt="Logo" />
                  <h3> EOC<span>M</span></h3>
            </div>

            <Link href='/dashboard' className={styles.element}>
                  <img className={styles.elementImage} src="Icons/dashboard.svg" alt="Dashboard Icon" />
                  <p>Dashboard</p>
            </Link>

            <Link href='/users' className={styles.element}>
                  <img className={styles.elementImage} src="Icons/user.svg" alt="Logo" />
                  <p> Users </p>
            </Link>

            <Link href='/lessons' className={styles.element}>
                  <img className={styles.elementImage} src="Icons/lesson.svg" alt="Logo" />
                  <p> Lessons </p>
            </Link>

            <Link href='' className={styles.element}>
                  <img className={styles.elementImage} src="Icons/test.svg" alt="Logo" />
                  <p> Tests </p>
            </Link>
        </div>
    )
}
export default Sidebar;