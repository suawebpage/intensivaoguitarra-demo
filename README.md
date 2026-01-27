# 🎸 Landing Page - Intensivão de Guitarra

Landing page moderna e responsiva para curso intensivo de guitarra elétrica, desenvolvida com HTML5, CSS3 e JavaScript vanilla.

## 📋 Características

### ✨ Funcionalidades
- **Countdown Timer**: Contador regressivo fixo no topo da página
- **Hero Section**: Seção principal com CTA para scroll suave
- **Animações on Scroll**: Elementos aparecem suavemente ao rolar a página
- **Design Responsivo**: Adaptável para todos os dispositivos
- **Smooth Scroll**: Navegação suave entre seções
- **Parallax Effect**: Efeito parallax no background do hero (desktop)
- **Performance Otimizada**: Uso de Intersection Observer API

### 🎨 Seções da Página
1. **Hero** - Apresentação principal com CTA
2. **O que é o Intensivão** - Descrição do curso
3. **Para quem é** - Público-alvo
4. **Cronograma** - Programação de 7 dias
5. **Benefícios** - Vantagens do curso
6. **Depoimentos** - Feedbacks de alunos
7. **Garantia** - Política de satisfação
8. **FAQ** - Perguntas frequentes
9. **CTA Final** - Botões de conversão
10. **Footer** - Informações de contato

## 📁 Estrutura de Arquivos

```
projeto/
├── index.html
├── assets/
│   ├── css/
│   │   ├── init-reset.css      # Reset e variáveis CSS
│   │   ├── styles.css          # Estilos principais
│   │   └── responsive.css      # Media queries
│   ├── js/
│   │   ├── contador.js         # Countdown timer
│   │   └── scroll-effects.js   # Animações de scroll
│   └── img/
│       ├── electric-guitar-and-ampli-mobile-M2.jpg
│       ├── electric-guitar-and-ampli-desk-GRANDE.jpg
│       ├── guitar-player.jpg
│       └── guitar-close.jpg
└── README.md
```

## 🚀 Como Usar

### 1. Configuração Básica
1. Clone ou baixe todos os arquivos
2. Mantenha a estrutura de pastas intacta
3. Adicione suas imagens na pasta `assets/img/`

### 2. Personalização

#### Alterar Informações de Contato
No arquivo `index.html`, localize e altere:

```html
<!-- WhatsApp -->
<a href="https://wa.me/5599999999999">

<!-- Formulário de Inscrição -->
<a href="https://forms.gle/SEU_FORM_AQUI">

<!-- Email -->
<a href="mailto:contato@intensivaoguitarra.com">
```

#### Configurar Countdown
No arquivo `assets/js/contador.js`:

```javascript
// Definir data final (exemplo: 31 de janeiro às 23:59)
const endDate = new Date('2026-01-31T23:59:59');
```

#### Alterar Cores
No arquivo `assets/css/init-reset.css`:

```css
:root {
    --white: #e4e4e4;
    --gradient-red: linear-gradient(90deg, #6a0000, #8d0000, #6a0000);
    --dark-bg: #0d0d0d;
}
```

### 3. Adicionar Imagens

Coloque as seguintes imagens na pasta `assets/img/`:

- `electric-guitar-and-ampli-mobile-M2.jpg` - Hero mobile (800x1200px recomendado)
- `electric-guitar-and-ampli-desk-GRANDE.jpg` - Hero desktop (1920x1080px recomendado)
- `guitar-player.jpg` - Imagem do guitarrista (600x800px recomendado)
- `guitar-close.jpg` - Detalhe da guitarra (800x800px recomendado)

## 🎯 Recursos Técnicos

### CSS
- **Variáveis CSS**: Fácil customização de cores e espaçamentos
- **Flexbox & Grid**: Layout moderno e responsivo
- **Animações CSS**: Transições suaves e efeitos visuais
- **Media Queries**: Suporte para todos os tamanhos de tela

