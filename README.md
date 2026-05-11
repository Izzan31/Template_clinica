# Site institucional para clínica odontológica

Projeto em Next.js, TypeScript e Tailwind CSS para uma clínica odontológica pequena, com visual profissional, rotas institucionais e foco em agendamento pelo WhatsApp.

## Rotas

```txt
/
/servicos
/servicos/avaliacao-odontologica
/servicos/limpeza
/servicos/clareamento
/servicos/implante
/servicos/aparelho
/servicos/urgencia-odontologica
/sobre
/agendamento
/contato
```

## Como rodar

Instale as dependências:

```bash
npm install
```

Rode em desenvolvimento:

```bash
npm run dev
```

Acesse:

```bash
http://localhost:3000
```

Valide antes de publicar:

```bash
npm run typecheck
npm run lint
npm run build
```

## Onde trocar dados da clínica

O arquivo principal de configuração é:

```txt
src/config/clinic.config.ts
```

Nele você altera:

- nome da clínica e iniciais do logo;
- cidade, estado, endereço e referências de localização;
- telefone, WhatsApp, e-mail e Instagram;
- URL pública do site, usada no SEO e no JSON-LD;
- horários de atendimento;
- responsável técnico e CRO;
- documentos profissionais e observação ética;
- cores da marca;
- imagens principais e placeholders fotográficos;
- serviços, categorias, textos, FAQs e mensagens de WhatsApp;
- link do Google Maps e iframe incorporado.

O componente `StructuredData` usa esses dados para gerar JSON-LD de negócio local do tipo `Dentist`.

## WhatsApp

O link é gerado em:

```txt
src/lib/whatsapp.ts
```

Use o número no formato internacional, somente com dígitos:

```ts
whatsappNumber: "5511999999999"
```

Cada serviço tem uma mensagem própria:

```ts
whatsappMessage: "Olá, vim pelo site e gostaria de agendar uma avaliação..."
```

A página `/agendamento` também usa essas mensagens para os botões rápidos.

## Serviços

Cada item em `services` gera uma página em:

```txt
/servicos/[slug]
```

Para adicionar um serviço, crie um novo item com:

- `slug`;
- `title`;
- `seoTitle`;
- `category`;
- `description`;
- `intro`;
- `whenIndicated`;
- `evaluation`;
- `benefits`;
- `faqs`;
- `whatsappMessage`;
- `icon`.

As categorias atuais do catálogo são:

- Prevenção;
- Estética;
- Reabilitação;
- Urgência.

## Google Maps

Para exibir um mapa incorporado:

1. Abra o endereço no Google Maps.
2. Clique em Compartilhar.
3. Selecione Incorporar mapa.
4. Copie apenas o valor do atributo `src` do iframe.
5. Cole em `mapsEmbedUrl` dentro de `src/config/clinic.config.ts`.

O botão "Abrir no Maps" usa `googleMapsUrl`.

## Imagens

O site usa placeholders fotográficos em `clinicConfig.images` e em cada serviço:

```ts
images: {
  hero: "https://images.pexels.com/...",
  clinic: "https://images.pexels.com/..."
}
```

Para usar fotos próprias, coloque os arquivos em `public/` e altere os caminhos:

```ts
hero: {
  imageSrc: "/fotos/hero.jpg"
}
```

Se usar outro domínio externo de imagem, adicione o domínio em `next.config.mjs`.

## Publicação

O projeto pode ser publicado em plataformas compatíveis com Next.js, como Vercel, Netlify ou servidor próprio Node.js.

Fluxo recomendado:

```bash
npm install
npm run typecheck
npm run lint
npm run build
```

Depois configure variáveis, domínio e deploy conforme a plataforma escolhida.

## Cuidados de conteúdo

O texto evita promessa de cura, resultado garantido, antes/depois e coleta desnecessária de dados sensíveis pelo WhatsApp. Antes de publicar, revise CRO, dados legais, autorizações de imagem/depoimento, política de convênios e regras aplicáveis do conselho regional.
