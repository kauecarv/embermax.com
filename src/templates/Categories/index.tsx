import { Reveal } from "@/components/motion/RevealScroll";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";
import { TbShieldCheck, TbShoppingCartCheck } from "react-icons/tb";

export const CategoriesTemplate = () => {
  return (
    <>
      <section className="bg-black py-6 px-6">
        <Reveal>
          <div className="flex flex-col justify-center mx-auto group relative">
            <h1 className="mt-4 mb-4 text-4xl md:text-5xl lg:text-6xl font-bold font-poppins max-w-5xl flex items-center gap-1 mx-auto z-50">
              Contas Verificadas{" "}
              <TbShoppingCartCheck className="text-[#ff495f] group-hover:-translate-y-2 duration-300 transition z-5" />{" "}
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins max-w-5xl flex items-center gap-1 mx-auto bg-gradient-to-r from-[#9e1223] to-[#ff495f] text-transparent bg-clip-text z-50">
              Qualidade Garantida.
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
          <div className=" w-full flex flex-wrap items-center justify-center gap-8 ">
            <div className="max-w-sm w-full bg-[#111] rounded-xl shadow-xl overflow-hidden border border-solid border-[#111] transition duration-300 hover:-translate-y-2 group">
              <div>
                <Link href="/categorias/full-acesso">
                  <img
                    className="object-cover h-64 w-full"
                    src="/categorias/conta_fa.png"
                    alt="Categoria Contas Full-Acesso"
                  />
                </Link>
              </div>

              <Link href="/categorias/full-acesso">
                <div className="flex flex-col gap-1 mt-4 px-4">
                  <h2 className="text-lg font-poppins font-bold group-hover:text-white transition duration-300">
                    Contas Full-Acesso
                  </h2>
                  <span className="font-normal text-dmsans text-sm text-[#fff9] mb-2">
                    Categoria amplamente recomendada por sua segurança em
                    contas.
                  </span>
                </div>

                <div className="flex flex-col gap-1 mt-4 px-4">
                  <div className="flex items-center gap-2">
                    <TbShieldCheck className="text-red-500" />
                    <span className="text-sm font-dmsans font-normal text-[#fff9]">
                      Dados de Segurança
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TbShieldCheck className="text-red-500" />
                    <span className="text-sm font-dmsans font-normal text-[#fff9]">
                      Sem Número de Verificação
                    </span>
                  </div>
                  <div className="flex items-center gap-2 py-1">
                    <TbShieldCheck className="text-red-500" />
                    <span className="text-sm font-dmsans font-normal text-[#fff9]">
                      <span className="text-red-500">40-120+ Skins</span> de
                      Loja em Contas
                    </span>
                  </div>
                </div>
              </Link>

              <div className="mt-4 p-4 border-t border-[#222]">
                <Link
                  className="w-full flex justify-center items-center font-bold cursor-pointer hover:text-red-500 text-white transition duration-300 group"
                  href="/categorias/full-acesso"
                >
                  <span className="font-dmsans text-red-500 font-semibold text-md">
                    Selecionar Categoria
                  </span>
                  <GrFormNextLink className="text-xl text-red-500 group-hover:translate-x-1 transition duration-300" />
                </Link>
              </div>
            </div>
            <div className="max-w-sm w-full bg-[#111] rounded-xl shadow-xl overflow-hidden border border-solid border-[#111] transition duration-300 hover:-translate-y-2 group">
              <div>
                <Link href="/categorias/elo">
                  <img
                    className="object-cover h-64 w-full"
                    src="/categorias/conta_elo.png"
                    alt="Categoria Contas com Elo"
                  />
                </Link>
              </div>

              <Link href="/categorias/full-acesso">
                <div className="flex flex-col gap-1 mt-4 px-4">
                  <h2 className="text-lg font-poppins font-bold group-hover:text-white transition duration-300">
                    Contas com Elo
                  </h2>
                  <span className="font-normal text-dmsans text-sm text-[#fff9] mb-2">
                    Categoria amplamente recomendada para jogadores de
                    ranqueada.
                  </span>
                </div>

                <div className="flex flex-col gap-1 mt-4 px-4">
                  <div className="flex items-center gap-2">
                    <TbShieldCheck className="text-red-500" />
                    <span className="text-sm font-dmsans font-normal text-[#fff9]">
                      Dados de Segurança
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TbShieldCheck className="text-red-500" />
                    <span className="text-sm font-dmsans font-normal text-[#fff9]">
                      Sem Número de Verificação
                    </span>
                  </div>
                  <div className="flex items-center gap-2 py-1">
                    <TbShieldCheck className="text-red-500" />
                    <span className="text-sm font-dmsans font-normal text-[#fff9]">
                      <span className="text-red-500">60%</span> de Chances em
                      Skins
                    </span>
                  </div>
                </div>
              </Link>

              <div className="mt-4 p-4 border-t border-[#222]">
                <Link
                  className="w-full flex justify-center items-center font-bold cursor-pointer hover:text-red-500 text-white transition duration-300 group"
                  href="/categorias/full-acesso"
                >
                  <span className="font-dmsans text-red-500 font-semibold text-md">
                    Selecionar Categoria
                  </span>
                  <GrFormNextLink className="text-xl text-red-500 group-hover:translate-x-1 transition duration-300" />
                </Link>
              </div>
            </div>
            <div className="max-w-sm w-full bg-[#111] rounded-xl shadow-xl overflow-hidden border border-solid border-[#111] transition duration-300 hover:-translate-y-2 group">
              <div>
                <Link href="/categorias/conta-nfa">
                  <img
                    className="object-cover h-64 w-full"
                    src="/categorias/conta_nfa.png"
                    alt="Categoria Contas NFA"
                  />
                </Link>
              </div>

              <Link href="/categorias/conta-nfa">
                <div className="flex flex-col gap-1 mt-4 px-4">
                  <h2 className="text-lg font-poppins font-bold group-hover:text-white transition duration-300">
                    Contas NFA
                  </h2>
                  <span className="font-normal text-dmsans text-sm text-[#fff9] mb-2">
                    Categoria amplamente recomendada para jogar com diversas
                    skins sem preocupação.
                  </span>
                </div>

                <div className="flex flex-col gap-1 mt-4 px-4">
                  <div className="flex items-center gap-2">
                    <TbShieldCheck className="text-red-500" />
                    <span className="text-sm font-dmsans font-normal text-[#fff9]">
                      101-300 Skins no Inventário
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TbShieldCheck className="text-red-500" />
                    <span className="text-sm font-dmsans font-normal text-[#fff9]">
                      Skins e Facas com Efeito Garantido
                    </span>
                  </div>
                  <div className="flex items-center gap-2 py-1">
                    <TbShieldCheck className="text-red-500" />
                    <span className="text-sm font-dmsans font-normal text-[#fff9]">
                      <span className="text-red-500">0 a 14 dias</span> de
                      inatividade.
                    </span>
                  </div>
                </div>
              </Link>

              <div className="mt-4 p-4 border-t border-[#222]">
                <Link
                  className="w-full flex justify-center items-center font-bold cursor-pointer hover:text-red-500 text-white transition duration-300 group"
                  href="/categorias/full-acesso"
                >
                  <span className="font-dmsans text-red-500 font-semibold text-md">
                    Selecionar Categoria
                  </span>
                  <GrFormNextLink className="text-xl text-red-500 group-hover:translate-x-1 transition duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};
