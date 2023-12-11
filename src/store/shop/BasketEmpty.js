import React from "react";
import { useTranslation } from "react-i18next";

const BasketEmpty = () => {

    const { t } = useTranslation();


    return <div className="EmptyBask">{t('Basket.Empty')}</div>


}

export default  BasketEmpty