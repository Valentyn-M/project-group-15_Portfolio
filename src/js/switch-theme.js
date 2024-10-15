const htmlElement = document.documentElement;
const themeButton = document.querySelector("#toggleLabel");
themeButton.addEventListener("click", () => changeTheme(true));

// Функция смены темы сайта (если функция вызывается по клику, то в аргументу функции будет true)
function changeTheme(saveTheme = false) {

	// Меняем тему в любом случае
	let currentTheme = htmlElement.classList.contains('_light') ? 'light' : 'dark';     	// Заносим в переменную текущую тему HTML
	let newTheme;                                                 												// Переменная для смены класса в теге html
	let newDataColorScheme;                                           										// Переменная для смены атрибута "data-color-scheme" в теге html
	if (currentTheme === 'light') {
		newTheme = 'dark';
		newDataColorScheme = 'dark';
	} else {
		newTheme = 'light';
		newDataColorScheme = 'light';
	}
	htmlElement.classList.remove(`_${currentTheme}`);                         						// Удаляем класс текущей темы для HTML
	htmlElement.classList.add(`_${newTheme}`);                              							// Добавляем класс новой темы для HTML
	themeButton.blur();                                             											// Убираем фокус с кнопки
	htmlElement.setAttribute("data-color-scheme", newDataColorScheme);              			// Устанавливаем атрибут "data-color-scheme" для HTML

	// Если аргумент функции saveTheme = true (т.е. функция запущена по клику), то записываем в браузер в localStorage значение темы пользователя 
	saveTheme ? localStorage.setItem('theme', newTheme) : null;
}

// Основной код (Самовызываемая функция)
(function () {
	// Получаем сохраненную тему из localStorage (theme - это ключ для хранения темы, выбранной пользователем)
	// Свойство localStorage позволяет получить доступ к Storage объекту. localStorage аналогично свойству sessionStorage. Разница только в том, что свойство sessionStorage хранит данные в течение сеанса (до закрытия браузера), в отличие от данных, находящихся в свойстве localStorage, которые не имеют ограничений по времени хранения и могут быть удалены только с помощью JavaScript.
	// При первом заходе на сайт эта константа будет пустой. Она заполняется в  функции смены темы changeTheme
	const saveUserTheme = localStorage.getItem('theme');

	// Работа с системными настройками
	let userTheme;
	if (window.matchMedia) {
		// Заносим в переменную userTheme цветовую тему Системы пользователя
		userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
	// Ставим прослушку на Событие изменения темы (спрослушку ставим на темную тему)
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", e => {
		// Если выбранная пользователем тема отличается от сохраненной ранее темы (if (window.matchMedia('(prefers-color-scheme: dark)').matches != saveUserTheme), то запускаем функцию изменения темы changeTheme(), в противном случае ничего не дулаем (null)
		// Функция changeTheme() вызывается при смене Системных настроек темы, при условии, что нет сохораненных пользователем настроек темы на сайте
		!saveUserTheme ? changeTheme() : null;
	});

	// Функция установки темы при загрузкe страницы (Самовызываемая функция)
	function setThemeClass() {
		if (saveUserTheme) {                                      													// Если пользователь ранее выбрал тему сайта (переменная saveUserTheme - не пустая)
			htmlElement.classList.add(`_${saveUserTheme}`);                 									// Добавляем класс этой темы для HTML
			htmlElement.setAttribute("data-color-scheme", saveUserTheme);       							// Устанавливаем атрибут "data-color-scheme" для HTML
		} else {                                              															// Иначе
			htmlElement.classList.add(`_${userTheme}`);                   										// Добавляем класс Системной темы для HTML
			htmlElement.setAttribute("data-color-scheme", userTheme);         								// Устанавливаем атрибут "data-color-scheme" для HTML из системы пользователя
		}
	}
	setThemeClass();

}());

window.alert("Dark Theme");
