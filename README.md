# ⚖️ Site Profissional - Rafael Diovani Advogado

Um website moderno, profissional e responsivo desenvolvido em React + Vite para um advogado autônomo. O site transmite confiança, autoridade e clareza nos serviços jurídicos.

## 🎯 Características Principais

✅ **Design Moderno e Profissional**
- Paleta de cores sofisticada (verde escuro, médio e claro)
- Tipografia elegante com fontes serifadas e sans-serif
- Animações suaves e transições fluidas
- Padrão decorativo em xadrez (tema de estratégia jurídica)

✅ **Responsivo (Mobile-First)**
- Design adaptável para todos os dispositivos
- Menu mobile com navegação intuitiva
- Otimizado para tablets e desktops

✅ **Funcionalidades**
- Navegação com React Router
- Formulário de contato funcional
- Botão flutuante de WhatsApp
- Scroll suave entre seções
- SEO básico implementado

✅ **Componentes Reutilizáveis**
- Header com logo e navegação
- Footer com informações de contato
- Hero Section com CTA
- Service Cards com ícones
- Testimonial Cards com avaliações
- Contact Form validado
- FloatingWhatsApp button

## 📁 Estrutura do Projeto

```
lawyer-website/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── CTASection.jsx
│   │   ├── ContactForm.jsx
│   │   ├── FloatingWhatsApp.jsx
│   │   └── *.module.css      # Estilos CSS Modules
│   │
│   ├── pages/               # Páginas da aplicação
│   │   ├── Home.jsx         # Página inicial
│   │   ├── About.jsx        # Sobre o advogado
│   │   ├── Services.jsx     # Áreas de atuação
│   │   ├── ServiceDetail.jsx # Detalhe do serviço
│   │   ├── Team.jsx         # Perfil do advogado
│   │   ├── Contact.jsx      # Página de contato
│   │   └── *.module.css     # Estilos específicos
│   │
│   ├── styles/
│   │   └── global.css       # Estilos globais e variáveis CSS
│   │
│   ├── App.jsx              # Componente principal com rotas
│   ├── App.module.css       # Estilos do App
│   ├── main.jsx             # Entrada da aplicação
│   └── index.css            # Estilos base
│
├── public/                  # Arquivos estáticos
├── package.json
├── vite.config.js
└── index.html
```

## 📄 Páginas Disponíveis

### 1. **Home** (`/`)
- Hero com frase de autoridade e CTA
- Seção de áreas de atuação
- Estatísticas (anos de experiência, casos atendidos)
- Depoimentos de clientes
- CTA final forte

### 2. **Sobre** (`/sobre`)
- História profissional
- Formação acadêmica
- Especialidades detalhadas
- 6 diferenciais principais

### 3. **Serviços** (`/servicos`)
- Cards das 3 áreas de atuação
- Benefícios de contratar os serviços
- CTA para consulta

### 4. **Detalhe do Serviço** (`/servicos/:serviceId`)
- Visão geral completa do serviço
- Problemas que resolve
- Soluções oferecidas
- Processo passo a passo
- Disponível para: direito-civil, direito-trabalhista, direito-previdenciario

### 5. **Equipe** (`/equipe`)
- Perfil do advogado com padrão de xadrez
- Credenciais e formação
- Especialidades
- Informações de contato
- 6 razões para trabalhar com ele

### 6. **Contato** (`/contato`)
- Formulário de contato (nome, email, mensagem)
- Informações de contato (telefone, email, WhatsApp)
- FAQ com 6 perguntas frequentes
- Horário de atendimento

## 🎨 Paleta de Cores

```css
Verde escuro (principal):    #1B4332
Verde médio:                 #2D6A4F
Verde claro:                 #95D5B2
Bege claro (background):     #F8F9FA
Branco:                      #FFFFFF
Cinza escuro (texto):        #2B2B2B
```

## 🚀 Como Usar

### 1. Instalação

```bash
# Navegar para o diretório do projeto
cd lawyer-website

# Instalar dependências (já feito, mas em caso de necessidade)
npm install
```

### 2. Desenvolvimento

```bash
# Rodar servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`

### 3. Build para Produção

```bash
# Gerar build otimizado
npm run build

# Visualizar build de produção
npm run preview
```

Os arquivos otimizados estarão em `dist/`

## 📦 Dependências

- **React 18+** - Biblioteca UI
- **React Router Dom** - Roteamento
- **Vite** - Build tool moderno
- **Lucide React** - Ícones modernos

## 🔧 Customização

### Alterar Dados do Advogado

Edite os dados nos seguintes arquivos:

**Footer** (`src/components/Footer.jsx`)
```javascript
href="tel:+5511999999999"        // Alterar telefone
href="mailto:contato@email.com"  // Alterar email
href="https://wa.me/55..."       // Alterar WhatsApp
```

**FloatingWhatsApp** (`src/components/FloatingWhatsApp.jsx`)
```javascript
const whatsappNumber = '5511999999999';  // Alterar número
```

**Conteúdo das Páginas**
- Edite diretamente nos arquivos `.jsx` das páginas
- Os dados dos serviços estão em `ServiceDetail.jsx`
- As estatísticas estão em `Home.jsx`

### Alterar Cores

Edite `src/styles/global.css`:

```css
:root {
  --color-primary: #1B4332;           /* Cor principal */
  --color-primary-medium: #2D6A4F;    /* Cor secundária */
  --color-primary-light: #95D5B2;     /* Cor terciária */
  /* ... outras cores */
}
```

## 📱 Responsividade

O site é **100% responsivo** com breakpoints em:
- **Desktop**: 1200px e acima
- **Tablet**: 769px - 1199px
- **Mobile**: 768px e abaixo

## ⚡ Performance

- Build otimizado com Vite
- CSS Modules para estilos isolados
- Animações com GPU acceleration
- Imagens otimizadas
- Código minificado em produção

## 🌐 Deploy

O projeto pode ser deployed em:
- **Vercel** (recomendado para Vite)
- **Netlify**
- **GitHub Pages**
- **Qualquer servidor com suporte a Node.js**

### Deploy no Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

## 📞 Contato e Suporte

Para questões sobre o website ou customizações adicionais, entre em contato com o desenvolvedor.

---

**Desenvolvido com ❤️ usando React + Vite**
