import Particles from "react-tsparticles";
import particleConfig from './particlesConfig';
import { loadFull } from "tsparticles";


export default function ParticleBackground() {
	const particlesInit = async (main) => {
		console.log(main);
		await loadFull(main);
	};
	const particlesLoaded = (container) => {
		console.log(container);
	};
	return (
		<Particles
			params={particleConfig}
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
		/>
	);
}

// export default function ParticleBackground() {
//   const particlesInit = async (main) => {
//     console.log(main);

//     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
//     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//     // starting from v2 you can add only the features you need reducing the bundle size
//     await loadFull(main);
//   };
//   return (
//     // <div>
//       <Particles params={particleConfig} />
//     // </div>

//   );
// }


// export default ParticleBackground;