import { useState } from "react";
import useMenuList from "../../customHooks/useGetMenuList";
import Bg1 from "../../images/2150096486.jpg";
import BG2 from "../../images/23260890_6773593.jpg";
import OrangeImg from "../../images/glass-orange-juice-with-cherries-mint-black-background.png";
import CockTail from "../../images/front-view-cold-cocktail-colored-inside-glass-can-with-colorful-straw-isolated-wooden-desk-dark.png";
import useGetCoktails from "../../customHooks/useGetBrunchCoktails";
import OrageCo from "../../images/orange-juice-cocktail-with-colorful-accesorizes.png";
import Orange21 from "../../images/orange21.png";
import hookkah from "../../images/Hookah.png";
import DeppNetLogo from "../../images/deepnetsoft_logo-removebg-preview (1).png";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Youtube from "../../images/youtube-removebg-preview.png";
import Insta from "../../images/instagram-removebg-preview.png";
import Twitter from "../../images/twitter__1_-removebg-preview.png";

export default function MenuList() {
  const { menuList, loading, error } = useMenuList();
  const [activeMenu, setActiveMenu] = useState("DRINKS");
  const { coktails } = useGetCoktails();

  if (loading)
    return <p className="text-center text-lg text-gray-500">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-lg text-red-500">
        Error loading menu data: {error}
      </p>
    );

  return (
    <>
      <div className="relative pb-6 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 pt-6 ">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: `url(${BG2})`,
            zIndex: -1,
            backgroundRepeat: "no-repeat",
            opacity: 0.3, // Decrease the opacity of the background image
          }}
        />

        <button
          onClick={() => setActiveMenu("FOOD")}
          className={`py-3 px-6 rounded text-white font-semibold text-base  ${
            activeMenu === "FOOD" ? "bg-blue-800" : "bg-slate-950"
          }`}
        >
          FOOD
        </button>

        <button
          onClick={() => setActiveMenu("DRINKS")}
          className={`py-3 px-6 rounded text-white font-semibold text-base  ${
            activeMenu === "DRINKS" ? "bg-blue-800" : "bg-slate-950"
          }`}
        >
          DRINKS
        </button>

        <button
          onClick={() => setActiveMenu("BRUNCH")}
          className={`py-3 px-6 rounded text-white font-semibold text-base ${
            activeMenu === "BRUNCH" ? "bg-blue-800" : "bg-slate-950"
          }`}
        >
          BRUNCH
        </button>
      </div>

      <div className="container mx-auto p-6 min-h-screen relative flex flex-col items-center justify-center w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${Bg1})`,
            zIndex: -1,
            opacity: 0.2,
          }}
        />
        <img
          src={OrangeImg}
          alt="glass-orange-juice-with-cherries-mint-black-background"
          className="absolute h-40 w-40 sm:h-20 sm:w-20 md:h-80 md:w-80 top-20 left-0 transform -translate-y-1/2 z-20"
        />
        <img
          src={CockTail}
          alt="cocktail image"
          className="absolute h-32 w-32 sm:h-20 sm:w-20 md:h-72 md:w-72 -top-20  -right-20 transform -translate-x-1/2 z-20 hidden md:block"
        />

        <div className="relative z-10 w-full max-w-5xl bg-black p-6 md:p-10 bg-opacity-50 rounded-lg">
          {menuList && menuList.menuData && menuList.menuData.length > 0 ? (
            menuList.menuData.map((categoryData, index) => {
              if (categoryData.category === activeMenu) {
                return (
                  <div
                    key={index}
                    className="border border-white category-section mb-12"
                  >
                    <div className="flex items-center justify-center mb-4 mt-10">
                      <hr className="border-t-4 border-slate-300 w-20" />
                      <h2 className="text-4xl md:text-6xl font-extrabold  text-white relative z-20 leading-tight md:leading-snug text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 drop-shadow-lg tracking-wide">
                        {categoryData.category}
                      </h2>
                      <hr className="border-t-4 border-slate-300 w-20" />
                    </div>

                    <div className="p-4 rounded-lg">
                      {categoryData.items && categoryData.items.length > 0 && (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {categoryData.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex justify-between items-center text-lg text-gray-600 p-2 rounded"
                            >
                              <span>{item.name}</span>
                              <span className="font-medium text-gray-800">
                                {item.price}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {categoryData.specialDrinks &&
                        categoryData.specialDrinks.length > 0 && (
                          <div className="mt-6">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {categoryData.specialDrinks.map((drink, idx) => (
                                <div
                                  key={idx}
                                  className="p-4 rounded-md shadow-inner"
                                >
                                  <li className="flex items-center text-lg text-slate-100 p-2 rounded">
                                    <h1 className="flex-1 font-serif font-semibold text-2xl">
                                      {drink.name}
                                    </h1>
                                    <span className="font-medium text-xl text-green-600">
                                      {drink.price}
                                    </span>
                                  </li>

                                  {drink.ingredients && (
                                    <div className="flex flex-wrap mt-2">
                                      {drink.ingredients.map(
                                        (ingredient, i) => (
                                          <span
                                            key={i}
                                            className="pl-2 text-sm font-mono text-zinc-400 flex-1 w-full xs:w-full sm:w-auto"
                                          >
                                            {ingredient.name}
                                          </span>
                                        )
                                      )}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </ul>
                          </div>
                        )}
                    </div>
                  </div>
                );
              }
              return null;
            })
          ) : (
            <p className="text-center text-lg text-gray-500">
              No menu data available
            </p>
          )}

          {/* Brunch Cocktails Section */}
          <div className="relative border border-white category-section mb-12">
            <img
              src={Orange21}
              alt="orange-juice-cocktail-with-colorful-accessorizes"
              className="absolute h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80 right-0 -bottom-20 transform translate-x-1/2 z-20"
            />
            <img
              src={OrageCo}
              alt="orange-juice-cocktail-with-colorful-accessorizes"
              className="absolute h-36 w-36 sm:h-52 sm:w-52 md:h-60 md:w-60 -top-28 left-0 transform -translate-x-1/2 z-20"
            />
            <div className="flex flex-col md:flex-row items-center justify-center mb-4 mt-10 space-y-2 md:space-y-0 md:space-x-4 px-4 md:px-0">
              <hr className="border-t-4 border-slate-300 w-16 sm:w-20" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white relative z-20 leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 drop-shadow-lg tracking-wide text-center">
                BRUNCH COCKTAILS
              </h2>
              <hr className="border-t-4 border-slate-300 w-16 sm:w-20" />
            </div>

            <div className="p-4 rounded-lg">
              {coktails && coktails.specialDrinks && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {coktails.specialDrinks.map((drink, idx) => (
                    <div key={idx} className="p-4 rounded-md shadow-inner">
                      <li className="flex items-center text-lg text-slate-100 p-2 rounded">
                        <h1 className="flex-1 font-serif font-semibold text-2xl">
                          {drink.name}
                        </h1>
                        <span className="font-medium text-xl text-green-600">
                          {drink.price}
                        </span>
                      </li>

                      {drink.ingredients && (
                        <div className="flex flex-wrap">
                          {drink.ingredients.map((ingredient, i) => (
                            <span
                              key={i}
                              className="pl-2 text-sm font-mono text-zinc-400 flex-1 w-full xs:w-full sm:w-auto"
                            >
                              {ingredient.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="relative border border-white category-section flex flex-col justify-center items-center py-8 space-y-4">
            <div className="flex justify-center items-center -mt-5">
              <img
                src={hookkah}
                alt="hookah"
                className="w-32 h-32 md:w-40 md:h-40"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 px-4 md:px-0">
              <hr className="border-t-4 border-slate-300 w-16 sm:w-20" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white relative z-20 leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 drop-shadow-lg tracking-wide text-center">
                HOOKAH FLAVORS
              </h2>
              <hr className="border-t-4 border-slate-300 w-16 sm:w-20" />
            </div>

            <div className="flex flex-col md:flex-wrap md:flex-row justify-center items-center gap-4 md:gap-10 text-center text-slate-50 text-lg md:text-xl w-full">
              <p className="w-full md:w-auto">ORANGE MINT</p>
              <p className="w-full md:w-auto">BLUE MIST</p>
              <p className="w-full md:w-auto">MIGHTY FREEZE</p>
              <p className="w-full md:w-auto">LUV 66</p>
              <p className="w-full md:w-auto">PEACH</p>
              <p className="w-full md:w-auto">WATERMELON</p>
            </div>
          </div>

          <div className="flex justify-center items-center mt-10 mb-20">
            <button className="bg-blue-700 text-white font-semibold p-4 rounded-lg">
              ORDER ONLINE
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center md:gap-0 gap-5 bg-stone-700 p-4 text-slate-300 font-mono">
            <span className="flex-1 text-sm md:text-base text-center md:text-left">
              Enjoy the flavors at home or in your favorite spot!
            </span>
            <hr className="hidden md:block h-24 border-l border-slate-300 mx-4" />
            <span className="flex-1 text-sm md:text-base text-center md:text-left">
              Dont miss our seasonal specials and limited-time offers!
            </span>
            <hr className="hidden md:block h-24 border-l border-slate-300 mx-4" />
            <span className="flex-1 text-sm md:text-base text-center md:text-left">
              Check out our menu for the latest additions!
            </span>
          </div>
        </div>
      </div>

      {/* last section  */}
      <div className="flex flex-col md:flex-row justify-center items-center bg-black pt-28 pb-14 text-slate-50 p-6 space-y-6 md:space-y-0 md:space-x-8">
        <div className="border border-slate-50 p-4 px-14 rounded-lg text-center">
          <p className="text-lg font-semibold text-blue-600 uppercase">
            Connect With Us
          </p>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <ContactPhoneOutlinedIcon
              fontSize="small"
              sx={{ color: "#7a7c0c" }}
            />
            <p className="text-sm text-neutral-500 ">5767864-9880</p>
          </div>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <EmailOutlinedIcon fontSize="small" sx={{ color: "#7a7c0c" }} />
            <p className="text-sm text-neutral-500 ">gmail@436brandgrill.com</p>
          </div>
        </div>

        <div className="relative border border-slate-50 p-4 px-14 rounded-lg text-center">
          <div className="mt-5 flex justify-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">DEEP</span>
            <span className="text-2xl font-bold text-white">NET</span>
            <span className="text-2xl font-bold text-neutral-500">SOFT</span>
          </div>
          <img
            src={DeppNetLogo}
            alt="Deepnet Logo"
            className="absolute left-1/2 transform -translate-x-1/2 top-[-40px] w-20 h-20"
          />
          <div className="flex justify-center items-center space-x-2 mt-3">
            <FacebookOutlinedIcon className="text-neutral-500 rounded-lg" />
            <img
              src={Insta}
              alt="Instagram"
              className="h-5 w-5 bg-neutral-500 rounded-lg"
            />
            <img
              src={Youtube}
              alt="YouTube"
              className="h-5 w-5 bg-neutral-500 rounded-lg"
            />
            <img
              src={Twitter}
              alt="Twitter"
              className="h-5 w-5 bg-neutral-500 rounded-lg"
            />
          </div>
        </div>

        <div className="border border-slate-50 p-4 px-14 rounded-lg text-center">
          <p className="text-lg font-semibold text-blue-600 uppercase">
            Find Us
          </p>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <LocationOnOutlinedIcon
              fontSize="small"
              sx={{ color: "#7a7c0c" }}
            />
            <p className="text-sm text-neutral-500">327 Memorial Dr SE, Atlanta</p>
          </div>
          <p className="text-sm mt-2 text-neutral-500">GA 30302, USA</p>
        </div>
      </div>
    </>
  );
}
