import Link from "next/link";
import { FaFire, FaRegCalendar, FaDiscord, FaHeadphones } from "react-icons/fa6";
import { TbFlagCancel, TbShield, TbMoneybag } from "react-icons/tb";
import { AiOutlineNumber } from "react-icons/ai";
import { MdFullscreen, MdOutlineArrowOutward } from "react-icons/md";
import { BiCart, BiShieldAlt2 } from "react-icons/bi";
import { LuMoveLeft } from "react-icons/lu";
import { Reveal } from "../components/motion/RevealScroll";


const Checkout = () => {
  return (
    <>
      <section className="flex flex-col mx-auto justify-center w-full py-6 px-2 lg:py-16 lg:px-12">

    <Reveal>
    <div className="flex flex-col bg-neutral-950 rounded-xl w-full px-6">
          <div className=" flex flex-wrap justify-between px-6 py-8">
            <div className="flex flex-col">
              <Link href='/₢ategorias' className="text-[#fff9] transition duration-300 hover:text-white text-sm font-dmsans font-normal px-2 mb-2 inline-flex gap-2 items-center"><LuMoveLeft /> Voltar a Categorias</Link>

              <h1 className="text-white text-3xl font-dmsans font-semibold">
                <span className="text-red-500 text-3xl inline-flex items-center font-dmsans gap-2 font-semibold">

                  Pedido #eI6IPN <span className="text-sm text-[#fff9] font-dmsans font-normal mt-2">Este pedido custa R$500,00</span>
                </span>{" "}

              </h1>

              <p className="py-2 text-[#fff9] font-dmsans font-normal inline-flex items-center gap-2 text-sm">
                <FaRegCalendar/> Criado em 24 de Janeiro, 2024 as 09:00
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 py-6">

              <Link
                href="/categorias/"
                className="py-3 px-3 bg-red-500 text-black font-dmsans font-semibold text-sm rounded-md flex items-center gap-2 transition duration-300 hover:scale-105 z-50"
              >
                <TbFlagCancel /> Cancelar Pedido
              </Link>

              <Link
                href="/add-cart"
                className="py-3 px-3 bg-emerald-400 text-black font-dmsans font-semibold  text-sm rounded-md flex items-center gap-2 transition duration-300 hover:scale-105 z-50"
              >
                Adicionar ao Carrinho <BiCart className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-2 lg:px-2">
              <div className="relative w-full max-w-md h-64 overflow-hidden group rounded-sm transition duration-300 hover:scale-95">
                <img
                  className="object-cover w-full max-h-56 rounded-xl"
                  src="/inventory/inventory_1.png"
                  alt="Conta de Valorant"
                />
         

              </div>
              <div className="relative w-full max-w-md h-64 overflow-hidden group rounded-sm transition duration-300 hover:scale-95">
                <img
                  className="object-cover w-full max-h-56 rounded-xl"
                  src="/inventory/inventory_marshal.png"
                  alt="Conta de Valorant"
                />
         

              </div>
              <div className="relative w-full max-w-md h-64 overflow-hidden group rounded-sm transition duration-300 hover:scale-95">
                <img
                  className="object-cover w-full max-h-56 rounded-xl"
                  src="/inventory/inventory_kuronami.png"
                  alt="Conta de Valorant"
                />
         

              </div>
            </div>
            <div className="flex flex-col py-6 lg:-mt-12 w-full">
              <div className="flex flex-wrap lg:py-4 lg:px-12 justify-between w-full">
                <div className="flex flex-col w-full">
                  <h1 className="flex items-center gap-2 text-red-500 font-dmsans font-semibold text-lg">
                    <FaFire />
                    Suporte Ember
                    <span className="text-[#fff9] font-dmsans font-normal text-sm">
                      hoje às 16:24
                    </span>
                  </h1>
                  <div className="flex flex-col py-2 lg:px-6">
                    <ul className="text-white font-dmsans font-medium flex flex-col gap-1.5 py-2">
                      <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                        <TbShield className="text-lg text-red-500" />
                        Garantia de 30 dias para todas as contas compradas.
                      </li>
                      <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                        <TbShield className="text-lg text-red-500" />
                        Suporte disponível 24/7 para qualquer problema.
                      </li>
                      <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                        <TbShield className="text-lg text-red-500" />
                        Instruções detalhadas de como usar sua nova conta.
                      </li>
                      <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                        <TbShield className="text-lg text-red-500" />
                        Contas 100% seguras e verificadas.
                      </li>
                      <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                        <TbShield className="text-lg text-red-500" />
                        Reembolso garantido em caso de problemas.
                      </li>
                    </ul>
                    <span className="text-[#fff9] font-dmsans font-normal text-sm">
                    Antes de prosseguir, certifique-se que você leu atentamente nossos <Link href='/tos' className="text-red-500">Termos de Serviço.</Link>
                    </span>
                  </div>

                  <div className="flex flex-wrap px-6 py-4 gap-2">
                    <Link
                      href="https://discord.gg/zEQAer3PxU"
                      target="_blank"
                      className="py-3 px-4 bg-[#7289da] text-white font-dmsans font-medium text-sm rounded-xl flex items-center gap-2 transition duration-300 hover:scale-105 z-50"
                    >
                      Falar com Suporte <FaHeadphones className="h-4 w-4" />
                    </Link>
                    <Link
                href="/checkout/finalizar"
                className="py-3 px-3 bg-green-600 text-black font-dmsans font-semibold  text-sm rounded-xl flex items-center gap-2 transition duration-300 hover:scale-105 z-50"
              >
                Comprar Agora <TbMoneybag className="h-4 w-4" />
              </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
    </Reveal>
      </section>
    </>
  );
};

export default Checkout;
