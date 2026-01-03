import React from "react";

import { useTranslation } from "react-i18next";
function RightSideBar(props) {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = React.useState(i18n.language);

  React.useEffect(() => {
    const handleChange = (lng) => setCurrentLang(lng);
    i18n.on("languageChanged", handleChange);

    return () => {
      i18n.off("languageChanged", handleChange);
    };
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="z-[-10] md:block hidden">
      <div
        className={`fixed h-full right-0 w-[60px] flex flex-col items-center justify-end top-0`}
      >
        <button
          onClick={() => changeLanguage("fr")}
          className={`p-2 text-2xl relative bg-primary hover:text-secondary ${
            currentLang === "fr" ? "text-secondary" : ""
          } transition-all`}
        >
          FR
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className={`p-2 text-2xl relative bg-primary hover:text-secondary ${
            currentLang === "en" ? "text-secondary" : ""
          } transition-all`}
        >
          EN
        </button>

        <span className="w-[2px] gradient-bg z-[-1] h-full block absolute"></span>
      </div>
    </div>
  );
}

export default RightSideBar;
