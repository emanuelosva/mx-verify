import Footer from '@/components/footer'
import Header from '@/components/header'
import UrlValidator from "@/components/url-validator"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="w-full p-4 flex flex-col items-center justify-between">
        <section>
          <h2 className="w-full h-full text-4xl md:text-5xl text-center hightlight-text">
            Valida que las URLs del gobierno que visitas sean seguras
          </h2>
          <p className="w-full py-4 text-xl md:text-4xl text-center hightlight-text">
            Evita caer en estafas, antes de realizar un pago o trámite, valida que lo haces desde un sitio oficial.
          </p>
        </section>
        <section className="w-full max-w-[800px] py-10 px-4">
          <UrlValidator />
        </section>
        <section className="p-4 md:mt-16 md:text-center text-sm md:text-lg">
          <p>Esta página no es un sitio oficial del gobierno de México, ni de ninguna otra institución pública o privada.</p>
          <p>La intención de este proyecto es ayudar a las personas a evitar caer en estafas mientras hacen pagos o trámites oficiales.</p>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
