import styles from './Navbar.module.css'

const VisitorLinks: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img className={styles.logoImage} src="../../public/Logo/Logo.png" alt="Logo" />
        <h3> EOC<span>M</span></h3>
      </div>

      <ul className={styles.navLinks}>
        <li><a href="/login">Home</a></li>
        <li><a href="/contact">Pricing</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <div className={styles.authButtons}>
         <button><a href="/register">Register</a></button>
         <button className={styles.login}><a href="/login">Login</a></button>
      </div>
    </div>
  );
};

export default VisitorLinks;