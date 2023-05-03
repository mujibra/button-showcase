import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/actionCreators/products";
const callouts = [
  {
    name: "New Arrivals",
    description: "Shop the latest in women’s clothing",
    imageSrc:
      "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/449110/item/idgoods_54_449110.jpg?width=1600&impolicy=quality_75",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Limited Offers",
    description: "Spend more – Save more",
    imageSrc:
      "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/439067/item/idgoods_50_439067.jpg?width=1600&impolicy=quality_75",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Value Buy",
    description: "Luxurious Things at an Affordable Price.",
    imageSrc:
      "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/449239/item/idgoods_03_449239.jpg?width=1600&impolicy=quality_75",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default function Example() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state);
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-20 lg:py-20 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto py-20 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl mb-4 font-extrabold text-gray-900">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {!isLoading && <p>Loading...</p>}
          {error && <p>Error...</p>}
          {isLoading &&
            !error &&
            products.map((product) => (
              <a
                onClick={() => handleDetail(product.id)}
                key={product.id}
                className="group"
              >
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.mainImg}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                    alt="pictProd"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  IDR {product.price}
                </p>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
