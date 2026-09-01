const themeButton = document.getElementById("themeButton");

const savedSettings = localStorage.getItem("settings");

if (savedSettings) {
const settings = JSON.parse(savedSettings);

if (settings.theme === "dark") {
    document.body.classList.add("dark-theme");
}

}

themeButton.addEventListener("click", function () {
document.body.classList.toggle("dark-theme");

const currentTheme = document.body.classList.contains("dark-theme")
    ? "dark"
    : "light";

const settings = {
    theme: currentTheme
};

localStorage.setItem("settings", JSON.stringify(settings));

});
