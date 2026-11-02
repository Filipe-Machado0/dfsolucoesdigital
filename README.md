# DF Soluções Digitais | DF Digital

Landing page institucional moderna, tecnológica e de alta conversão para a agência **DF Soluções Digitais**.

Desenvolvida com foco em autoridade digital, experiência do usuário (UI/UX) refinada e conversão direta para o WhatsApp, apresentando um **Catálogo Interativo de Serviços** e comunicação 100% ética e transparente.

---

## 🚀 Tecnologias Utilizadas

- **[React](https://react.dev/)**
- **[Vite](https://vitejs.dev/)**
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[Framer Motion](https://www.framer.com/motion/)**
- **[Lucide React](https://lucide.dev/)**
- **Google Fonts** (Montserrat & Poppins)

---

## ✨ Funcionalidades e Diferenciais

- **Identidade Visual Dark Mode**:
  - Paleta refinada com fundo escuro profundo (`#030712`), realces em Azul Neon (`#00f0ff`) e Azul Celeste (`#0284c7`), com efeitos de glow e iluminação orbital.
  - Tipografia de alto impacto (*Black / Bold Italic*).
- **Catálogo Interativo de Serviços**:
  - Filtros dinâmicos por categoria (*Todos*, *Sites & Landing Pages*, *Tráfego Pago*, *Marketing Digital*).
  - Modal imersivo com detalhamento de entregáveis técnicos, público-alvo, processo de 4 etapas e botão de orçamento personalizado.
- **Posicionamento Ético & Transparente**:
  - Sem promessas falsas de ROAS ou métricas irreais.
  - Foco em *"Buscando Sempre o Melhor Retorno"*, valorizando o alinhamento de expectativas e a seriedade da agência.
- **Integração com WhatsApp**:
  - CTAs estratégicos que abrem mensagens pré-formatadas para facilitar o atendimento imediato dos leads.
  - Widget flutuante com indicador de status online e badge oficial.
- **Responsividade Total**:
  - Layout otimizado para celulares, tablets e desktops (Mobile First).

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- Gerenciador de pacotes `npm`

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Filipe-Machado0/dfsolucoesdigital.git
cd dfsolucoesdigital
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
Acesse `http://localhost:5173` no seu navegador.

---

## 📦 Build para Produção

Para gerar a versão otimizada para publicação:
```bash
npm run build
```
Os arquivos minificados e otimizados estarão disponíveis na pasta `dist/`.

---

## 📁 Estrutura do Projeto

```text
├── public/                 # Imagens estáticas e logotipo oficial
│   ├── logo.png
│   └── logo-white.png
├── src/
│   ├── components/         # Componentes modulares da landing page
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── AboutUs.jsx
│   │   ├── Results.jsx
│   │   ├── FinalCTA.jsx
│   │   ├── Footer.jsx
│   │   └── FloatingWhatsApp.jsx
│   ├── data/               # Dados do catálogo e conteúdos estruturados
│   │   ├── servicesData.js
│   │   ├── faqData.js
│   │   └── testimonialsData.js
│   ├── App.jsx             # Componente raiz
│   ├── index.css           # Configurações do Tailwind e estilos customizados
│   └── main.jsx            # Ponto de entrada do React
├── index.html              # HTML com Favicon oficial e Google Fonts
├── tailwind.config.js      # Tema e cores customizadas
└── vite.config.js          # Configuração do Vite
```

---

© DF Soluções Digitais. Todos os direitos reservados.
