const VisitorLinks: React.FC = () => {
  return (
    <div>
      <div>
        <img src="../../public/Logo/Logo.png" alt="Logo" />
      </div>

      <ul>
        <li><a href="/login">Home</a></li>
        <li><a href="/register">Courses</a></li>
        <li><a href="/register">Contact</a></li>
      </ul>

      <div>
         <button><a href="/register">Register</a></button>
         <button><a href="/login">Login</a></button>
      </div>
    </div>
  );
};

export default VisitorLinks;