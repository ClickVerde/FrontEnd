import "./Login.css";

export function Login() {

    return(
        <>
        <section className="flex items-center h-screen p-10 ">

        <article className="flex-1">
        <div className=" flex justify-center items-center ">

            <img className="w-96 " src="/./src/assets/Login.png" alt="" />
        </div>
        </article>
            <article className="flex-1">
                   <div className="pb-12">
          <h1 className="text-2xl font-semibold leading-7 text-gray-900">Login</h1>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Nome
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="Email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Senha:
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div> 
         </article>  
         </section>
        </>
    )

}
