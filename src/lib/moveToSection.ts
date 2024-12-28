

export const moveToSection = (section: string) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
}
