import { Link } from "react-router-dom"

export function Header() {
 
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>ClickVerde</div>
            <div className='flex gap-4'>

            <Link to="/login">
                <div className='hover:underline'>Login</div>
            </Link>   
            <Link to="/cadastro">
                <div className='hover:underline'>Cadastro</div>
            </Link>  
            <Link to="/home">
                <div className='hover:underline'>Home</div>
            </Link>                

            </div>
          </div>
        </div>
    </>
  )
}

