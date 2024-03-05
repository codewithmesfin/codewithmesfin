// import Navbar from './navbar'
// import Footer from './footer'

import { useAuth } from "@/context/authContext";
import PublicLayout from "./public/publicLayout";
import PrivateLayout from "./private/privateLayout";

 
// export default function Layout({ children }:any) {
//   return (
//     <div className='flex flex-col h-screen bg-white justify-between'>
//       <Navbar />
//       <main >{children}</main>
//       <Footer/>
//     </div>
//   )
// }

/* eslint-disable react/no-children-prop */





interface PROPS {
  children: any;
}

export default function Layout({ children }: PROPS) {
  const { isAuthenticated } = useAuth();



  return isAuthenticated? <PrivateLayout children={children} /> :
   <PublicLayout children={children} />
}