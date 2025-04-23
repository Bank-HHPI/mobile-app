// @ts-nocheck
import Ae from "../assets/flags/ae.svg";
import Ar from "../assets/flags/ar.svg";
import Au from "../assets/flags/au.svg";
import Br from "../assets/flags/br.svg";
import Ca from "../assets/flags/ca.svg";
import Cn from "../assets/flags/cn.svg";
import Co from "../assets/flags/co.svg";
import Dk from "../assets/flags/dk.svg";
import Dz from "../assets/flags/dz.svg";
import Eu from "../assets/flags/european_union.svg";
import Gb from "../assets/flags/gb.svg";
import In from "../assets/flags/in.svg";
import Jp from "../assets/flags/jp.svg";
import Kr from "../assets/flags/kr.svg";
import Ma from "../assets/flags/ma.svg";
import Qa from "../assets/flags/qa.svg";
import Sa from "../assets/flags/sa.svg";
import Tn from "../assets/flags/tn.svg";
import Tr from "../assets/flags/tr.svg";
import Us from "../assets/flags/us.svg";
import Ve from "../assets/flags/ve.svg";

const FlagWidth = 50;

export const accountsTypes = [
    {
        title: "Dirham des Émirats",
        currency: "AED",
        country: <Ae width={FlagWidth} height={FlagWidth} />,
        countryName: "Emirats Arabes Unis"
    },
    {
        title: "Peso Argentin",
        currency: "ARS",
        country: <Ar width={FlagWidth} height={FlagWidth} />,
        countryName: "Argentine"
    },
    {
        title: "Dollar Australien",
        currency: "AUD",
        country: <Au width={FlagWidth} height={FlagWidth} />,
        countryName: "Australie"
    },
    {
        title: "Real Brésilien",
        currency: "BRL",
        country: <Br width={FlagWidth} height={FlagWidth} />,
        countryName: "Brésil"
    },
    {
        title: "Dollar Canadien",
        currency: "CAD",
        country: <Ca width={FlagWidth} height={FlagWidth} />,
        countryName: "Canada"
    },
    {
        title: "Yuan Chinois",
        currency: "CNY",
        country: <Cn width={FlagWidth} height={FlagWidth} />,
        countryName: "Chine"
    },
    {
        title: "Peso Colombien",
        currency: "COP",
        country: <Co width={FlagWidth} height={FlagWidth} />,
        countryName: "Colombie"
    },
    {
        title: "Couronne Danoise",
        currency: "DKK",
        country: <Dk width={FlagWidth} height={FlagWidth} />,
        countryName: "Danemark"
    },
    {
        title: "Dinar Algérien",
        currency: "DZD",
        country: <Dz width={FlagWidth} height={FlagWidth} />,
        countryName: "Algérie"
    },
    {
        title: "Euro",
        currency: "EUR",
        country: <Eu width={FlagWidth} height={FlagWidth} />,
        countryName: "Union Européenne"
    },
    {
        title: "Livre Sterling",
        currency: "GBP",
        country: <Gb width={FlagWidth} height={FlagWidth} />,
        countryName: "Royaume-Uni"
    },
    {
        title: "Roupie Indienne",
        currency: "INR",
        country: <In width={FlagWidth} height={FlagWidth} />,
        countryName: "Inde"
    },
    {
        title: "Yen Japonais",
        currency: "JPY",
        country: <Jp width={FlagWidth} height={FlagWidth} />,
        countryName: "Japon"
    },
    {
        title: "Won Sud-Coréen",
        currency: "KRW",
        country: <Kr width={FlagWidth} height={FlagWidth} />,
        countryName: "Corée du Sud"
    },
    {
        title: "Dirham Marocain",
        currency: "MAD",
        country: <Ma width={FlagWidth} height={FlagWidth} />,
        countryName: "Maroc"
    },
    {
        title: "Riyal Qatari",
        currency: "QAR",
        country: <Qa width={FlagWidth} height={FlagWidth} />,
        countryName: "Qatar"
    },
    {
        title: "Riyal Saoudien",
        currency: "SAR",
        country: <Sa width={FlagWidth} height={FlagWidth} />,
        countryName: "Arabie Saoudite"
    },
    {
        title: "Dinar Tunisien",
        currency: "TND",
        country: <Tn width={FlagWidth} height={FlagWidth} />,
        countryName: "Tunisie"
    },
    {
        title: "Livre Turque",
        currency: "TRY",
        country: <Tr width={FlagWidth} height={FlagWidth} />,
        countryName: "Turquie"
    },
    {
        title: "Dollar US",
        currency: "USD",
        country: <Us width={FlagWidth} height={FlagWidth} />,
        countryName: "États-Unis"
    },
    {
        title: "Bolivar Vénézuélien",
        currency: "VES",
        country: <Ve width={FlagWidth} height={FlagWidth} />,
        countryName: "Venezuela"
    },
];