import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Developer from "../components/Developer";
import Button from "../components/Button";

const Hero = () => {
  const [animationName, setAnimationName] = useState("idle");

  return (
    <section className="c-space my-36" id="home">
      <div className="w-full text-white-600 ">
        <div className="work-container">
          <div className="work-content  sm:h-[540px] h-480">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              <p className="hero_tag text-white  ">SMxDev</p>
              <p className="sm:text-[16px] text-[14px] mt-8 font-medium text-gray_gradient text-left font-generalsans">
                We offer comprehensive services, from crafting custom websites
                using all the modern tech stacks to building e-commerce
                platforms, web applications, and responsive designs. They manage
                front-end and back-end development, provide maintenance,
                support, and integrate SEO to ensure optimal performance and
                visibility online.
              </p>
              <div className="mt-8 flex gap-3">
                <span className="sm:text-[16px] text-[14px] font-medium text-gray_gradient text-left font-generalsans">
                  Want to have your own website ?
                </span>
                <span className="waving-hand ">💡</span>
              </div>
            </div>
            <div className="flex gap-3 sm:py-10 py-5 sm:px-5 px-2.5 flex-wrap">
              <span
                onPointerOver={() => setAnimationName("salute")}
                onPointerOut={() => setAnimationName("idle")}
              >
                <Button name="About Us" containerClass="w-[150px] m-0" />
              </span>
              <span
                onPointerOver={() => setAnimationName("victory")}
                onPointerOut={() => setAnimationName("idle")}
              >
                <Button name="Our Services" containerClass="w-[150px] m-0" />
              </span>
              <span
                onPointerOver={() => setAnimationName("clapping")}
                onPointerOut={() => setAnimationName("idle")}
              >
                <Button
                  name="Book a Demo"
                  isBeam
                  containerClass="w-[150px] m-0"
                />
              </span>
            </div>
          </div>
          <div className="work-canvas cursor-grab overflow-visible">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={null}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
