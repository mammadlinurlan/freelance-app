import { createContext } from "react";

export const languageContext = createContext({
    value : "en",
    setter : () => {}
})