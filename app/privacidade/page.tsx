import Link from "next/link";

import { siteConfig } from "@/config/site";

import Synapse from "../../components/logos/synapse";
import { Section } from "../../components/ui/section";

export const metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade do Synapse.",
};

export default function PrivacidadePage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <Synapse />
            {siteConfig.name}
          </Link>
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground text-sm font-medium"
          >
            Voltar ao início
          </Link>
        </div>
      </header>

      <Section className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight">
          Política de Privacidade
        </h1>
        <p className="text-muted-foreground mt-2">
          Última atualização: 1 de fevereiro de 2026
        </p>

        <div className="prose prose-neutral dark:prose-invert mt-8 space-y-6 text-muted-foreground">
          <section>
            <p className="leading-relaxed">
              A sua privacidade é importante para nós. É política do Synapse
              respeitar a sua privacidade em relação a qualquer informação sua
              que possamos coletar no site Synapse, e outros sites que possuímos
              e operamos.
            </p>
            <p className="mt-4 leading-relaxed">
              Solicitamos informações pessoais apenas quando realmente
              precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios
              justos e legais, com o seu conhecimento e consentimento. Também
              informamos por que estamos coletando e como será usado.
            </p>
            <p className="mt-4 leading-relaxed">
              Apenas retemos as informações coletadas pelo tempo necessário para
              fornecer o serviço solicitado. Quando armazenamos dados,
              protegemos dentro de meios comercialmente aceitáveis para evitar
              perdas e roubos, bem como acesso, divulgação, cópia, uso ou
              modificação não autorizados.
            </p>
            <p className="mt-4 leading-relaxed">
              Não compartilhamos informações de identificação pessoal
              publicamente ou com terceiros, exceto quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold">
              Links externos
            </h2>
            <p className="leading-relaxed">
              O nosso site pode ter links para sites externos que não são
              operados por nós. Esteja ciente de que não temos controle sobre o
              conteúdo e práticas desses sites e não podemos aceitar
              responsabilidade por suas respectivas políticas de privacidade.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold">
              Recusa e aceitação
            </h2>
            <p className="leading-relaxed">
              Você é livre para recusar a nossa solicitação de informações
              pessoais, entendendo que talvez não possamos fornecer alguns dos
              serviços desejados.
            </p>
            <p className="mt-4 leading-relaxed">
              O uso continuado de nosso site será considerado como aceitação de
              nossas práticas em torno de privacidade e informações pessoais. Se
              você tiver alguma dúvida sobre como lidamos com dados do usuário e
              informações pessoais, entre em contacto connosco.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold">
              Publicidade e cookies
            </h2>
            <p className="leading-relaxed">
              O serviço Google AdSense que usamos para veicular publicidade usa
              um cookie DoubleClick para veicular anúncios mais relevantes em
              toda a Web e limitar o número de vezes que um determinado anúncio é
              exibido para você.
            </p>
            <p className="mt-4 leading-relaxed">
              Para mais informações sobre o Google AdSense, consulte as FAQs
              oficiais sobre privacidade do Google AdSense.
            </p>
            <p className="mt-4 leading-relaxed">
              Utilizamos anúncios para compensar os custos de funcionamento
              deste site e fornecer financiamento para futuros desenvolvimentos.
              Os cookies de publicidade comportamental usados por este site
              foram projetados para garantir que você forneça os anúncios mais
              relevantes sempre que possível, rastreando anonimamente seus
              interesses e apresentando coisas semelhantes que possam ser do seu
              interesse.
            </p>
            <p className="mt-4 leading-relaxed">
              Vários parceiros anunciam em nosso nome e os cookies de
              rastreamento de afiliados simplesmente nos permitem ver se nossos
              clientes acessaram o site através de um dos sites de nossos
              parceiros, para que possamos creditá-los adequadamente e, quando
              aplicável, permitir que nossos parceiros afiliados ofereçam
              qualquer promoção que possa fornecê-lo para fazer uma compra.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold">
              Compromisso do Usuário
            </h2>
            <p className="leading-relaxed">
              O usuário se compromete a fazer uso adequado dos conteúdos e da
              informação que o Synapse oferece no site e com caráter enunciativo,
              mas não limitativo:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-foreground">A)</strong> Não se envolver
                em atividades que sejam ilegais ou contrárias à boa fé e à
                ordem pública;
              </li>
              <li>
                <strong className="text-foreground">B)</strong> Não difundir
                propaganda ou conteúdo de natureza racista, xenofóbica, jogos de
                sorte ou azar, qualquer tipo de pornografia ilegal, de apologia
                ao terrorismo ou contra os direitos humanos;
              </li>
              <li>
                <strong className="text-foreground">C)</strong> Não causar danos
                aos sistemas físicos (hardwares) e lógicos (softwares) do
                Synapse, de seus fornecedores ou terceiros, para introduzir ou
                disseminar vírus informáticos ou quaisquer outros sistemas de
                hardware ou software que sejam capazes de causar danos
                anteriormente mencionados.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold">
              Mais informações
            </h2>
            <p className="leading-relaxed">
              Esperemos que esteja esclarecido e, como mencionado anteriormente,
              se houver algo que você não tem certeza se precisa ou não,
              geralmente é mais seguro deixar os cookies ativados, caso interaja
              com um dos recursos que você usa em nosso site.
            </p>
            <p className="mt-4 leading-relaxed">
              Esta política é efetiva a partir de 1 de fevereiro de 2026.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold">Contato</h2>
            <p className="leading-relaxed">
              Dúvidas sobre esta política:{" "}
              <a
                href={siteConfig.links.email}
                className="text-foreground underline hover:no-underline"
              >
                {siteConfig.links.email.replace("mailto:", "")}
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-wrap gap-6">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground text-sm font-medium"
          >
            ← Voltar ao início
          </Link>
          <Link
            href={siteConfig.termsOfUseUrl}
            className="text-muted-foreground hover:text-foreground text-sm font-medium"
          >
            Termos de Uso
          </Link>
        </div>
      </Section>
    </main>
  );
}
