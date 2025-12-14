export default function Hero() {
  return (
    <div className=" flex  w-max ">
      <img
        src="/public/images/1.png"
        alt=""
        className="h-[100vh]  w-auto transform -translate-x-8 -translate-y-3 relative"
      />

      <img
        src="/images/object1.png"
        alt=""
        className="w-full absolute scale-120 top-120 xs:top-110 z-10 object-cover overflow-hidden"
      />

      <img
        src="/images/flower.png"
        alt=""
        className="objects-center scale-80 absolute top-89 z-30"
      />

      <img
        src="/images/object2.png"
        alt=""
        className="objects-center scale-100 absolute top-92 z-0"
      />
    </div>
  );
}
