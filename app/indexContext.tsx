"use client";

import React, { createContext, useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

// Define the shape of your context state
interface IndexContextState {
	activeSection: string;
	setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

// Define the initial state values

// Create the context
export const IndexContext = createContext<IndexContextState>({
	activeSection: "",
	setActiveSection: () => {},
});
// Define the provider component
export const IndexContextProvider: ({ children }: any) => React.JSX.Element = ({
	children,
}: any) => {
	const [activeSection, setActiveSection] = useState<string>("");

	return (
		<IndexContext.Provider
			value={{
				activeSection,
				setActiveSection,
			}}
		>
			{children}
			{typeof window !== "undefined" ? (
				<AnimatedCursor
					innerSize={5}
					outerSize={40}
					innerScale={1}
					outerScale={2}
					outerAlpha={0}
					innerStyle={{
						backgroundColor: "rgb(229, 231, 235)",
					}}
					outerStyle={{
						border: "3px solid #C08D2C",
					}}
				/>
			) : (
				<></>
			)}
		</IndexContext.Provider>
	);
};
