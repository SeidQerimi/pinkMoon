import { Product } from "../Product/Product";
import { SectionHeader } from "../shared/SectionHeader/SectionHeader";
import "./FeaturedProducts.css";

export const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "PRE-ORDER - Rose Quartz Gua Sha Facial Toolkit",
      price: 40,
      imageUrl:
        "https://pinkmoon.co/cdn/shop/products/PinkMoon_RoseQuartzGuaShaFacialTool_Angle1.jpg?v=1706059205&width=300",
    },
    {
      id: 2,
      name: "Over the Moon Gua Sha Facial Oil",
      price: 58,
      imageUrl:
        "https://pinkmoon.co/cdn/shop/products/PinkMoon_OvertheMoonGuaShaFacialOil_Angle3.jpg?v=1697582408&width=300",
    },
    {
      id: 3,
      name: "Midnight Melody® Perfume Oil | Intuition",
      price: 45,
      imageUrl:
        "https://pinkmoon.co/cdn/shop/products/PinkMoon_MidnightMelodyPerfumeOil_Angle2.jpg?v=1655429368&width=300",
    },
    {
      id: 4,
      name: "Whole Body Ritual Discovery Set",
      price: 75,
      imageUrl:
        "https://pinkmoon.co/cdn/shop/files/whole-body-ritual-main1.jpg?v=1727817603&width=300",
    },
  ];
  return (
    <section className="container feature-products">
      <SectionHeader
        title="Popular Essentials"
        description="
For Your Daily Self-Nourishment Rituals"
      />
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};
