import { useTheme } from "@/context/themeContext";
import LeftSidebar from "../private/sidebar";
import PrivateNavbar from "../private/privateNavbar";





interface PROPS {
  children: any;
}

export default function PrivateLayout({ children }: PROPS) {
  const { isDarkMode } = useTheme();


  return <div className={`h-screen w-full flex antialiased ${isDarkMode ? 'text-gray-200' : "text-gray-900"} ${isDarkMode ? 'bg-gray-900' : 'bg-white'} overflow-hidden`}>
    <div className="flex-1 flex flex-col">
      <main className="h-screen flex-grow flex flex-row min-h-0">
        <LeftSidebar />
        <section className={`overflow-y-scroll flex-col flex-auto border-x ${isDarkMode ? 'border-gray-800' : 'border-gray-100'}`}>
          <PrivateNavbar />
          <div className={` pt-16 p-3 md:p-5 w-full ${isDarkMode?'bg-gray-700':'bg-gray-100'}`}>
        
            <div>
              {children}
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
}