import { FaBolt } from "react-icons/fa6";
import { TbShield } from "react-icons/tb";
import { BiCheck, } from "react-icons/bi";
import { IoIosCheckbox } from "react-icons/io";
import Link from "next/link";
import { CgShoppingCart } from "react-icons/cg";
import { BsNewspaper } from "react-icons/bs";
import { Reveal } from "@/app/components/motion/RevealScroll";
import { LuBoxSelect } from "react-icons/lu";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { MdLocalOffer } from "react-icons/md";



const CheckoutPay = () => {
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

              <div>
                <div className="w-10 text-end">
                  <span className="text-sm text-red-500 font-dmsans font-medium">75%</span>
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
                  <BsNewspaper /> Está quase lá... Insira seus dados corretamente.
                </p>
              </div>

            </div>


            <div className="space-y-3">


              <div>
                <div className="sm:flex rounded-lg shadow-sm">
                  <input type="name" placeholder="Insira seu nome" className="py-3 px-4 pe-11 block w-full font-dmsans font-normal border-gray-200 sm:shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                  <span className="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">
                    <svg className="hidden sm:block size-4 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M8 3 4 7l4 4"></path>
                      <path d="M4 7h16"></path>
                      <path d="m16 21 4-4-4-4"></path>
                      <path d="M20 17H4"></path>
                    </svg>
                    <svg className="sm:hidden mx-auto size-4 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m3 16 4 4 4-4"></path>
                      <path d="M7 20V4"></path>
                      <path d="m21 8-4-4-4 4"></path>
                      <path d="M17 4v16"></path>
                    </svg>
                  </span>
                  <input type="last_name" placeholder="Insira seu sobrenome" className="py-3 px-4 pe-11 block w-full font-dmsans font-normal border-gray-200 sm:shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                </div>
              </div>
              <div>
                <div className="sm:flex rounded-lg shadow-sm">
                  <input type="born" placeholder="Data de Nascimento" className="py-3 px-4 pe-11 block w-full font-dmsans font-normal border-gray-200 sm:shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                  <span className="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">
                    <svg className="hidden sm:block size-4 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M8 3 4 7l4 4"></path>
                      <path d="M4 7h16"></path>
                      <path d="m16 21 4-4-4-4"></path>
                      <path d="M20 17H4"></path>
                    </svg>
                    <svg className="sm:hidden mx-auto size-4 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m3 16 4 4 4-4"></path>
                      <path d="M7 20V4"></path>
                      <path d="m21 8-4-4-4 4"></path>
                      <path d="M17 4v16"></path>
                    </svg>
                  </span>
                  <input type="cpf" placeholder="Seu CPF" className="py-3 px-4 pe-11 block w-full font-dmsans font-normal border-gray-200 sm:shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                </div>
              </div>
              <div>
                <div className="sm:flex rounded-lg shadow-sm">
                  <input type="country" placeholder="País de Origem" className="py-3 px-4 pe-11 block w-full font-dmsans font-normal border-gray-200 sm:shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                  <span className="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">
                    <svg className="hidden sm:block size-4 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M8 3 4 7l4 4"></path>
                      <path d="M4 7h16"></path>
                      <path d="m16 21 4-4-4-4"></path>
                      <path d="M20 17H4"></path>
                    </svg>
                    <svg className="sm:hidden mx-auto size-4 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m3 16 4 4 4-4"></path>
                      <path d="M7 20V4"></path>
                      <path d="m21 8-4-4-4 4"></path>
                      <path d="M17 4v16"></path>
                    </svg>
                  </span>
                  <input type="phone" placeholder="Número do Telefone" required className="py-3 px-4 pe-11 block w-full font-dmsans font-normal border-gray-200 sm:shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                </div>
              </div>
              <div>
                <div className="sm:flex rounded-lg shadow-sm">
                  <input type="email" placeholder="Seu e-mail" required className="py-3 px-4 pe-11 block w-full font-dmsans font-normal border-gray-200 sm:shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                  <span className="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">
                    <svg className="hidden sm:block size-4 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M8 3 4 7l4 4"></path>
                      <path d="M4 7h16"></path>
                      <path d="m16 21 4-4-4-4"></path>
                      <path d="M20 17H4"></path>
                    </svg>
                    <svg className="sm:hidden mx-auto size-4 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m3 16 4 4 4-4"></path>
                      <path d="M7 20V4"></path>
                      <path d="m21 8-4-4-4 4"></path>
                      <path d="M17 4v16"></path>
                    </svg>
                  </span>
                  <input type="discord" placeholder="Discord (opcional)" className="py-3 px-4 pe-11 block w-full font-dmsans font-normal border-gray-200 sm:shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                </div>
              </div>
            </div>

            <div className="flex flex-col text-center mx-auto py-6 px-6">
              <h1 className="text-white font-poppins font-bold text-3xl">Método de Pagamento</h1>
              <p className="text-sm text-[#fff9] font-dmsans font-normal">Para finalizar sua compra, selecione seu método de pagamento.</p>

            </div>

            <div className="grid sm:grid-cols-2 gap-2 items-center">
              <label htmlFor="hs-radio-on-right" className="flex p-3 w-full justify-between items-center rounded-lg text-sm bg-neutral-900  text-red-400 transition duration-300 hover:scale-95">
                <span className="text-sm font-dmsans font-normal text-[#fff9] inline-flex items-center gap-2"><img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F5dc23420da8ac043a4031153c442acf4.cdn.bubble.io%2Ff1698469658781x945862073620170100%2Fpix.png?w=96&h=48&auto=compress&dpr=1&fit=max"></img></span>
                <span className="bg-neutral-950 py-2 px-2 rounded-xl inline-flex items-center gap-2"><BiSolidSelectMultiple className="text-emerald-500" /></span>
              </label>

              <label htmlFor="hs-radio-on-right" className="flex p-3 w-full justify-between items-center rounded-lg text-sm bg-neutral-900  text-red-400 opacity-50">
                <span className="text-sm text-[#fff9] font-dmsans font-normal inline-flex gap-2 items-center"><img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F5dc23420da8ac043a4031153c442acf4.cdn.bubble.io%2Ff1712686712660x715767103509195300%2F2695969.png?w=96&h=48&auto=compress&dpr=1&fit=max" className="w-[34px] h-[34px]"></img>Cartão de Crédito (10% de juros)</span>

              </label>
            </div>

            <div className="flex flex-col w-full bg-neutral-900 mt-12 rounded-xl py-6 px-6">
              <h1 className="font-poppins font-bold text-white text-3xl px-2">Resumo da Compra</h1>

              <div className="flex w-full py-6 px-6 mt-4 bg-neutral-950 rounded-xl items-center justify-between">

                <div className="flex items-center gap-2">
                  <div className="flex flex-col items-start justify-center">
                    <h1 className="text-white font-dmsans font-medium text-lg">Conta Full-Acesso</h1>
                    <h1 className="text-white font-dmsans font-medium text-lg">Prazo de Entrega - <span className="text-red-500 font-dmsans font-medium">Entrega Imediata</span></h1>

                    <span className="text-red-500 font-dmsans font-medium">R$399,99</span>


                  </div>
                </div>

                <h1 className="text-white font-dmsans font-medium text-md">1x <span className="text-red-500">(1 unidade)</span></h1>


              </div>

              <div className="flex flex-col px-2 py-6">
                <h1 className="text-3xl text-white font-bold font-poppins px-2">R$ 399,99</h1>
                <div className="w-full py-2 space-y-3">


                  <div className="relative">
                    <input type="password" className="peer py-3 px-4 ps-11 block w-full bg-neutral-950 rounded-md" placeholder="Insira seu cupom de desconto" />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                      <MdLocalOffer className="text-red-500"/>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex fle-col w-full justify-between gap-4 py-6 px-4">
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox" />
                <label htmlFor="hs-default-checkbox" className="text-sm text-[#fff9] font-dmsans font-normal">Li e estou de acordo com os <Link href='tos' className="text-red-500">Termos de Serviço.</Link></label>
              </div>

              <Link href='/checkout/pagamento' className="py-3 px-12 bg-red-500 rounded-md text-sm inline-flex items-center gap-2 font-dmsans font-medium text-white transition duration-300 hover:bg-red-800">Finalizar Compra <CgShoppingCart /> </Link>
            </div>

          </div>
        </Reveal>
      </section>
    </>
  );
};

export default CheckoutPay;
