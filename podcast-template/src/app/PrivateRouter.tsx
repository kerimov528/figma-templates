// import { Navigate, useLocation } from 'react-router-dom';

// type Props = {
//   component: JSX.Element;
// };

// function PrivateRouter(props: Props) {
//   const { component } = props;
//   const location = useLocation();
//   const { isLogin, accessToken } = useAuthStore();
//   console.log('isLogin', isLogin, accessToken);

//   return isLogin ? (
//     component
//   ) : (
//     <Navigate
//       to="/auth"
//       state={{
//         pathHistory: location.pathname,
//       }}
//     />
//   );
// }

// export default PrivateRouter;