import { Reveal } from "@/components/motion/RevealScroll";
import Link from "next/link";
import { BiCheck } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { FaBolt } from "react-icons/fa6";
import { TbShield } from "react-icons/tb";

export const CheckoutFinalizeTemplate = () => {
  return (
    <>
      <section className="flex flex-col mx-auto justify-center w-full py-6 px-2 lg:py-16 lg:px-12">
        <Reveal>
          <div className="flex flex-col bg-neutral-950 rounded-xl w-full max-w-5xl mx-auto px-6 py-6">
            <div className="flex items-center gap-x-1 py-6">
              <div
                className="w-full h-3 flex flex-col justify-center overflow-hidden  text-xs text-white text-center whitespace-nowrap transition duration-500 bg-red-500"
                role="progressbar"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
              <div
                className="w-full h-3 flex flex-col justify-center overflow-hidden text-xs text-white text-center whitespace-nowrap transition duration-500 bg-red-500"
                role="progressbar"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
              <div
                className="w-full h-3 flex flex-col justify-center overflow-hidde text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-neutral-700"
                role="progressbar"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
              <div
                className="w-full h-3 flex flex-col justify-center overflow-hidde text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-neutral-700"
                role="progressbar"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
              <div>
                <div className="w-10 text-end">
                  <span className="text-sm text-red-500 font-dmsans font-medium">
                    50%
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex flex-wrap justify-center items-center px-6 py-8">
              <div className="flex flex-col text-center">
                <h1 className="text-white text-3xl font-dmsans font-semibold">
                  <span className="text-red-500 text-3xl inline-flex items-center font-dmsans gap-2 font-semibold">
                    Pedido #eI6IPN
                  </span>{" "}
                </h1>

                <p className="py-2 text-[#fff9] font-dmsans font-normal inline-flex items-center gap-2 text-sm">
                  <BiCheck /> Confirme os produtos que você está comprando
                  abaixo:
                </p>
              </div>
            </div>

            <div className="flex w-full py-6 px-6 bg-neutral-900 rounded-xl items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-white font-dmsans font-medium text-lg">
                    Conta Full-Acesso
                  </h1>
                  <span className="text-red-500 font-dmsans font-medium">
                    R$399,99
                  </span>
                </div>
              </div>

              <h1 className="text-white font-dmsans font-medium text-md">
                1x <span className="text-red-500">(1 unidade)</span>
              </h1>
            </div>

            <div className=" flex flex-wrap justify-center items-center px-6 py-8">
              <div className="flex flex-col text-center">
                <h1 className="text-white text-3xl font-dmsans font-semibold">
                  <span className="text-white text-3xl inline-flex items-center font-dmsans gap-2 font-semibold">
                    Adicionais Ember
                  </span>{" "}
                </h1>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex w-full py-6 px-6 bg-neutral-900 rounded-xl items-center">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col items-start justify-center">
                    <h1 className="text-white font-dmsans font-medium text-lg inline-flex items-center gap-2 py-2">
                      <TbShield className="text-red-500" /> Garantia Estendida
                    </h1>
                    <p className="text-sm text-[#fff9] font-dmsans font-normal">
                      Você pode pagar um adicional e estender sua garantia caso
                      deseja uma segurança extra para sua conta.
                    </p>

                    <form className="w-full py-2 items-center">
                      <select
                        id="countries"
                        className="bg-neutral-950 text-white text-sm rounded-lg block w-full p-2.5"
                      >
                        <option selected>Garantia de 1 mês</option>
                        <option value="2month">
                          Garantia de 2 meses - R$15,99{" "}
                        </option>
                        <option value="2month">
                          Garantia de 3 meses - R$24,99{" "}
                        </option>
                        <option value="2month">
                          Garantia de 6 meses - R$39,99{" "}
                        </option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>

              <div className="flex w-full py-6 px-6 bg-neutral-900 rounded-xl items-center">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col items-start justify-center mb-4">
                    <h1 className="text-white font-dmsans font-medium text-lg inline-flex items-center gap-2 py-2">
                      <FaBolt className="text-red-500" /> Entrega Imediata
                    </h1>
                    <p className="text-sm text-[#fff9] font-dmsans font-normal">
                      Está com pressa para receber seu produto? Você pode pagar
                      um adicional para ter uma entrega priorizada.
                    </p>

                    <p className="inline-flex gap-2 items-center font-dmsans text-red-500 font-normal text-sm py-2">
                      {" "}
                      Este produto já é prioridade de entrega imediata.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center px-6 py-6">
              <h1 className="text-white font-poppins font-bold text-xl">
                R$399,99
              </h1>
              <Link
                href="/checkout/pagamento"
                className="py-3 px-12 bg-red-500 rounded-md text-sm inline-flex items-center gap-2 font-dmsans font-medium text-white transition duration-300 hover:bg-red-800"
              >
                Finalizar Compra <CgShoppingCart />{" "}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};
