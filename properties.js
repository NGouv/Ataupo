export const properties = [
  {
    id: "casa-entre-rios",
    type: "Casa",
    name: "Casa Entre Rios",
    price: "R$ 680.000",
    area: "180 m²",
    characteristics: ["3 quartos", "2 vagas"],
    location: "Porto Velho · RO",
    description:
      "Exemplo fictício e demonstrativo. Os dados informados são 180 m², 3 quartos e 2 vagas. Descrição completa e localização específica não foram fornecidas.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=78",
    imageAlt: "Casa contemporânea com jardim e fachada iluminada",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=78",
        imageAlt: "Casa contemporânea com jardim e fachada iluminada",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=78",
        imageAlt: "Interior de casa contemporânea",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=78",
        imageAlt: "Sala de estar de uma casa contemporânea",
      },
    ],
  },
  {
    id: "ape-luz-do-madeira",
    type: "Apartamento",
    name: "Apê Luz do Madeira",
    price: "R$ 420.000",
    area: "92 m²",
    characteristics: ["2 quartos", "1 vaga"],
    location: "Porto Velho · RO",
    description:
      "Exemplo fictício e demonstrativo. Os dados informados são 92 m², 2 quartos e 1 vaga. Descrição completa e localização específica não foram fornecidas.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=78",
    imageAlt: "Sala de estar contemporânea com janelas amplas",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=78",
        imageAlt: "Sala de estar contemporânea com janelas amplas",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=78",
        imageAlt: "Sala de estar de apartamento",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=78",
        imageAlt: "Ambiente interno de apartamento",
      },
    ],
  },
  {
    id: "terreno-raizes",
    type: "Terreno",
    name: "Terreno Raízes",
    price: "R$ 195.000",
    area: "450 m²",
    characteristics: ["Espaço para imaginar"],
    location: "Porto Velho · RO",
    description:
      "Exemplo fictício e demonstrativo. O dado informado é a área de 450 m². Descrição completa, localização específica e outras características não foram fornecidas.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=78",
    imageAlt: "Terreno amplo com área verde sob a luz do fim de tarde",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=78",
        imageAlt: "Terreno amplo com área verde sob a luz do fim de tarde",
      },
      {
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=78",
        imageAlt: "Paisagem ampla de área verde",
      },
      {
        image:
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=78",
        imageAlt: "Área natural aberta ao entardecer",
      },
    ],
  },
];

export function getPropertyWhatsAppUrl(property) {
  const message = `Olá, Ataupo! Tenho interesse no imóvel demonstrativo ${property.name}.`;
  return `https://wa.me/5569993438033?text=${encodeURIComponent(message)}`;
}
