import { signinAction } from "../_lib/actions";

async function SignInButton() {
  return (
    <form action={signinAction}>
      <button
        className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium"
        type="submit"
      >
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
