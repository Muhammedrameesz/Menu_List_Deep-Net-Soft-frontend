import BackGround1 from "../../images/4886-cropped.jpg";

export default function Menu() {
  return (
    <div className="relative flex flex-col items-center justify-center pt-10 pb-10 h-[60vh] text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackGround1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.5,
        }}
      ></div>

      <div className="inset-0 bg-black opacity-30 z-10"></div>

      <h1 className="text-4xl md:text-6xl font-extrabold mt-10 mb-4 text-white relative z-20 leading-tight md:leading-snug text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 drop-shadow-lg tracking-wide">
        MENU
      </h1>

      <p className="text-base md:text-lg px-4 text-slate-300 mt-5 relative z-20 md:mt-8">
        Please take a look at our menu, featuring food, drinks, and brunch. If
        you would like to
        <br />
        place an order, use the &quot;Order Online&quot; button located below
        the menu.
      </p>
    </div>
  );
}
