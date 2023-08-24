"use client";

import React, { createContext, useEffect, useState } from "react";

// Define the shape of your context state
interface IndexContextState {
	activeSection: string;
	setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

// Define the initial state values




// Create the context
export const IndexContext = createContext<IndexContextState>({
    activeSection: "",
    setActiveSection: () => { },
})
// Define the provider component
export const IndexContextProvider: ({ children }: any) => React.JSX.Element = ({
	children,
}: any) => {
	const [activeSection, setActiveSection] = useState<string>("");

	return (
		<IndexContext.Provider
			value={{
                activeSection,
                setActiveSection
			}}
		>
			{children}
		</IndexContext.Provider>
	);
};
