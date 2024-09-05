import { useEffect, useMemo, useState } from "react";
import { Outlet} from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import '../styles/Layout.css'
import NavComponent from '../components/NavComponent'


const Layout = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 400,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: false,
    }),
    [],
  );

  if (init){
    return (
      <div>
        <div className="frame">
        </div>
        <div className="frame-thin">
        </div>
        
        <Particles
        className="particles"
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />

        <div className='page-container'>
        <div className='header'>
            <p className='header-title'>Jonathon Riley, PhD</p>
            <p className='header-subtitle'>Full Stack Python Quant Developer</p>
                <nav>
                    <NavComponent/>
                </nav>
        </div>
        <div className='page-content'>
          <Outlet />
        </div>
        </div>
       </div>
    )
  }
  return <></>
};

export default Layout;