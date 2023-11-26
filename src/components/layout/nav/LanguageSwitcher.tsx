// components
import React from 'react';
import { useStore } from '@/store';

function LanguageSwitcher() {
  const languagesList = useStore((store) => store.langauges);
  const currentLanguage = useStore((store) => store.currentLanguage);
  const switchLanguage = useStore((store) => store.switchLanguage);

  return (
    <div className="flex ml-6 items-center">
      {languagesList.map((lang, i) => {
        return (
          <React.Fragment key={lang.key}>
            <button
              onClick={() => switchLanguage(lang.key)}
              type="button"
              className={`${
                currentLanguage === lang.key && 'font-bold'
              } text text-sm text-gray-700`}
            >
              {lang.label}
            </button>
            {i < languagesList.length - 1 && (
              <span key={`${lang.key}-dash`} className="px-2">
                |
              </span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
