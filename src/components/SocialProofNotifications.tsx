import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

interface Notification {
  id: number;
  name: string;
  city: string;
  state: string;
  action: string;
}

const notifications: Omit<Notification, "id">[] = [
  { name: "Larissa", city: "São Luís", state: "MA", action: "acabou de gerar o Pix 😍" },
  { name: "Larissa", city: "São Luís", state: "MA", action: "teve pagamento confirmado via Pix, garantiu o vitalício que top 😍" },
  { name: "Karla Noemia", city: "Balsas", state: "MA", action: "tentou pagar 2 vezes, cartão recusado 😢" },
  { name: "Maria Silva", city: "Imperatriz", state: "MA", action: "acabou de gerar o Pix 😍" },
  { name: "Maria Silva", city: "Imperatriz", state: "MA", action: "pagamento confirmado via Pix, garantiu o vitalício 🎉" },
  { name: "Ana Paula", city: "Timon", state: "MA", action: "tentou pagar 2 vezes com cartão, que pena..." },
  { name: "Juliana Costa", city: "Caxias", state: "MA", action: "gerou o Pix agora mesmo 😍" },
  { name: "Juliana Costa", city: "Caxias", state: "MA", action: "Pix confirmado! Garantiu o vitalício que top 😍" },
  { name: "Patricia Santos", city: "Codó", state: "MA", action: "cartão foi recusado 2 vezes 💔" },
  { name: "Fernanda Lima", city: "Bacabal", state: "MA", action: "acabou de gerar o Pix 😍" },
  { name: "Fernanda Lima", city: "Bacabal", state: "MA", action: "pagamento via Pix confirmado, garantiu o vitalício 🎉" },
  { name: "Camila Rodrigues", city: "Pinheiro", state: "MA", action: "tentou 2 vezes pagar com cartão, negado 😔" },
  { name: "Beatriz Alves", city: "Pedreiras", state: "MA", action: "gerou o Pix agora 😍" },
  { name: "Beatriz Alves", city: "Pedreiras", state: "MA", action: "Pix confirmado! Vitalício garantido 🎉" },
  { name: "Roberta Sousa", city: "Chapadinha", state: "MA", action: "tentou pagar com Pix mas desistiu 😢" },
  { name: "Gabriela Lima", city: "São Luís", state: "MA", action: "acabou de gerar o Pix 😍" },
  { name: "Gabriela Lima", city: "São Luís", state: "MA", action: "Pix confirmado! Vitalício garantido que top 😍" },
  { name: "Renata Costa", city: "Imperatriz", state: "MA", action: "tentou pagar 2 vezes com cartão, que pena" },
  { name: "Amanda Oliveira", city: "São Paulo", state: "SP", action: "gerou o Pix agora 😍" },
  { name: "Amanda Oliveira", city: "São Paulo", state: "SP", action: "pagamento via Pix confirmado, garantiu o vitalício 🎉" },
  { name: "Bruna Martins", city: "Rio de Janeiro", state: "RJ", action: "acabou de gerar o Pix 😍" },
  { name: "Bruna Martins", city: "Rio de Janeiro", state: "RJ", action: "Pix confirmado! Acesso vitalício garantido 😍" },
  { name: "Carolina Ferreira", city: "Belo Horizonte", state: "MG", action: "tentou pagar 2 vezes com cartão, recusado 😢" },
  { name: "Daniela Santos", city: "Curitiba", state: "PR", action: "gerou o Pix 😍" },
  { name: "Daniela Santos", city: "Curitiba", state: "PR", action: "Pix pago! Garantiu o vitalício que top 😍" },
  { name: "Elaine Costa", city: "Porto Alegre", state: "RS", action: "acabou de gerar o Pix 😍" },
  { name: "Elaine Costa", city: "Porto Alegre", state: "RS", action: "pagamento confirmado via Pix, vitalício garantido 🎉" },
  { name: "Flávia Rocha", city: "Salvador", state: "BA", action: "tentou pagar com cartão 2 vezes, negado 💔" },
  { name: "Giovanna Alves", city: "Recife", state: "PE", action: "gerou o Pix agora 😍" },
  { name: "Giovanna Alves", city: "Recife", state: "PE", action: "Pix confirmado! Vitalício garantido 🎉" },
  { name: "Helena Lima", city: "Fortaleza", state: "CE", action: "acabou de gerar o Pix 😍" },
  { name: "Helena Lima", city: "Fortaleza", state: "CE", action: "pagamento via Pix confirmado, que top 😍" },
  { name: "Isabela Mendes", city: "Manaus", state: "AM", action: "tentou pagar 2 vezes, cartão recusado 😔" },
  { name: "Jéssica Ribeiro", city: "Brasília", state: "DF", action: "gerou o Pix 😍" },
  { name: "Jéssica Ribeiro", city: "Brasília", state: "DF", action: "Pix pago! Acesso vitalício garantido 🎉" },
  { name: "Kelly Souza", city: "Goiânia", state: "GO", action: "acabou de gerar o Pix 😍" },
  { name: "Kelly Souza", city: "Goiânia", state: "GO", action: "pagamento confirmado, vitalício garantido que top 😍" },
  { name: "Letícia Pinto", city: "Belém", state: "PA", action: "tentou pagar com Pix mas desistiu 😢" },
  { name: "Mariana Cardoso", city: "Vitória", state: "ES", action: "gerou o Pix agora 😍" },
  { name: "Mariana Cardoso", city: "Vitória", state: "ES", action: "Pix confirmado! Garantiu o vitalício 🎉" },
  { name: "Natália Freitas", city: "Florianópolis", state: "SC", action: "acabou de gerar o Pix 😍" },
  { name: "Natália Freitas", city: "Florianópolis", state: "SC", action: "pagamento via Pix confirmado, vitalício garantido 😍" },
  { name: "Olivia Barbosa", city: "Natal", state: "RN", action: "tentou pagar 2 vezes com cartão, recusado 😔" },
  { name: "Priscila Duarte", city: "João Pessoa", state: "PB", action: "gerou o Pix 😍" },
  { name: "Priscila Duarte", city: "João Pessoa", state: "PB", action: "Pix pago! Vitalício garantido que top 😍" },
  { name: "Raquel Moreira", city: "Aracaju", state: "SE", action: "acabou de gerar o Pix 😍" },
  { name: "Raquel Moreira", city: "Aracaju", state: "SE", action: "pagamento confirmado via Pix, garantiu o vitalício 🎉" },
  { name: "Sofia Araújo", city: "Maceió", state: "AL", action: "tentou pagar com cartão 2 vezes, negado 💔" },
  { name: "Tatiana Campos", city: "Teresina", state: "PI", action: "gerou o Pix agora 😍" },
  { name: "Tatiana Campos", city: "Teresina", state: "PI", action: "Pix confirmado! Acesso vitalício garantido 🎉" },
  { name: "Vanessa Nunes", city: "Palmas", state: "TO", action: "acabou de gerar o Pix 😍" },
  { name: "Vanessa Nunes", city: "Palmas", state: "TO", action: "pagamento via Pix confirmado, que top 😍" },
  { name: "Yasmin Teixeira", city: "Campo Grande", state: "MS", action: "tentou pagar 2 vezes, cartão recusado 😢" },
  { name: "Débora Castro", city: "Cuiabá", state: "MT", action: "gerou o Pix 😍" },
  { name: "Débora Castro", city: "Cuiabá", state: "MT", action: "Pix pago! Vitalício garantido 🎉" },
  { name: "Adriana Lopes", city: "Porto Velho", state: "RO", action: "acabou de gerar o Pix 😍" },
  { name: "Adriana Lopes", city: "Porto Velho", state: "RO", action: "pagamento confirmado, vitalício garantido 😍" },
  { name: "Bianca Cavalcanti", city: "Boa Vista", state: "RR", action: "tentou pagar com cartão 2 vezes, negado 😔" },
  { name: "Cristina Macedo", city: "Rio Branco", state: "AC", action: "gerou o Pix agora 😍" },
  { name: "Cristina Macedo", city: "Rio Branco", state: "AC", action: "Pix confirmado! Garantiu o vitalício que top 😍" },
  { name: "Denise Barros", city: "Macapá", state: "AP", action: "acabou de gerar o Pix 😍" },
  { name: "Denise Barros", city: "Macapá", state: "AP", action: "pagamento via Pix confirmado, vitalício garantido 🎉" },
  { name: "Eduarda Vieira", city: "Campinas", state: "SP", action: "tentou pagar com Pix mas desistiu 😢" },
  { name: "Fabiana Monteiro", city: "Santos", state: "SP", action: "gerou o Pix 😍" },
  { name: "Fabiana Monteiro", city: "Santos", state: "SP", action: "Pix pago! Acesso vitalício garantido 🎉" },
  { name: "Gisele Ramos", city: "Guarulhos", state: "SP", action: "acabou de gerar o Pix 😍" },
  { name: "Gisele Ramos", city: "Guarulhos", state: "SP", action: "pagamento confirmado via Pix, que top 😍" },
  { name: "Heloísa Silva", city: "Niterói", state: "RJ", action: "tentou pagar 2 vezes com cartão, recusado 💔" },
  { name: "Íris Pereira", city: "Duque de Caxias", state: "RJ", action: "gerou o Pix agora 😍" },
  { name: "Íris Pereira", city: "Duque de Caxias", state: "RJ", action: "Pix confirmado! Vitalício garantido 🎉" },
  { name: "Joana Correia", city: "Contagem", state: "MG", action: "acabou de gerar o Pix 😍" },
  { name: "Joana Correia", city: "Contagem", state: "MG", action: "pagamento via Pix confirmado, vitalício garantido 😍" },
  { name: "Karina Dias", city: "Uberlândia", state: "MG", action: "tentou pagar 2 vezes, cartão negado 😔" },
  { name: "Luana Gomes", city: "Londrina", state: "PR", action: "gerou o Pix 😍" },
  { name: "Luana Gomes", city: "Londrina", state: "PR", action: "Pix pago! Garantiu o vitalício que top 😍" },
  { name: "Mônica Ferraz", city: "Maringá", state: "PR", action: "acabou de gerar o Pix 😍" },
  { name: "Mônica Ferraz", city: "Maringá", state: "PR", action: "pagamento confirmado, vitalício garantido 🎉" },
  { name: "Nicole Amaral", city: "Caxias do Sul", state: "RS", action: "tentou pagar com cartão 2 vezes, recusado 😢" },
  { name: "Olívia Santana", city: "Pelotas", state: "RS", action: "gerou o Pix agora 😍" },
  { name: "Olívia Santana", city: "Pelotas", state: "RS", action: "Pix confirmado! Acesso vitalício garantido 🎉" },
  { name: "Paula Ribas", city: "Feira de Santana", state: "BA", action: "acabou de gerar o Pix 😍" },
  { name: "Paula Ribas", city: "Feira de Santana", state: "BA", action: "pagamento via Pix confirmado, que top 😍" },
  { name: "Queila Rocha", city: "Camaçari", state: "BA", action: "tentou pagar com Pix mas desistiu 😔" },
  { name: "Rafaela Mota", city: "Jaboatão", state: "PE", action: "gerou o Pix 😍" },
  { name: "Rafaela Mota", city: "Jaboatão", state: "PE", action: "Pix pago! Vitalício garantido 🎉" },
  { name: "Sabrina Coelho", city: "Olinda", state: "PE", action: "acabou de gerar o Pix 😍" },
  { name: "Sabrina Coelho", city: "Olinda", state: "PE", action: "pagamento confirmado, vitalício garantido 😍" },
  { name: "Talita Xavier", city: "Caucaia", state: "CE", action: "tentou pagar 2 vezes, cartão recusado 💔" },
  { name: "Úrsula Batista", city: "Juazeiro do Norte", state: "CE", action: "gerou o Pix agora 😍" },
  { name: "Úrsula Batista", city: "Juazeiro do Norte", state: "CE", action: "Pix confirmado! Garantiu o vitalício que top 😍" },
  { name: "Valéria Leite", city: "Aparecida de Goiânia", state: "GO", action: "acabou de gerar o Pix 😍" },
  { name: "Valéria Leite", city: "Aparecida de Goiânia", state: "GO", action: "pagamento via Pix confirmado, vitalício garantido 🎉" },
  { name: "Wanda Pires", city: "Anápolis", state: "GO", action: "tentou pagar 2 vezes com cartão, negado 😢" },
  { name: "Ximena Torres", city: "Santarém", state: "PA", action: "gerou o Pix 😍" },
  { name: "Ximena Torres", city: "Santarém", state: "PA", action: "Pix pago! Acesso vitalício garantido 🎉" },
  { name: "Yara Martins", city: "Marabá", state: "PA", action: "acabou de gerar o Pix 😍" },
  { name: "Yara Martins", city: "Marabá", state: "PA", action: "pagamento confirmado via Pix, que top 😍" },
  { name: "Zélia Fonseca", city: "São José dos Campos", state: "SP", action: "tentou pagar com cartão 2 vezes, recusado 💔" },
  { name: "Alice Rodrigues", city: "Ribeirão Preto", state: "SP", action: "gerou o Pix agora 😍" },
  { name: "Alice Rodrigues", city: "Ribeirão Preto", state: "SP", action: "Pix confirmado! Vitalício garantido 🎉" }
];

