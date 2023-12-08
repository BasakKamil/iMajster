// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import ns1 from "./Translation/En/global.json";
import ns2 from "./Translation/Nl/global.json";
import ns2 from "./Translation/Pl/global.json";



declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "ns1";
    // custom resources type
    resources: {
      ns1: typeof ns1;
      ns2: typeof ns2;
      ns3: typeof ns3;
    };
    // other
  }
}