"use client";

import Link from "next/link";
import { FaFire } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdAdminPanelSettings, MdViewCarousel } from "react-icons/md";
import { TbLayoutGridFilled, TbLogin2 } from "react-icons/tb";

import DropdownNav from "@/components/ui/Dropdown";
import Tooltip from "@/components/ui/Tooltip";

const contaAdmin = true;
const contaLogada = true;

const Navbar = () => {
  const navLinks = [
    {
      name: "Ver Contas",
      href: "/categories",
    },
    {
      name: "Avaliações",
      href: "#",
    },
    {
      name: "Sobre nós",
      href: "#",
    },
    {
      name: "Contate-nos",
      href: "https://discord.gg/zEQAer3PxU",
    },
  ];

  return (
    <>
      <nav className="sticky z-[100] inset-x-0 h-14 top-0 w-full transition-all py-4">
        <div className="flex flex-col gap-2 ">
          {/*  */}

          <div className="flex h-14 items-center justify-between lg:justify-evenly px-6">
            {/* Seção Logo */}
            <Link
              href="/"
              className="font-poppins font-bold text-2xl text-red-500 flex items-center"
            >
              <FaFire className="mr-2" /> Ember
              <span className="text-white text-2xl">max</span>
            </Link>

            {/* Menu Desktop */}

            <ul className="hidden lg:flex items-center lg:ml-12">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-white text-md font-dmsans font-medium transition duration-300 hover:-translate-y-1 hover:text-red-500 flex items-center"
                >
                  <Link
                    href={link.href}
                    className="w-full h-full py-1 px-4  flex items-center"
                  >
                    {link.name}
                    {link.name === "Ver Contas" && (
                      <MdViewCarousel className="ml-2 text-sm" />
                    )}
                  </Link>
                  {/* Adiciona ícone para cada li */}
                </li>
              ))}
            </ul>

            {/* Botões Desktop */}

            <div className="hidden lg:flex items-center gap-4 ">
              {/* Caso o usuário esteja logado: */}

              {contaLogada ? (
                <>
                  <Tooltip text="Nenhum item no carrinho">
                    <Link
                      href="/"
                      className="text-xl   flex items-center gap-2 transition-all duration-300 hover:-translate-y-1"
                    >
                      <FaCartShopping className="text-white" />
                      <span className="bg-[#ff495f] h-4 w-4 text-center rounded-full text-black font-dmsans font-semibold text-xs ">
                        0
                      </span>
                    </Link>
                  </Tooltip>

                  {contaAdmin ? (
                    <>
                      <Tooltip text="Acesse o Painel de Controle">
                        <Link
                          href="/"
                          className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-1"
                        >
                          <MdAdminPanelSettings className="text-red-500 text-3xl" />
                        </Link>
                      </Tooltip>
                    </>
                  ) : null}

                  <DropdownNav />
                </>
              ) : (
                <>
                  {" "}
                  <Link
                    href="/"
                    className="text-xl   flex items-center gap-2 transition-all duration-300 hover:-translate-y-1"
                  >
                    <FaCartShopping className="text-white" />
                    <span className="bg-[#ff495f] h-4 w-4 text-center rounded-full text-black font-dmsans font-semibold text-xs ">
                      0
                    </span>
                  </Link>
                  <Link
                    href="/"
                    className="py-2 px-4 rounded-lg font-dmsans font-medium text-sm flex items-center gap-2  bg-red-500 text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    Criar Conta
                    <TbLogin2 className="w-5 h-5" />
                  </Link>
                </>
              )}
            </div>

            {/* Menu Mobile */}
            <div className="lg:hidden flex items-center gap-4 divide-x divide-[#222] px-4">
              <Link
                href="/"
                className="text-2xl flex items-center gap-2 transition duration-300 hover:scale-105"
              >
                <FaCartShopping className="text-white" />
                <span className="bg-[#ff495f] h-4 w-4 text-center rounded-full text-black font-dmsans font-semibold text-xs ">
                  0
                </span>
              </Link>
              <Link
                href="/"
                className="text-3xl flex items-center gap-2 px-2 transition duration-300 hover:scale-105"
              >
                <TbLayoutGridFilled className="text-white" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
