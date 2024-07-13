import { Reveal } from "@/components/motion/RevealScroll";
import { TiCalendar } from "react-icons/ti";

export const TermsOfServiceTemplate = () => {
  return (
    <>
      <section className="bg-black h-screen lg:py-12 py-6 px-6">
        <Reveal>
          <div className="flex flex-col justify-center items-center mx-auto group relative gap-1.5">
            <span className="inline-flex items-center gap-2 text-sm font-dmsans font-normal text-[#fff9]">
              <TiCalendar /> Atualizado em 24 de Junho, 2024
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins max-w-5xl flex items-center gap-1 mx-auto z-50">
              Termos de Serviço
            </h1>

            <p className="text-center text-md font-dmsans text-[#fff9] font-normal max-w-xl mx-auto ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              saepe perspiciatis dignissimos quia ipsum? Obcaecati ea numquam
              ipsum.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="w-full bg-[#111] border border-[#222] max-w-4xl mx-auto flex flex-col rounded-md h-fit py-6 px-6 mt-8">
            <div className="flex flex-col px-6 py-4">
              <h1 className="mb-4 text-4xl text-white font-dmsans font-semibold">
                Termos e Condições
              </h1>
              <p className="font-dmsans font-normal text-sm text-[#fff9]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
                magnam. Quo, nobis pariatur libero adipisci quas earum quibusdam
                id maxime! Officiis nemo neque, iure unde laborum harum officia
                accusamus? Totam!
              </p>
            </div>
            <div className="flex flex-col py-4 px-6">
              <div className="flex flex-col px-6 py-4">
                <h1 className="mb-4 text-4xl text-white font-dmsans font-semibold">
                  1. Políticas de Privacidade
                </h1>
                <p className="font-dmsans font-normal text-sm text-[#fff9]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quas, magnam. Quo, nobis pariatur libero adipisci quas earum
                  quibusdam id maxime! Officiis nemo neque, iure unde laborum
                  harum officia accusamus? Totam!
                </p>
              </div>
              <div className="flex flex-col px-6 py-4">
                <h1 className="mb-4 text-4xl text-white font-dmsans font-semibold">
                  2. Entrega do Produto
                </h1>
                <p className="font-dmsans font-normal text-sm text-[#fff9]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quas, magnam. Quo, nobis pariatur libero adipisci quas earum
                  quibusdam id maxime! Officiis nemo neque, iure unde laborum
                  harum officia accusamus? Totam!
                </p>
              </div>
              <div className="flex flex-col px-6 py-4">
                <h1 className="mb-4 text-4xl text-white font-dmsans font-semibold">
                  3. Chargeback (Reembolso)
                </h1>
                <p className="font-dmsans font-normal text-sm text-[#fff9]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quas, magnam. Quo, nobis pariatur libero adipisci quas earum
                  quibusdam id maxime! Officiis nemo neque, iure unde laborum
                  harum officia accusamus? Totam!
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};
