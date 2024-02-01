import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import Logo from '../../assets/Logo.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Pinterest from '../../assets/icons/pinterest.svg';
import '../../index.css';


function Footer() {



  return (
    <>
      <div className="flex justify-around gap-5 align-middle p-10">
        <div className="grid grid-rows justify-items-center">

          <div className='grid grid-rows-3 p-4 text-end'>
            <div>
              <h5>Contact Us</h5>
            </div>
            <div className=''>
              <a href="" className='paragraphBold'>Email</a>
              <div>
                <a href="" className=''>email@email.com</a>
              </div>
            </div>
            <div>
              <a href="" className='paragraphBold'>Telefone</a>
              <div>
                <a href="" className=''>666-888-888</a>
              </div>
            </div>
            <div>
              <a href="" className='paragraphBold'>Endereço</a>
              <div>
                <a href="" className=''>Vale do Sílicio, USA</a>
              </div>
            </div>
          </div>

        </div>

        <div className='flex-col border-l-2 border-r-2'>


          <div className='grid gap-5 grid-rows-2 justify-items-center'>
            <img src={Logo} ></img>
            <p className='w-2/3 text-center paragraph'>Simply dummy text of the printing and typesetting industry.
              Lorem Ipsum simply dummy text of the printing </p>
          </div>

          <div className='flex justify-center gap-3 '>
            <img src={Instagram}></img>
            <img src={Facebook}></img>
            <img src={Twitter}></img>
            <img src={Pinterest}></img>
          </div>


        </div>

        <div className="grid grid-rows justify-items-center">

          <div className='p-4 gap-2 grid text-start'>
            <div>
              <h5>Contact Us</h5>
            </div>

            <div>
              <a href="">Home</a>
            </div>
            <div>
                <a href="">Produtos</a>
            </div>
            <div>
                <a href="">Categorias</a>
            </div>
            <div>
              <a href="">Sobre</a>
            </div>
            <div>
              <a href="">Perfil</a>
            </div>
          </div>

        </div>

      </div>

      <div className='flex justify-center border-t-2 py-2 '>
        <p className='paragraph me-1'>Copyright © </p>
        <p className='paragraphBold me-1'>ClickVerde  |</p>
        <p className='paragraph me-1'>Desenvolvido por</p>
        <p className='paragraphBold'>Pedro Soares • Henrique Mancini • Rodrigo Sanchez • Wendy Eugenia</p>
      </div>
    </>
  )
}

export default Footer