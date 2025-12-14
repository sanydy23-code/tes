import Hero from "./components/Hero";
import People from "./components/People";

function App() {
  return (
    <div className="flex-col h-screen w-screen bg-slate-900  overflow-x-hidden  relative">
      <img
        src="/public/images/ornamentoragne.png"
        alt=""
        className="absolute z-40 scale-30 top-190 transform -translate-x-28"
      />
      <img
        src="/public/images/ornamentyellow.png"
        alt=""
        className="absolute z-30 scale-40 top-218 transform -translate-x-25"
      />
      <img
        src="/public/images/ornamentoragne.png"
        alt=""
        className="absolute z-40 scale-30 top-270 transform translate-x-44 rotate-180"
      />
      <img
        src="/public/images/ornamentyellow.png"
        alt=""
        className="absolute z-30 scale-40 top-241 transform translate-x-50 rotate-180"
      />
      <div className="absolute z-30 text-center justify-center  w-full top-80">
        <h1 className="font-bagel text-white text-3xl">Jimmy & Sarah</h1>
        <h2 className="font-libre text-white text-sm">Wedding Invitation</h2>
      </div>
      <Hero />
      <p className="absolute z-30 font-libre text-[0.55rem] text-gray-700 mx-10 py-10 text-center">
        A great marriage is not when the ‘perfect couple’ comes together. It is
        when an imperfect couple learns to enjoy their differences."
        <br /> <br /> ~ Dave Meurer ~
      </p>
      <People />
    </div>
  );
}

export default App;
