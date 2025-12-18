import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 px-4 border-b border-border">
        <div className="container mx-auto max-w-7xl">
          <Link to="/" className="flex items-center gap-2 w-fit">
            <Sparkles className="text-primary" size={28} />
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Mamãe Zen
            </h1>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('terms.title')}</h1>
          <p className="text-muted-foreground mb-8">{t('terms.lastUpdate')}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
              <p className="text-foreground/80">
                Ao acessar e usar o Mamãe Zen, você concorda com estes Termos de Uso. Se você não 
                concordar com qualquer parte destes termos, não utilize nosso aplicativo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Descrição do Serviço</h2>
              <p className="text-foreground/80 mb-4">
                O Mamãe Zen é um aplicativo premium que fornece:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Guias de cuidados básicos para bebês</li>
                <li>Informações sobre medicamentos seguros</li>
                <li>Orientações sobre desenvolvimento infantil e autismo</li>
                <li>Localização de hospitais pediátricos</li>
                <li>Áudios relaxantes para bebês</li>
                <li>E-books e recursos educacionais premium</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Isenção de Responsabilidade Médica</h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-lg">
                <p className="text-foreground/90 font-semibold mb-2">IMPORTANTE:</p>
                <p className="text-foreground/80">
                  O Mamãe Zen fornece informações educacionais e não substitui consultas médicas 
                  profissionais. Sempre consulte um pediatra ou profissional de saúde qualificado 
                  para diagnósticos, tratamentos e orientações específicas sobre a saúde do seu bebê.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Licença de Uso</h2>
              <p className="text-foreground/80 mb-4">
                Ao adquirir o acesso ao Mamãe Zen, concedemos a você uma licença:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Pessoal, intransferível e não exclusiva</li>
                <li>Vitalícia (enquanto o serviço estiver disponível)</li>
                <li>Para uso privado e não comercial</li>
                <li>Limitada a um usuário por licença</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Pagamento e Reembolso</h2>
              <p className="text-foreground/80 mb-4">
                <strong>Investimento:</strong> O acesso vitalício ao Mamãe Zen custa R$ 197,00 
                (pagamento único).
              </p>
              <p className="text-foreground/80 mb-4">
                <strong>Garantia de 7 Dias:</strong> Oferecemos garantia incondicional de 7 dias. 
                Se você não estiver satisfeita por qualquer motivo, entre em contato e faremos o 
                reembolso integral.
              </p>
              <p className="text-foreground/80">
                <strong>Processo de Reembolso:</strong> Envie um e-mail para mamaezen.vip@gmail.com 
                ou WhatsApp +55 98 9 9172-2666 dentro de 7 dias da compra.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Uso Proibido</h2>
              <p className="text-foreground/80 mb-4">
                Você concorda em NÃO:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Compartilhar sua conta ou credenciais com terceiros</li>
                <li>Copiar, reproduzir ou distribuir o conteúdo do app</li>
                <li>Usar o app para fins comerciais sem autorização</li>
                <li>Fazer engenharia reversa ou tentar extrair o código-fonte</li>
                <li>Usar o app de forma que viole leis ou regulamentos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Propriedade Intelectual</h2>
              <p className="text-foreground/80">
                Todo o conteúdo do Mamãe Zen, incluindo textos, imagens, áudios, vídeos, e-books 
                e código-fonte, é propriedade exclusiva ou licenciada para nós. Todos os direitos 
                são reservados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Atualizações e Modificações</h2>
              <p className="text-foreground/80">
                Reservamos o direito de modificar, atualizar ou descontinuar funcionalidades do 
                app a qualquer momento. Usuários com acesso vitalício continuarão tendo acesso ao 
                app enquanto ele estiver operacional.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Limitação de Responsabilidade</h2>
              <p className="text-foreground/80">
                O Mamãe Zen não se responsabiliza por decisões tomadas com base nas informações 
                fornecidas. Não garantimos resultados específicos e não nos responsabilizamos por 
                danos indiretos, incidentais ou consequenciais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Suporte ao Cliente</h2>
              <p className="text-foreground/80 mb-4">
                Oferecemos suporte 24/7 através de:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="font-semibold mb-2">E-mail:</p>
                <p className="text-foreground/80 mb-4">mamaezen.vip@gmail.com</p>
                <p className="font-semibold mb-2">WhatsApp:</p>
                <p className="text-foreground/80">+55 98 9 9172-2666</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Lei Aplicável</h2>
              <p className="text-foreground/80">
                Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida 
                no foro da comarca de São Luís, Maranhão, Brasil.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Alterações nos Termos</h2>
              <p className="text-foreground/80">
                Podemos atualizar estes Termos de Uso periodicamente. Continuando a usar o app 
                após as alterações, você aceita os novos termos.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link 
              to="/" 
              className="text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              ← Voltar para a página inicial
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUse;
