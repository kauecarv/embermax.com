import Link from "next/link";
import { FaDiscord, FaFire, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <>

      <footer>
        <div className="bg-black py-4 lg:py-12 text-white">
          <div className="container px-4 mx-auto">
            <div className="-mx-4 flex flex-wrap justify-between">
              <div className="px-4 my-4 w-full xl:w-1/5">
                <Link
                  href="/"
                  className="font-poppins font-bold text-2xl text-red-500 flex items-center"
                >
                  <FaFire className="mr-2" /> Ember
                  <span className="text-white text-2xl">max</span>
                </Link>
                <p className="text-justify text-sm text-[#fff9] py-2 font-dmsans font-normal">
                  A Embermax é a sua loja confiável para adquirir contas de Valorant de forma rápida e segura. Com um compromisso inabalável com a satisfação do cliente, oferecemos contas de alta qualidade a preços acessíveis. Nossa prioridade é garantir uma experiência de compra segura e sem complicações, para que você possa entrar no jogo e começar a jogar imediatamente.
                </p>
              </div>

              <div className="px-4 my-4 w-full sm:w-auto">
                <div>
                  <h2 className="inline-block text-2xl pb-3 mb-4 border-b-4 border-red-500 text-white font-dmsans font-medium">Navegação</h2>
                </div>
                <ul className="leading-8 font-dmsans font-normal">
                  <li><a href="/conta" className="hover:text-red-500 transition duration-300">Minha Conta</a></li>
                  <li><a href="/categorias" className="hover:text-red-500 transition duration-300">Produtos</a></li>
                  <li><a href="/discord" className="hover:text-red-500 transition duration-300">Contate-nos</a></li>
                </ul>
              </div>
              <div className="px-4 my-4 w-full sm:w-auto">
                <div>
                  <h2 className="inline-block text-2xl pb-3 mb-4 border-b-4 border-red-500 text-white font-dmsans font-medium">Atente-se as Novidades</h2>
                </div>
                <ul className="leading-8 font-dmsans font-medium">
                  <li><a href="/tos" className="hover:text-red-500 transition duration-300">Termos e Condições</a></li>
                  <li><a href="/discord" className="hover:text-red-500 transition duration-300">Comunidade Ember</a></li>
                </ul>
              </div>
              <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
                <div>
                  <h2 className="inline-block text-2xl pb-3 mb-4 border-b-4 border-red-500 font-dmsans font-medium text-white">Conecte-se Conosco</h2>
                </div>
                <div className="flex items-center gap-2">
                  <a href="/discord" className="w-8 h-8 border-2 justify-center items-center border-red-500 flex rounded-xl transition duration-300 hover:scale-105"><FaDiscord /></a>
                  <a href="/instagram" className="w-8 h-8 border-2 justify-center items-center border-red-500 flex rounded-xl transition duration-300 hover:scale-105"><FaInstagram /></a>
                  <a href="/wpp" className="w-8 h-8 border-2 justify-center items-center border-red-500 flex rounded-xl transition duration-300 hover:scale-105"><FaWhatsapp /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black py-4 text-white">
          <div className="container mx-auto px-4">
            <div className="-mx-4 flex flex-wrap justify-between">
              <div className="px-4 w-full text-center sm:w-auto sm:text-left text-sm items-center font-dmsans font-normal text-[#fff9]">
               Todos os Direitos Reservados. &copy; Embermax 2022 - 2024
              </div>
              <div className="px-4 w-full text-center sm:w-auto sm:text-left items-center text-[#fff9] text-sm justify-center font-dmsans font-normal">
                Este site foi feito por <span className="text-indigo-500 text-sm font-dmsans font-medium"><a href="https://spacefy.com.br" target="_blank">Spacefy.</a></span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
