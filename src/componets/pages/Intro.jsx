import { MdRecordVoiceOver, MdAnimation, MdGraphicEq } from "react-icons/md";
import { BsFillCpuFill } from "react-icons/bs";

const Intro = () => {
  return (
    <div className="bg-white">
      <div className="block mx-32 md:flex justify-center items-center">
        <div className="w-full md:w-1/3 h-96 border-slate-600	">
          <div className="h-52 w-full">
            <img
              src="https://picsum.photos/id/1005/600/600"
              className="h-52 w-full bg-contain bg-center"
              alt=""
            />
          </div>
          <h1 className="font-bold text-xl tracking-wide mt-3">
            Large Format Printing
          </h1>
          <p className="mt-3 	tracking-wide">
            There are many variations of passages of <br /> Lorem Ipsum
            available, but the majority <br /> have suffered.
          </p>
        </div>
        <div className="my-2 w-full mx-2 md:w-1/3 h-96">
          <div className="h-52 w-full">
            <img
              src="https://picsum.photos/id/1005/600/600"
              className="h-52 w-full bg-contain bg-center"
              alt=""
            />
          </div>

          <h1 className="font-bold text-xl mt-3 tracking-wide">
            Lable Printing
          </h1>
          <p className="mt-3 tracking-wide">
            There are many variations of passages of <br /> Lorem Ipsum
            available, but the majority <br /> have suffered.
          </p>
        </div>
        <div className="my-2 w-full mx-2 md:w-1/3 h-96">
          <div className="h-52 w-full">
            <img
              src="https://picsum.photos/id/1005/600/600"
              className="h-52 w-full bg-contain bg-center"
              alt=""
            />
          </div>
          <h1 className="font-bold text-xl tracking-wide">
            Digital Embroidery
          </h1>
          <p className="mt-3 tracking-wide">
            There are many variations of passages of <br /> Lorem Ipsum
            available, but the majority <br /> have suffered.
          </p>
        </div>
      </div>

      {/*       
      <div className="block mx-10 md:flex flex-row mt-5 ">
        <div className="my-2 w-full  md:w-1/3 h-50">
          <div className="">
            <img
              src="http://trydo.rainbowit.net/assets/images/icons/icon-01.png"
              alt=""
              className="my-2 bg-gray-700"
            />
          </div>

          <h1 className="font-bold text-xl tracking-wide mt-3 text-white">
            T-Shirt Printing
          </h1>
          <p className="mt-3 	tracking-wide">
            There are many variations of passages of <br /> Lorem Ipsum
            available, but the majority <br /> have suffered.
          </p>
        </div>
        <div className="my-2 w-full md:w-1/3 h-50">
          <div className="">
            <BsFillCpuFill className="h-12 w-12" />
          </div>
          <h1 className="font-bold text-xl mt-3 tracking-wide	 text-white">
            3D Signage And Moulding
          </h1>
          <p className="mt-3 tracking-wide">
            There are many variations of passages of <br /> Lorem Ipsum
            available, but the majority <br /> have suffered.
          </p>
        </div>
        <div className="my-2 w-full md:w-1/3 h-50 pb-6">
          <div>
            <img
              src="http://trydo.rainbowit.net/assets/images/icons/icon-03.png"
              alt=""
              className="my-2"
            />
          </div>
          <h1 className="font-bold text-xl tracking-wide text-white">
            Packaging
          </h1>
          <p className="mt-3 tracking-wide">
            There are many variations of passages of <br /> Lorem Ipsum
            available, but the majority <br /> have suffered.
          </p>
        </div>
      </div>
      <div className="block mx-10 md:flex flex-row mt-5 ">
        <div className="my-2 w-full  md:w-1/3 h-50">
          <div className="">
            <MdGraphicEq className="fill-[#e30606c5] h-12 w-12" />
          </div>

          <h1 className="font-bold text-xl tracking-wide mt-3 text-white">
            Large Format Printing
          </h1>
          <p className="mt-3 	tracking-wide">
            There are many variations of passages of <br /> Lorem Ipsum
            available, but the majority <br /> have suffered.
          </p>
        </div>
        <div className="my-2 w-full md:w-1/3 h-50">
          <div className="">
            <MdAnimation className="h-12 w-12" />
          </div>
          <h1 className="font-bold text-xl mt-3 tracking-wide	 text-white">
            Lable Printing
          </h1>
          <p className="mt-3 tracking-wide">
            There are many variations of passages of <br /> Lorem Ipsum
            available, but the majority <br /> have suffered.
          </p>
        </div>
        <div className="my-2 w-full md:w-1/3 h-50 pb-6">
          <div className="">
            <MdRecordVoiceOver className="h-12 w-12" />
          </div>

          <h1 className="font-bold text-xl tracking-wide text-white">
            Digital Embroidery
          </h1>
          <p className="mt-3 tracking-wide">
            There are many variations of passages of <br /> Lorem Ipsum
            available, but the majority <br /> have suffered.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Intro;
