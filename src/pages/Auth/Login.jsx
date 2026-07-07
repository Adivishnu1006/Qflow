// function Login() {
//   return (
//     <div className="flex min-h-screen items-center justify-center">
//       <h1 className="text-4xl font-bold">
//         Login Page
//       </h1>
//     </div>
//   );
// }

// export default Login;

// import Button from "@/components/UI/Button";

// function Login() {
//   return (
//     <div className="flex min-h-screen items-center justify-center gap-4">

//       <Button>
//         Primary
//       </Button>

//       <Button variant="secondary">
//         Secondary
//       </Button>

//       <Button variant="outline">
//         Outline
//       </Button>

//       <Button variant="ghost">
//         Ghost
//       </Button>

//       <Button variant="danger">
//         Delete
//       </Button>

//     </div>
//   );
// }

// export default Login;


import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";

function Login() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-6 p-6">

      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        required
      />

      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        required
      />

      <Input
        label="Phone Number"
        placeholder="+91 9876543210"
        helperText="We'll never share your phone number."
      />

      <Input
        label="Email"
        placeholder="Wrong email"
        error="Please enter a valid email address."
      />

      <Button fullWidth>
        Sign In
      </Button>

    </div>
  );
}

export default Login;