const SocialProofNotifications = () => {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [userCity, setUserCity] = useState<string>("");

  useEffect(() => {
    // Get user's location from IP
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        if (data.city) {
          setUserCity(data.city);
        }
      })
      .catch(() => {
        // If geolocation fails, continue with default notifications
      });
  }, []);

  useEffect(() => {
    let lastShownIndex: number | null = null;

    const showNotification = () => {
      // Prioritize notifications from user's city if available
      let availableNotifications = [...notifications];
      
      if (userCity) {
        const cityNotifications = notifications.filter(n => n.city === userCity);
        if (cityNotifications.length > 0) {
          availableNotifications = cityNotifications;
        }
      }

      let selectedIndex: number;
      
      // Se a última notificação foi de "gerar Pix" e existe uma próxima com o mesmo nome, mostrar ela
      if (lastShownIndex !== null && lastShownIndex < availableNotifications.length - 1) {
        const lastNotification = availableNotifications[lastShownIndex];
        const nextNotification = availableNotifications[lastShownIndex + 1];
        
        // Se o próximo tem o mesmo nome e é confirmação de pagamento, mostrar ele
        if (lastNotification.name === nextNotification.name && 
            lastNotification.action.includes("gerar o Pix") &&
            nextNotification.action.includes("confirmado")) {
          selectedIndex = lastShownIndex + 1;
        } else {
          // Senão, escolher aleatoriamente
          selectedIndex = Math.floor(Math.random() * availableNotifications.length);
        }
      } else {
        selectedIndex = Math.floor(Math.random() * availableNotifications.length);
      }

      lastShownIndex = selectedIndex;
      
      const selectedNotification = availableNotifications[selectedIndex];
      
      setCurrentNotification({
        ...selectedNotification,
        id: Date.now()
      });
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showNotification, 3000);

    // Show new notification every 15 seconds
    const interval = setInterval(showNotification, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [userCity]);

  if (!currentNotification || !isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-slide-in-left max-w-sm">
      <Card className="p-4 bg-background/95 backdrop-blur border-primary/20 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <span className="text-primary font-bold text-sm">
              {currentNotification.name.charAt(0)}
            </span>
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground">
              {currentNotification.name}
            </p>
            <p className="text-xs text-muted-foreground">
              de {currentNotification.city} - {currentNotification.state}
            </p>
            <p className="text-xs text-foreground mt-1">
              {currentNotification.action}
            </p>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </Card>
    </div>
  );
};

export default SocialProofNotifications;
