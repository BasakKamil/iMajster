import React from "react"
import { useTranslation } from 'react-i18next';

const Header = () => {
    const [t,i18n] = useTranslation("global");

    return(
        <div>
              {t("header.message")}
        </div>
    )


}

export default Header;