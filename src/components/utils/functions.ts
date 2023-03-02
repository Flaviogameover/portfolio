const scrollTo = (id:string):void => {
    const element = document.getElementById(id) as HTMLElement;
    const dropdown = document.getElementById('dropdown') as HTMLElement;
    if (element) {
        const yOffset = -60; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        element.scrollTo({top:y, behavior: 'smooth' });
        dropdown.style.display = 'none';
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.scrollTo(window.scrollX, window.scrollY + 50);
    }
};

const showArrow = ():void => {
    const arrow = document.getElementById('arrow') as HTMLElement;
    const header = document.getElementById('header') as HTMLElement;
    if (arrow) {
        if (window.scrollY >= 50) {
            arrow.style.display = 'flex';
            header.style.backgroundColor = '#2b2b2baa';
        } else {
            arrow.style.display = 'none';
            header.style.backgroundColor = '#2b2b2bff';
        }
    }
};

const showDropdown = ():void => {
    const dropdown = document.getElementById('dropdown') as HTMLElement;
    if (dropdown) {
        if (dropdown.style.display === 'none') {
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    }
};

export { scrollTo, showArrow, showDropdown };
