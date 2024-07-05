// import { createContext, useContext } from "react";
// import { getAccessToken } from "@/libs/utils";

// interface AuthType {
//   isAuthenticated: boolean;
// }

// export const AuthContext = createContext<AuthType>({
//   isAuthenticated: false,
// });

// const AuthProvider = (props: any) => {
//   const token = getAccessToken();

//   return (
//     <AuthContext.Provider
//       value={{
//         isAuthenticated: !!token,
//       }}
//     >
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
