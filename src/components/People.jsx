export default function People() {
  return (
    <div className="flex-col absolute z-30 w-full items-center top-165">
      <h1 className="text-center w-full font-bagel text-xl text-gray-600 pb-8">
        -- The Wedding Of --
      </h1>
      <p className="text-center  font-libre  text-[0.55rem] text-gray-700 mx-10 mb-8">
        Assalamualaikum Wr. Wb <br />
        Dengan penuh rasa syukur ke hadirat Allah SWT, kami mengundang
        Bapak/Ibu/Saudara/i untuk berkenan hadir pada acara pernikahan
        putra-putri kami.
      </p>
      {/* Image Card */}
      <div className="w-2/3 h-full bg-white pb-2 mx-auto rounded-xl">
        <img
          src="/public/images/wanita.png"
          alt=""
          className="3/4 rounded-t-xl"
        />
        <h1 className="mx-auto text-center font-libre text-[0.6rem] pt-1  ">
          Sarah Wijayanto
        </h1>
        <h2 className="mx-auto text-center font-libre text-[0.4rem] pt-0.5  ">
          (Putri dari Bapak Widodo)
        </h2>
      </div>

      <div className="w-2/3 h-full bg-white pb-2 mx-auto rounded-xl my-8">
        <img
          src="/public/images/pria.png"
          alt=""
          className="3/4 rounded-t-xl"
        />
        <h1 className="mx-auto text-center font-libre text-[0.6rem] pt-1  ">
          Jimmy Mangkupuro
        </h1>
        <h2 className="mx-auto text-center font-libre text-[0.4rem] pt-0.5  ">
          (Putra dari Bapak Soleh)
        </h2>
      </div>
    </div>
  );
}
