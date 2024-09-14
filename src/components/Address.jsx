import React from "react";
import Globe from "react-globe.gl";

const Address = () => {
  return (
    <div>
      <div className="cursor-grab rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
        <Globe
          height={326}
          width={326}
          backgroundColor="rgba(0, 0, 0, 0)"
          backgroundImageOpacity={0.5}
          showAtmosphere
          showGraticules
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          labelsData={[
            {
              lat: 40,
              lng: -100,
              text: "Kanpur, UP",
              color: "white",
              size: 15,
            },
          ]}
        />
      </div>

      <div className="flex justify-center items-center  mt-10 flex-col gap-5">
        <div className="flex gap-3">
          <img src="/assets/location.svg" alt="location" />
          <p className="text-white-600 font-generalsans text-sm">
            We are working remotely
          </p>
        </div>
        <div className="flex gap-3">
          <img src="/assets/mail.svg" alt="mail" />
          <p className="text-white-600 font-generalsans text-sm">
            msxdev01@gmail.com
          </p>
        </div>
        <div className="flex gap-3">
          <img src="/assets/call.svg" alt="call" />
          <p className="text-white-600 font-generalsans text-sm">
            +91 7007022949
          </p>
        </div>
      </div>
    </div>
  );
};

export default Address;
