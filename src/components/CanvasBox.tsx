import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useTexture, Center } from "@react-three/drei";
import { useConfigurator } from "../ctx/Configurator";

const vertexShader = ` 
#define SCALE_FACTOR 0.8

attribute float rotation;
uniform float scale;
varying vec2 vUv;
varying float vRotation;

void main()
{
    vUv = uv;
	vRotation = rotation;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_Position = projectionMatrix * mvPosition;
}`;

const fragmentShader = `
#ifdef GL_ES
precision highp float;
#endif
#include <color_fragment>

uniform sampler2D tOne;
uniform sampler2D tSec;
uniform float tAlpha;
 
uniform float scale;
uniform float vRotation;
uniform float uPos;

varying vec2 vUv;

void main(void)
{
	float mid = 0.5;
	vec2 texCoord = vUv;

    vec2 rotatedx = vec2(
        cos(vRotation) * (texCoord.x - mid) + sin(vRotation) * (texCoord.y - mid) + mid+uPos,
        cos(vRotation) * (texCoord.y - mid) - sin(vRotation) * (texCoord.x - mid) + mid
    );
	
	vec2 uv = (scale == 0.0) ? vUv : fract(rotatedx*scale);

    vec3 c;
    vec4 Ca = texture2D(tOne, vUv);
    vec4 Cb = texture2D(tSec, uv);

 
    c = Ca.rgb * Ca.a + (Cb.rgb) * Cb.a *(1.0 - Ca.a);  // blending equation
   
	gl_FragColor= vec4(c, tAlpha);
}
`;

const CanvasBox: React.FC = () => {
	const {
		pattern,
		frontText,
		rotation,
		position,
		scale,
		light,
		lightImg,
		overlayImg,
	} = useConfigurator();
	const LightLayer = () => {
		const frontTexture = useTexture(frontText);
		const lightTexture = useTexture(lightImg);

		return (
			<mesh scale={[1.2, 1.2, 1.2]}>
				<planeGeometry attach="geometry" />
				<shaderMaterial
					transparent={true}
					uniforms={{
						tOne: { value: frontTexture },
						tSec: { value: lightTexture },
						tAlpha: { value: 1.0 },
						vRotation: { value: 1.0 },
						scale: { value: 0.0 },
					}}
					vertexShader={vertexShader}
					fragmentShader={fragmentShader}
				/>
			</mesh>
		);
	};
	const Background = () => {
		const frontTexture = useTexture(frontText);
		const patTexture = useTexture(pattern);
		const overTexture = useTexture(overlayImg);

		return (
			<mesh>
				<planeGeometry attach="geometry" args={[1.2, 1.2, 20, 20]} />
				<shaderMaterial
					transparent={true}
					uniforms={{
						tOne: { value: frontTexture },
						tSec: { value: overTexture },
						tAlpha: { value: 0.5 },
						vRotation: { value: 1.0 },
						scale: { value: 0.0 },
					}}
					vertexShader={vertexShader}
					fragmentShader={fragmentShader}
				/>
			</mesh>
		);
	};
	const PatternImg = () => {
		console.log(position / 10);
		const patTexture = useTexture(pattern);
		const frontTexture = useTexture(frontText);
		return (
			<mesh>
				<planeGeometry attach="geometry" args={[1.2, 1.2, 20, 20]} />
				<shaderMaterial
					transparent={true}
					uniforms={{
						tOne: { value: frontTexture },
						tSec: { value: patTexture },
						tAlpha: { value: light / 10 },
						uPos: { value: position / 10 },
						vRotation: { value: (rotation / 180) * (22 / 7) },
						scale: { value: (scale / 10) * 1.5 },
					}}
					vertexShader={vertexShader}
					fragmentShader={fragmentShader}
				/>
			</mesh>
		);
	};

	return (
		<div className="w-full flex flex-col overflow-x-auto relative bg-neutral-50 border-b grow align-center">
			<div className=" grow h-3/4 bg-white shadow-lg m-8 rounded-lg">
				<Canvas
					shadows
					camera={{ position: [0, 0, 2.5], fov: 25 }}
					gl={{ preserveDrawingBuffer: true }}
					eventSource={document.getElementById("root")!}
					eventPrefix="client"
				>
					<ambientLight intensity={0.8} />
					<Center>
						<Suspense fallback={<>Loading...</>}>
							<LightLayer /> <PatternImg />
							<Background />
						</Suspense>
					</Center>
				</Canvas>
			</div>
		</div>
	);
};

export default CanvasBox;
