# Manual IOTHUB - SMART RÉGUA (Astro + Starlight)

Documentação da plataforma IOTHUB com foco na funcionalidade SMART RÉGUA, desenvolvida com Astro e Starlight.

## Requisitos

- Node.js 16 ou superior
- npm ou yarn

## Instalação

```bash
# Instalar dependências
npm install
```

## Desenvolvimento Local

```bash
# Iniciar servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:4321`

## Construção para Produção

```bash
# Construir o site para produção
npm run build
```

## Estrutura do Projeto

```
/
├── public/              # Arquivos estáticos
├── src/
│   ├── assets/          # Imagens e outros recursos
│   ├── content/
│   │   └── docs/        # Arquivos de documentação em Markdown
│   └── styles/          # Arquivos CSS personalizados
└── astro.config.mjs     # Configuração do Astro
```

## Tecnologias

- [Astro](https://astro.build/) - Framework web moderno
- [Starlight](https://starlight.astro.build/) - Sistema de documentação
- TypeScript - Tipagem estática
- CSS Personalizado - Temas customizados