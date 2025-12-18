import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-foreground text-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="text-primary" size={24} />
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Mamãe Zen
              </h3>
            </div>
            <p className="text-background/70 text-sm">
              App premium de maternidade. Tudo que você precisa para cuidar 
              do seu bebê com segurança e tranquilidade.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#modulos" className="hover:text-primary transition-colors">
                  Módulos
                </a>
              </li>
              <li>
                <a href="#oferta" className="hover:text-primary transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="/privacidade" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/termos" className="hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Suporte</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="mailto:mamaezen.vip@gmail.com" className="hover:text-primary transition-colors">
                  📧 mamaezen.vip@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5598991722666" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  💬 WhatsApp: +55 98 9 9172-2666
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/app_mamae_zen/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  📱 Instagram: @app_mamae_zen
                </a>
              </li>
              <li>⏰ Atendimento: 24/7</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/70">
          <p>© 2025 Mamãe Zen. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com ❤️ para mães do mundo todo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
