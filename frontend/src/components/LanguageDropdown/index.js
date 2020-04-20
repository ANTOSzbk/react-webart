import React, { useContext, useState } from "react"
import {
    ButtonDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from "reactstrap";
import cn from "classnames";
import { LanguageContext } from "../LanguageProvider/LanguageContext";

export default function LanguageDropdown() {
    const [isOpen, toggle] = useState(false)
    const languageContext = useContext(LanguageContext)
    const locale = languageContext.language;
    const getFlagUrl = (locale) => {
        switch (locale) {
            case 'en':
                return 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/us.svg';
            default:
                return `https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/${locale}.svg`;
        }
    }
    const handleLanguageChange = (lang) => {
        languageContext.setLanguage(lang);
    }
    const languages = ['pl', 'en'];
    return (
        <div className="wrapper">
            <ButtonDropdown isOpen={isOpen} toggle={() => toggle(!isOpen)}>
                <DropdownToggle className="localeDropdownContent">
                    <span>{locale}</span>
                    <img src={getFlagUrl(locale)} alt={locale} />
                </DropdownToggle>

                <DropdownMenu className="localeDropdownMenu">
                    {languages.map(language => (
                        <DropdownItem
                            key={language}
                            onClick={() => {
                                handleLanguageChange(language)
                            }}
                            className={cn(
                                'localeToggleItem',
                                locale === language ? 'localeToggleItemActive' : ''
                            )}
                        >
                            {language.toUpperCase()}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </ButtonDropdown>
        </div>
    );
}

