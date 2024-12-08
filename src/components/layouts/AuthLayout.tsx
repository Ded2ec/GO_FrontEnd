
type Props = {
    children: JSX.Element | JSX.Element[];
}

function AuthLayout({children}:Props) {
  return (
   
    <>
    <div>
        {children}
    </div>
 
    </>
  )
}

export default AuthLayout
