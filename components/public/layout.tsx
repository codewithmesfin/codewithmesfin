import PublicFooter from "./footer";
import PublicNavbar from "./navbar";




 
export default function PublicLayout({ children }:any) {
  return (
    <div className='flex flex-col h-screen bg-white justify-between'>
      <PublicNavbar />
      <main >{children}</main>
      <PublicFooter/>
    </div>
  )
}

