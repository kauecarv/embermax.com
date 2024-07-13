import { Reveal } from "@/components/motion/RevealScroll";
import Tooltip from "@/components/ui/Tooltip";
import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { LuTimer } from "react-icons/lu";
import { MdFullscreen } from "react-icons/md";
import { TbMoneybag, TbShield, TbWorldCheck } from "react-icons/tb";

export const CategoriesFullAcessoTemplate = () => {
  return (
    <>
      <section className="bg-black py-6 px-6">
        <Reveal>
          <div className="flex flex-col justify-center mx-auto  relative">
            <h1 className="mt-4 mb-4 text-4xl md:text-5xl lg:text-6xl font-bold font-poppins max-w-5xl flex items-center gap-1 mx-auto z-50">
              Entrega Imediata <LuTimer className="text-[#ff495f]" />{" "}
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins max-w-5xl flex items-center gap-1 mx-auto bg-gradient-to-r from-[#9e1223] to-[#ff495f] text-transparent bg-clip-text z-50">
              Contas Full-Acesso
            </h1>
            <p className="mb-8 mt-4 text-center text-md font-dmsans text-[#fff9] font-normal max-w-xl mx-auto ">
              Aqui você pode comprar{" "}
              <span className="text-red-500">com confiança.</span> Todas as
              contas são verificadas e garantem a{" "}
              <span className="text-red-500">melhor experiência.</span>
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-12">
            <div className="bg-[#080808] border-2  border-[#222] rounded-2xl shadow-lg p-8 ">
              <div className="relative overflow-hidden group transition duration-300 hover:scale-105 rounded-xl">
                <img
                  className="object-cover w-full max-h-56 rounded-xl"
                  src="/inventory/inventory_1.png"
                  alt="Conta de Valorant"
                />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 transition duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center gap-2">
                  <Link
                    className="bg-red-500 text-black py-3 px-3 rounded-full gap-2 items-center font-dmsans text-sm font-semibold hidden group-hover:inline-flex group-hover:animate-fadeIn transition duration-300 hover:-translate-y-1 "
                    href="/add-cart"
                  >
                    <MdFullscreen className="text-lg" />
                  </Link>
                </div>
              </div>

              <div className="flex justify-between gap-2 items-baseline">
                <h3 className="text-xl font-poppins font-bold text-white mt-4 transition ">
                  <a href="/pagina-da-conta">Conta Full-Acesso</a>
                </h3>

                <p className="text-red-500 font-dmsans font-bold text-md inline-flex gap-2 items-center">
                  Elo Imortal I
                  <span className="text-[#ccc] font-medium font-dmsans text-sm">
                    (112 Skins)
                  </span>
                </p>
              </div>

              <p className="text-[#ccc] font-dmsans font-normal text-sm mt-2 transition ">
                Esta conta foi comprada diretamente com o dono com acesso a
                todos os dados e não possui nenhum risco.
              </p>

              <ul className="py-6 text-white flex flex-col gap-2">
                <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                  <TbShield className="text-lg text-red-500" />
                  Dados + IDs Transações
                </li>
                <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                  <TbShield className="text-lg text-red-500" />
                  Dados de Recuperação
                </li>
                <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                  <TbShield className="text-lg text-red-500" />
                  Sem Chances de Recuperação
                </li>
              </ul>
              <ul className=" text-white flex flex-col gap-2">
                <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                  <TbWorldCheck className="text-lg text-red-500" />
                  Pode alterar e-mail e senha
                </li>
                <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                  <TbWorldCheck className="text-lg text-red-500" />
                  Sem número de verificação
                </li>
                <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                  <TbWorldCheck className="text-lg text-red-500" />
                  Garantia de 3 meses
                </li>
              </ul>
              <div className="flex flex-wrap lg:flex-row gap-2 items-center justify-center sm:justify-between md:justify-between lg:justify-between mt-4">
                <h1 className="text-white font-poppins font-bold text-2xl inline-flex gap-2 items-center transition ">
                  R$499.99{" "}
                </h1>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link
                    className="bg-red-500 font-dmsans text-sm font-bold hover:scale-105 text-black py-2 px-4 rounded-xl  hover:bg-[#171717] hover:text-white transition duration-150 inline-flex gap-2 items-center"
                    href="/checkout"
                  >
                    Comprar Agora <TbMoneybag />
                  </Link>

                  <Tooltip text="Adicionar este item ao carrinho?">
                    <Link
                      className="border-2 border-red-500 bg-transparent font-dmsans text-sm font-bold hover:scale-105 text-white py-2 px-4 rounded-full inline-flex items-center  transition duration-150"
                      href="/"
                    >
                      <IoMdCart className="text-xl" />
                    </Link>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="bg-[#080808] border-2  border-[#222] rounded-2xl shadow-lg p-8 ">
              <div className="relative overflow-hidden group transition duration-300 hover:scale-105 rounded-xl">
                <img
                  className="object-cover w-full max-h-56 rounded-xl"
                  src="/inventory/inventory_1.png"
                  alt="Conta de Valorant"
                />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 transition duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center gap-2">
                  <Link
                    className="bg-red-500 text-black py-3 px-3 rounded-full gap-2 items-center font-dmsans text-sm font-semibold hidden group-hover:inline-flex group-hover:animate-fadeIn transition duration-150 hover:-translate-y-1 "
                    href="/add-cart"
                  >
                    <MdFullscreen className="text-lg" />
                  </Link>
                </div>
              </div>

              <div className="flex justify-between gap-2 items-baseline">
                <h3 className="text-xl font-poppins font-bold text-white mt-4 transition ">
                  <a href="/pagina-da-conta">Conta Full-Acesso</a>
                </h3>

                <p className="text-red-500 font-dmsans font-bold text-md inline-flex gap-2 items-center">
                  Elo Imortal I
                  <span className="text-[#ccc] font-medium font-dmsans text-sm">
                    (112 Skins)
                  </span>
                </p>
              </div>

              <p className="text-[#ccc] font-dmsans font-normal text-sm mt-2 transition ">
                Esta conta foi comprada diretamente com o dono com acesso a
                todos os dados e não possui nenhum risco.
              </p>

              <ul className="py-6 text-white flex flex-col gap-2">
                <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                  <TbShield className="text-lg text-red-500" />
                  Dados + IDs Transações
                </li>
                <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                  <TbShield className="text-lg text-red-500" />
                  Dados de Recuperação
                </li>
                <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                  <TbShield className="text-lg text-red-500" />
                  Sem Chances de Recuperação
                </li>
              </ul>
              <ul className=" text-white flex flex-col gap-2">
                <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                  <TbWorldCheck className="text-lg text-red-500" />
                  Pode alterar e-mail e senha
                </li>
                <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                  <TbWorldCheck className="text-lg text-red-500" />
                  Sem número de verificação
                </li>
                <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                  <TbWorldCheck className="text-lg text-red-500" />
                  Garantia de 3 meses
                </li>
              </ul>
              <div className="flex flex-wrap lg:flex-row gap-2 items-center justify-center sm:justify-between md:justify-between lg:justify-between mt-4">
                <h1 className="text-white font-poppins font-bold text-2xl inline-flex gap-2 items-center transition ">
                  R$499.99{" "}
                </h1>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link
                    className="bg-red-500 font-dmsans text-sm font-bold hover:scale-105 text-black py-2 px-4 rounded-xl  hover:bg-[#171717] hover:text-white transition duration-150 inline-flex gap-2 items-center"
                    href="/checkout/"
                  >
                    Comprar Agora <TbMoneybag />
                  </Link>

                  <Tooltip text="Adicionar este item ao carrinho?">
                    <Link
                      className="border-2 border-red-500 bg-transparent font-dmsans text-sm font-bold hover:scale-105 text-white py-2 px-4 rounded-full inline-flex items-center  transition duration-150"
                      href="/"
                    >
                      <IoMdCart className="text-xl" />
                    </Link>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="bg-[#080808] border-2  border-[#222] rounded-2xl shadow-lg p-8 ">
              <div className="relative overflow-hidden group transition duration-300 hover:scale-105 rounded-xl">
                <img
                  className="object-cover w-full max-h-56 rounded-xl"
                  src="/inventory/inventory_1.png"
                  alt="Conta de Valorant"
                />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 transition duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center gap-2">
                  <Link
                    className="bg-red-500 text-black py-3 px-3 rounded-full gap-2 items-center font-dmsans text-sm font-semibold hidden group-hover:inline-flex group-hover:animate-fadeIn transition duration-300 hover:-translate-y-1 "
                    href="/add-cart"
                  >
                    <MdFullscreen className="text-lg" />
                  </Link>
                </div>
              </div>

              <div className="flex justify-between gap-2 items-baseline">
                <h3 className="text-xl font-poppins font-bold text-white mt-4 transition ">
                  <a href="/pagina-da-conta">Conta Full-Acesso</a>
                </h3>

                <p className="text-red-500 font-dmsans font-bold text-md inline-flex gap-2 items-center">
                  Elo Imortal I
                  <span className="text-[#ccc] font-medium font-dmsans text-sm">
                    (112 Skins)
                  </span>
                </p>
              </div>

              <p className="text-[#ccc] font-dmsans font-normal text-sm mt-2 transition ">
                Esta conta foi comprada diretamente com o dono com acesso a
                todos os dados e não possui nenhum risco.
              </p>

              <ul className="py-6 text-white flex flex-col gap-2">
                <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                  <TbShield className="text-lg text-red-500" />
                  Dados + IDs Transações
                </li>
                <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                  <TbShield className="text-lg text-red-500" />
                  Dados de Recuperação
                </li>
                <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                  <TbShield className="text-lg text-red-500" />
                  Sem Chances de Recuperação
                </li>
              </ul>
              <ul className=" text-white flex flex-col gap-2">
                <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                  <TbWorldCheck className="text-lg text-red-500" />
                  Pode alterar e-mail e senha
                </li>
                <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                  <TbWorldCheck className="text-lg text-red-500" />
                  Sem número de verificação
                </li>
                <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                  <TbWorldCheck className="text-lg text-red-500" />
                  Garantia de 3 meses
                </li>
              </ul>
              <div className="flex flex-wrap lg:flex-row gap-2 items-center justify-center sm:justify-between md:justify-between lg:justify-between mt-4">
                <h1 className="text-white font-poppins font-bold text-2xl inline-flex gap-2 items-center transition ">
                  R$499.99{" "}
                </h1>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link
                    className="bg-red-500 font-dmsans text-sm font-bold hover:scale-105 text-black py-2 px-4 rounded-xl  hover:bg-[#171717] hover:text-white transition duration-150 inline-flex gap-2 items-center"
                    href="/checkout"
                  >
                    Comprar Agora <TbMoneybag />
                  </Link>

                  <Tooltip text="Adicionar este item ao carrinho?">
                    <Link
                      className="border-2 border-red-500 bg-transparent font-dmsans text-sm font-bold hover:scale-105 text-white py-2 px-4 rounded-full inline-flex items-center  transition duration-150"
                      href="/"
                    >
                      <IoMdCart className="text-xl" />
                    </Link>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};
