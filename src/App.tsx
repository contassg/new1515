import { Phone, FileText, Wifi, Zap, Shield, Clock } from 'lucide-react';

function App() {
  const whatsappNumber = '5511965157358';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const handleWhatsAppClick = (message: string) => {
    window.open(`${whatsappLink}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-red-600 text-white py-6 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Wifi className="w-10 h-10" />
            <h1 className="text-3xl font-bold">Claro</h1>
          </div>
          <button
            onClick={() => handleWhatsAppClick('Olá! Gostaria de mais informações sobre os planos Claro.')}
            className="flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            <Phone className="w-5 h-5" />
            Fale Conosco
          </button>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-red-600 to-red-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Internet Claro</h2>
          <p className="text-xl mb-8 text-red-50">Conecte-se ao que realmente importa com a melhor internet do Brasil</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => handleWhatsAppClick('Olá! Preciso solicitar a 2ª via da minha conta Claro.')}
              className="flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <FileText className="w-6 h-6" />
              2ª Via de Conta
            </button>
            <button
              onClick={() => handleWhatsAppClick('Olá! Gostaria de contratar um plano de internet Claro.')}
              className="flex items-center gap-2 bg-red-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-900 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <Wifi className="w-6 h-6" />
              Contratar Agora
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">Por que escolher a Claro?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-red-600">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-gray-800">Ultra Velocidade</h4>
              <p className="text-gray-600 leading-relaxed">
                Navegue, assista e jogue com velocidades de até 1 Giga. A internet mais rápida para você não perder nenhum momento.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-red-600">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-gray-800">Conexão Estável</h4>
              <p className="text-gray-600 leading-relaxed">
                Fibra ótica de última geração garante estabilidade e qualidade superior para toda sua família.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-red-600">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-gray-800">Suporte 24/7</h4>
              <p className="text-gray-600 leading-relaxed">
                Atendimento disponível 24 horas por dia, 7 dias por semana. Estamos sempre prontos para ajudar você.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">Conheça a Internet Claro</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img
                src="https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Internet de Fibra Ótica"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <h4 className="text-3xl font-bold text-red-600 mb-4">Fibra Ótica de Última Geração</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                A tecnologia de fibra ótica da Claro oferece velocidades incríveis, com latência reduzida e conexão ultra-estável. Perfeita para trabalhar em casa, estudar, assistir filmes em 4K e jogar online sem interrupções.
              </p>
              <div className="space-y-3 mt-6">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Velocidades de até 1 Gigabit por segundo</span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Conexão 100% segura e protegida</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Suporte técnico disponível 24/7</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 order-2 md:order-1">
              <h4 className="text-3xl font-bold text-red-600 mb-4">Streaming e Entretenimento Sem Limites</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Assista seus programas favoritos em qualidade 4K, ouça música em alta fidelidade e jogue com seus amigos ao redor do mundo. Com a internet Claro, não há limites para seu entretenimento.
              </p>
              <div className="space-y-3 mt-6">
                <div className="flex items-start gap-3">
                  <Wifi className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Wi-Fi Premium em toda sua casa</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Zero travamento e buffering</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Múltiplos dispositivos conectados simultaneamente</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/3587621/pexels-photo-3587621.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Entretenimento Online"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Precisa de Ajuda?</h3>
          <p className="text-xl mb-8 text-red-50">Fale conosco pelo WhatsApp agora mesmo!</p>
          <button
            onClick={() => handleWhatsAppClick('Olá! Preciso de ajuda com minha Claro.')}
            className="inline-flex items-center gap-3 bg-green-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
          >
            <Phone className="w-6 h-6" />
            WhatsApp: (11) 96515-7358
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Claro. Conectando você ao futuro.</p>
        </div>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50"
        aria-label="WhatsApp"
      >
        <Phone className="w-8 h-8" />
      </a>
    </div>
  );
}

export default App;
