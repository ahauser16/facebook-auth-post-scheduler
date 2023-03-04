// import { Suspense } from "react";
// import { useLoaderData, useOutlet, Await } from "react-router-dom";
// import { AuthProvider } from "../context/AuthProvider";

// export const AuthLayout = () => {
//     const outlet = useOutlet();
  
//     const { userPromise } = useLoaderData();
  
//     return (
//       <Suspense>
//         <Await
//           resolve={userPromise}
//           errorElement={<p>Something went wrong!</p>}
//           children={(user) => (
//             <AuthProvider userData={user}>{outlet}</AuthProvider>
//           )}
//         />
//       </Suspense>
//     );
//   };