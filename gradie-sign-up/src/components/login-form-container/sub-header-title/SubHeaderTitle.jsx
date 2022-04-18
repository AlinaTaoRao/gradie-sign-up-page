import "./styles.css";

export const SubHeaderTitle = () => {
  return (
    <div className="sub-header-title">
      <form action="">
        <h3>Login</h3>
        <label htmlFor="Email">Email</label>
        <input type="email" placeholder="john@example.com" />
        <label htmlFor="Password">Password</label>
        <input type="password" placeholder="At least 8 character" />
        <input className="checkbox" type="checkbox" />
        <p className="form-title">
          By creating an account, you agree <br />
          <span>Terms & Conditions</span>
        </p>
        <a href="#">Create an Account</a>
      </form>
    </div>
  );
};
