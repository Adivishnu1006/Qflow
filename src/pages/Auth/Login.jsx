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

import Button from "@/components/UI/Button";

function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-4">

      <Button>
        Primary
      </Button>

      <Button variant="secondary">
        Secondary
      </Button>

      <Button variant="outline">
        Outline
      </Button>

      <Button variant="ghost">
        Ghost
      </Button>

      <Button variant="danger">
        Delete
      </Button>

    </div>
  );
}

export default Login;