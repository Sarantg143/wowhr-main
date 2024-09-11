import com1 from "../assets/Images/company1.jpg";
import com2 from "../assets/Images/company2.png";
import com3 from "../assets/Images/company3.png";
import com4 from "../assets/Images/company4.png";
import com5 from "../assets/Images/company5.jpg";

const Partners = () => {
  return (
    <section
      id="partners"
      className="flex flex-col items-center justify-center h-full overflow-hidden bg-white cursor-default md:h-full sm:h-screen"
    >
      <div className="my-4 sm:mt-0 sm:mb-24"></div>
      <div className="max-w-8xl">
        <div
          className="mb-5 text-xl font-semibold text-center sm:text-3xl md:text-4xl xl:text-3xl font-jost sm:mb-9"
          data-aos="fade-right"
          data-aos-duration="750"
        >
          BUSINESS PARTNERS
        </div>
        <div
          className="md:text-2xl text-xs sm:text-lg font-semibold text-center tracking-wider lg:leading-[1.9] xl:text-lg md:leading-[1.7] mb-8 md:mb-20 mx-auto w-[78%]"
          data-aos="fade-right"
          data-aos-duration="750"
        >
          To be one of the pioneering, dynamic and leading companies and Institutions that offer
          quality products and services with an understanding of continuous
          improvement in the fields in which it operates.
        </div>
        <div className="relative w-full overflow-hidden">
          <div style={{gap:"130px"}} className="inset-0 flex whitespace-nowrap animate-marquee">
            <img
              src={com1}
              alt="com1"
              className="object-contain w-24 h-auto sm:w-44 mx-4"
            />
            <img
              src={com3}
              alt="com3"
              className="object-contain w-24 h-auto sm:w-44 mx-4"
            />
            <img
              src={com2}
              alt="com2"
              className="object-contain w-20 h-auto sm:w-36 mx-4"
            />
            <img
              src={com4}
              alt="com4"
              className="object-contain w-16 h-auto sm:w-24 mx-4"
            />
            <img
              src={com5}
              alt="com5"
              className="object-contain w-20 h-40 sm:w-28 mx-4"
            />
            {/* Duplicate images to ensure smooth scrolling */}
            <img
              src={com1}
              alt="com1"
              className="object-contain w-24 h-auto sm:w-44 mx-4"
            />
            <img
              src={com3}
              alt="com3"
              className="object-contain w-24 h-auto sm:w-44 mx-4"
            />
            <img
              src={com2}
              alt="com2"
              className="object-contain w-20 h-auto sm:w-36 mx-4"
            />
            <img
              src={com4}
              alt="com4"
              className="object-contain w-16 h-auto sm:w-24 mx-4"
            />
            <img
              src={com5}
              alt="com5"
              className="object-contain w-20 h-40 sm:w-28 mx-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
