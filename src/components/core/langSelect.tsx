import React, { useState } from "react";
// import { HiGlobeAlt } from "react-icons/hi";
import { ExpandMore } from "@mui/icons-material";

const languages = [
  { code: "en", name: "English", flag: "https://flagcdn.com/gb.svg" },
  { code: "ru", name: "Русский", flag: "https://flagcdn.com/ru.svg" },
];

type lang = {
  code: string,
  name: string,
  flag: string,
}

export const SelectLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[1]);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const handleLanguageSelect = (language: lang) => {
    setSelectedLanguage(language);
    setShowLanguageMenu(!showLanguageMenu);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="lang-menu relative">
        <div
          className="selected-lang flex items-center justify-between cursor-pointer"
          onClick={() => setShowLanguageMenu(!showLanguageMenu)}
        >
          <img
            src={selectedLanguage.flag}
            alt={selectedLanguage.name}
            className="w-6 h-6 mr-2 inline-block"
          />
          <span className="font-inter font-light">{selectedLanguage.name}</span>
          <ExpandMore
            className={`!transition-transform !duration-300 ${showLanguageMenu ? "rotate-180" : ""
              }`}
          />
        </div>
        <ul
          className={`absolute z-20 right-0 mt-2 w-36 translate-x-0 bg-white border border-gray-200 rounded shadow-md ${showLanguageMenu
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2"
            } transition duration-300 ease-in-out`}
          style={{
            opacity: showLanguageMenu ? 1 : 0,
            transform: showLanguageMenu ? "translateY(0)" : "translateY(-10px)",
          }}
        >
          {languages.map((language) => (
            <li
              key={language.code}
              className="px-4 py-2 hover:bg-gray-100 text-black"
              onClick={() => handleLanguageSelect(language)}
            >
              <img
                src={language.flag}
                alt={language.name}
                className="w-6 h-6 mr-2 inline-block"
              />
              <span>{language.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
