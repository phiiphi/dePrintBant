import { MdRecordVoiceOver, MdAnimation, MdGraphicEq } from "react-icons/md";
import { BsFillCpuFill } from "react-icons/bs";
import { AiOutlinePrinter, AiFillGift } from "react-icons/ai";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white">
      <div className="pt-4 pb-10">
        <div className="flex justify-center">
          <div className="item-center ">
            <h2 className="text-ciri font-bold text-2xl md:text-3xl">
              Our Services
            </h2>
          </div>
        </div>
        <div className="flex flex-row text-center justify-center mt-2">
          <p className="text-ciri md:text-xl">
            There are many variations of passages of Lorem Ipsum passages of
            Lorem Ipsum
          </p>
        </div>
        <div class="flex flex-row justify-center my-4 md:my-8">
          <div className="flex flex-row mx-4">
            <div>
              <div className="mx-2 hover:border-sea border-ciri">
                <Link to="/contact">
                  <MdGraphicEq className="h-16 w-16 hover:fill-sea fill-ciri md:h-20 md:w-20 " />
                </Link>
              </div>
              <div className="mt-3 ">
                <h2 className="font-bold text-bold text-ciri">Embroidery</h2>
              </div>
            </div>
            <div>
              <div className=" mx-2 hover:border-sea border-ciri">
                <Link to="/contact">
                  <BsFillCpuFill className="h-16 w-16 hover:fill-sea fill-ciri md:h-20 md:w-20 " />
                </Link>
              </div>
              <div className="mt-3">
                <h2 className="font-bold text-bold text-ciri pl-6">
                  3D <br /> Moulding <br /> & Signage
                </h2>
              </div>
            </div>
            <div>
              <div className="mx-2 hover:border-sea border-ciri">
                <Link to="/contact">
                  <AiOutlinePrinter className="h-16 w-16 hover:fill-sea fill-ciri md:h-20 md:w-20 " />
                </Link>
              </div>
              <div className="mt-3">
                <h2 className="font-bold text-bold text-ciri pl-2">Printing</h2>
              </div>
            </div>
            <div>
              <div className="mx-2 hover:border-sea border-ciri">
                <Link to="/contact">
                  <AiFillGift className="h-16 w-16 hover:fill-sea fill-ciri md:h-20 md:w-20 " />
                </Link>
              </div>
              <div className="mt-3">
                <h2 className="font-bold text-bold text-ciri pl-2">
                  Packaging
                </h2>
              </div>
            </div>
            <div className="sm:not-sr-only sr-only">
              <div className="md:mx-2 mx-2 hover:border-sea border-ciri">
                <Link to="/contact">
                  <MdGraphicEq className="h-16 w-16 hover:fill-sea fill-ciri md:h-20 md:w-20 " />
                </Link>
              </div>
              <div className="mt-3">
                <h2 className="font-bold text-bold text-ciri pl-6">
                  Lazer <br /> Engraving
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
