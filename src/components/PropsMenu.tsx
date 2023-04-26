import React from "react";
import { useConfigurator } from "../ctx/Configurator";


const PropsMenu: React.FC = ({}) => {
	const { setScale, scale,setPosition, position, light,rotation, setRotation, setLightValue } = useConfigurator();

	const updateScale = (e: any) => {
		setScale(e.target.value);
	};

	return (
		<div className="border-solid border-l-[1px] border-neutral-75">
			<div className="w-[252px] h-full overflow-auto py-3">
				<>
					<div className="flex flex-col  px-4 py-3 mx-2">
						<div className="flex items-center py-2 text-sm">
							<span>Scale</span>
						</div>
						<input
							id="default-range"
							min={0}
							max={10}
							type="range"
							onChange={(e) => updateScale(e)}
							value={scale}
							className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
						/>
					</div>
					<div className="flex flex-col  px-4 py-3 mx-2">
						<div className="flex items-center py-2 text-sm">
							<span>Lightness</span>
						</div>
						<input
							id="default-range"
							min={0}
							max={10}
							type="range"
							onChange={(e) => setLightValue(parseInt(e.target.value))}
							value={light}
							className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
						/>
					</div>

					<div className="flex flex-col  px-4 py-3 mx-2">
						<div className="flex items-center py-2 text-sm">
							<span>Rotation</span>
						</div>
						<input
							id="default-range"
							min={0}
							max={360}
							type="range"
							onChange={(e) => setRotation(parseInt(e.target.value))}
							value={rotation}
							className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
						/>
					</div>

					<div className="flex flex-col  px-4 py-3 mx-2">
						<div className="flex items-center py-2 text-sm">
							<span>Postion</span>
						</div>
						<input
							id="default-range"
							min={0}
							max={10}
							type="range"
							onChange={(e) => setPosition(parseInt(e.target.value))}
							value={position}
							className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
						/>
					</div>
				</>
			</div>
		</div>
	);
};

export default PropsMenu;
