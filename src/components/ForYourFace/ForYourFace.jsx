import { SectionHeader } from "../shared/SectionHeader/SectionHeader";

// export const ForYourFace = () => {
//   return (
//     <section className="container">
//       <SectionHeader
//         title="For your face"
//         description="
// Skincare products to support every skin mood, phase of life, and lifestyle"
//       />
//     </section>
//   );
// };

import "./ForYourFace.css";

export const ForYourFace = () => {
  return (
    <section className="container for-your-face">
      <SectionHeader
        title="For your face"
        description="
          Skincare products to support every skin mood, phase of life, and lifestyle"
      />
      <div className="for-your-face-content">
        <img
          src="https://pinkmoon.co/cdn/shop/files/Feature_Image.png?v=1690816065"
          alt="Main skincare product"
          className="face-main-image"
        />
        <div className="face-gallery">
          <div className="gallery-row">
            <img
              src="https://pinkmoon.co/cdn/shop/files/card-sub-category-cleaners_66b06161-cd84-445f-8bbb-fe16c870779f.png?v=1698797057%20width="
              alt="Product 1"
            />
            <img
              src="https://pinkmoon.co/cdn/shop/files/card-sub-category-serums.png?v=1698797371%20width="
              alt="Product 2"
            />
          </div>
          <div className="gallery-row">
            <img
              src="https://pinkmoon.co/cdn/shop/files/card-sub-category-mists.png?v=1698797371%20width="
              alt="Product 3"
            />
            <img
              src="https://pinkmoon.co/cdn/shop/files/card-sub-category-moisturizers.png?v=1698797371%20width="
              alt="Product 4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
