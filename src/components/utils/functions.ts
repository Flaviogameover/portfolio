const scrollTo = (id: string): void => {
	const element = document.getElementById(id) as HTMLElement;
	const dropdown = document.getElementById('dropdown') as HTMLElement;
	if (element) {
		window.scrollTo({ top: element.offsetTop - 60, behavior: 'smooth' });
		dropdown.style.display = 'none';
	} else {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
};

const showArrow = (): void => {
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

const showDropdown = (): void => {
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
