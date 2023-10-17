import Link from "next/link";
import { useRouter } from "next/router";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <button>Register</button>
      <p>
        Sudah punya akun? <Link href={"/auth/login"}>Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
