import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-[#0f0f1a] text-white border-t border-white/10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="text-primary" size={24} />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                Mamãe Zen
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              App premium de maternidade. Tudo que você precisa para cuidar 
              do seu bebê com segurança e tranquilidade.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#tecnicas" className="hover:text-primary transition-colors">
                  Técnicas Exclusivas
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
            <h4 className="font-semibold text-white">Suporte</h4>
            <ul className="space-y-2 text-sm text-gray-400">
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
        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>© 2025 Mamãe Zen. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com ❤️ para mães do mundo todo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;