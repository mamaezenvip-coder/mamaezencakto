import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('privacy.title')}</h1>
          <p className="text-muted-foreground mb-8">{t('privacy.lastUpdate')}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <p className="text-lg text-foreground/90 leading-relaxed">
                No Mamãe Zen, sua privacidade e a do seu bebê são prioridades absolutas. Esta política 
                explica de forma clara e simples como cuidamos das suas informações.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">✨ O Que Coletamos</h2>
              <p className="text-foreground/80 mb-4">
                Para oferecer a melhor experiência possível, coletamos apenas o essencial:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li><strong>Seu nome e e-mail</strong> - para criar sua conta e enviar atualizações importantes</li>
                <li><strong>Preferências do app</strong> - para personalizar sua experiência</li>
                <li><strong>Informação de pagamento</strong> - processada de forma 100% segura por plataformas certificadas (nunca temos acesso aos seus dados bancários)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">💝 Como Usamos</h2>
              <p className="text-foreground/80 mb-4">
                Suas informações são usadas exclusivamente para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Dar acesso aos módulos e funcionalidades do app</li>
                <li>Enviar conteúdos e atualizações importantes sobre maternidade</li>
                <li>Melhorar continuamente nossos recursos</li>
                <li>Oferecer suporte quando você precisar</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">🔒 Sua Segurança em Primeiro Lugar</h2>
              <p className="text-foreground/80 mb-4">
                <strong>Prometemos a você:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li><strong>Nunca venderemos seus dados</strong> - Jamais! Seu e-mail e informações pessoais são só suas</li>
                <li><strong>Criptografia de ponta</strong> - Todos os dados são protegidos com a mesma tecnologia usada por bancos</li>
                <li><strong>Compartilhamento mínimo</strong> - Só trabalhamos com parceiros confiáveis e certificados (processadores de pagamento)</li>
                <li><strong>Sem spam</strong> - Enviamos apenas conteúdo relevante e você pode cancelar a qualquer momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">🌟 Seus Direitos</h2>
              <p className="text-foreground/80 mb-4">
                Você tem controle total sobre seus dados:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li><strong>Acessar:</strong> Ver todas as informações que temos sobre você</li>
                <li><strong>Corrigir:</strong> Atualizar dados incorretos a qualquer momento</li>
                <li><strong>Excluir:</strong> Pedir a remoção completa da sua conta e dados</li>
                <li><strong>Exportar:</strong> Receber uma cópia de todas as suas informações</li>
              </ul>
              <p className="text-foreground/80 mt-4">
                Basta nos contatar e resolveremos em até 48 horas!
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">🍪 Cookies</h2>
              <p className="text-foreground/80">
                Usamos cookies apenas para melhorar sua experiência no app - como lembrar suas 
                preferências e facilitar o acesso. Nada de rastreamento invasivo ou publicidade direcionada.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">💬 Fale Conosco</h2>
              <p className="text-foreground/80 mb-4">
                Dúvidas sobre privacidade? Estamos aqui para ajudar!
              </p>
              <div className="bg-gradient-primary/10 p-6 rounded-lg border-2 border-primary/20">
                <p className="font-semibold mb-2 text-foreground">📧 E-mail:</p>
                <p className="text-foreground/80 mb-4">mamaezen.vip@gmail.com</p>
                <p className="font-semibold mb-2 text-foreground">💬 WhatsApp:</p>
                <p className="text-foreground/80 mb-4">+55 98 9 9172-2666</p>
                <p className="text-sm text-foreground/70">
                  Respondemos todas as mensagens em até 24 horas
                </p>
              </div>
            </section>

            <section className="bg-muted/50 p-6 rounded-lg">
              <p className="text-foreground/80">
                <strong>Em resumo:</strong> Coletamos o mínimo necessário, protegemos tudo com máxima segurança, 
                nunca vendemos seus dados e você tem controle total sobre suas informações. Simples assim! 💕
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

export default PrivacyPolicy;
