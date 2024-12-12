import FooterBack from "@/components/shared/FooterBack"
import NavbarBack from "@/components/shared/NavbarBack"
import SidebarBack from "@/components/shared/SidebarBack"


type Props = {
  children: JSX.Element | JSX.Element[]
}

function BackLayout({ children }: Props) {
  return (
    <div className="flex bg-gray-100 font-family-karla">
      <SidebarBack />

      <div className="w-full flex flex-col h-screen ">
        <NavbarBack />
        <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            {children}
          </main>
          <FooterBack />
        </div>
      </div>
    </div>
  )
}

export default BackLayout