### JavaScript
- **Intersection Observer**: Detecção eficiente de elementos na viewport
- **RequestAnimationFrame**: Animações otimizadas
- **Event Listeners**: Interatividade responsiva
- **Smooth Scroll**: Navegação suave entre seções

### Performance
- ✅ Lazy loading de animações
- ✅ Otimização para mobile
- ✅ CSS minificável
- ✅ JavaScript modular
- ✅ Imagens otimizadas recomendadas

## 📱 Responsividade

### Breakpoints Principais
- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop Pequeno**: 769px - 1024px
- **Desktop**: > 1024px
- **Ultra Wide**: > 1920px

### Recursos Responsivos
- Tipografia fluida com `clamp()`
- Grids adaptativos
- Imagens responsivas
- Menu e navegação otimizados
- Touch-friendly em dispositivos móveis

## 🎨 Customização Avançada

### Adicionar Nova Seção

1. No `index.html`:
```html
<section id="nova-secao">
    <div class="nova-container fade-on-scroll">
        <h2>Título da Nova Seção</h2>
        <p>Conteúdo aqui...</p>
    </div>
</section>
```

2. No `assets/css/styles.css`:
```css
#nova-secao {
    background: var(--dark-bg);
    padding: 100px 20px;
    color: var(--white);
}

.nova-container {
    max-width: 1200px;
    margin: auto;
}
```

### Modificar Animações

No `assets/css/styles.css`, ajuste:

```css
.fade-on-scroll {
    opacity: 0;
    transform: translateY(40px); /* Mude para translateX() para horizontal */
    transition: opacity 0.8s ease, transform 0.8s ease;
}
```

## 🔧 Manutenção

### Atualizar Conteúdo
- **Textos**: Edite diretamente no `index.html`
- **Estilos**: Modifique `assets/css/styles.css`
- **Comportamento**: Ajuste `assets/js/scroll-effects.js`

### Adicionar Novas Cores
```css
:root {
    --nova-cor: #valor;
}
```

### Adicionar Fontes do Google
No `<head>` do `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=SuaFonte&display=swap" rel="stylesheet">
```

## 🌐 Compatibilidade

### Navegadores Suportados
- ✅ Chrome (últimas 2 versões)
- ✅ Firefox (últimas 2 versões)
- ✅ Safari (últimas 2 versões)
- ✅ Edge (últimas 2 versões)
- ✅ Opera (últimas 2 versões)

### Recursos Modernos Utilizados
- CSS Grid & Flexbox
- CSS Variables
- Intersection Observer API
- Smooth Scroll
- CSS Animations

## 📝 Checklist de Deploy

- [ ] Substituir todos os links de contato
- [ ] Adicionar todas as imagens otimizadas
- [ ] Configurar countdown para data correta
- [ ] Testar em diferentes dispositivos
- [ ] Validar HTML (W3C Validator)
- [ ] Testar todos os botões e links
- [ ] Verificar performance (Lighthouse)
- [ ] Testar carregamento de imagens
- [ ] Verificar meta tags e SEO
- [ ] Testar formulários e integrações

## 🎓 Melhores Práticas

1. **Otimize Imagens**
   - Comprima todas as imagens (TinyPNG, ImageOptim)
   - Use WebP quando possível
   - Tamanhos recomendados especificados acima

2. **Performance**
   - Minimize CSS e JS para produção
   - Use CDN para hospedagem
   - Ative compressão GZIP no servidor

3. **SEO**
   - Adicione meta description
   - Use heading tags hierarquicamente
   - Adicione alt text em todas as imagens

4. **Acessibilidade**
   - Mantenha contraste adequado
   - Use labels em formulários
   - Teste com leitores de tela

## 📞 Suporte

Para dúvidas ou problemas:
- 📧 Email: contato@intensivaoguitarra.com
- 📱 WhatsApp: (XX) XXXXX-XXXX

## 📄 Licença

Este projeto é de uso livre para fins educacionais e comerciais.

---

**Desenvolvido com ❤️ para guitarristas apaixonados** 🎸
