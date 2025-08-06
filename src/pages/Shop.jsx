import JoinCommunity from "../components/JoinCommunity";
import products from "../constants/Merch";
import Button from "../components/Button";
import SEO from "../components/SEO";

const Shop = () => {
  return (
    <>
      <SEO
        title="Shop TEDxAdo-Ekiti Merch | Own a Piece of the Movement."
        description="From bold tees to thoughtful tokens, every item in our collection speaks volumes about ideas, identity, and inspiration. TEDxAdo-Ekiti merch isn't just fashion. It's a statement. Join us in repping transformation, innovation, and local brilliance."
      />

      <div className="bg-black text-white min-h-screen">
        {/* Header Section */}
        <div className="relative z-3 max-w-4xl mx-10 lg:mt-20 text-left px-2 py-24">
          <h1 className="text-3xl font-bricolage text-[36px] font-bold mb-6">
            Own a Piece of the Movement. Wear the Change.
          </h1>
          <p className="text-gray-300 text-[24px] leading-relaxed mb-8 max-w-4xl">
            From bold tees to thoughtful tokens, every item in our collection
            speaks volumes about ideas, identity, and inspiration. TEDxAdo-Ekiti
            merch isn't just fashion. It's a statement. Join us in repping
            transformation, innovation, and local brilliance.
          </p>
          <Button
            text="Place order"
            className={`${"btn-orange"} text-base flex items-center max-lg:w-full gap-2 px-5 py-3`}
            link={"https://wa.me/c/2348083087892"}
          />
        </div>

        {/* Products Grid */}
        <div className="px-6 py-10 md:px-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden relative"
              >
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-red-500 text-white font-hupaisa px-3 py-1 rounded text-sm font-medium">
                    {product.discount}
                  </span>
                </div>

                {/* Product Image */}
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 text-black">
                  <h3 className="font-bold font-bricolage text-lg mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xl font-bold font-bricolage">
                      {product.price}
                    </span>
                    {product.originalPrice && product.originalPrice !== "₦" && (
                      <span className="text-gray-500 font-hupaisa line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button
                    text="Buy now"
                    link={product.link}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-hupaisa font-medium transition-colors"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="bg-black">
        <JoinCommunity />
      </section>
    </>
  );
};

export default Shop;
