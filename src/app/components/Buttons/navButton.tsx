"use client"

import { moveToSection } from "@/lib/moveToSection";

const NavButton = ({ section }: { section: string }) => {
    return <button className="text-white text-lg font-bold" onClick={() => moveToSection(section)}>{section.toUpperCase()}</button>
}

export default NavButton;