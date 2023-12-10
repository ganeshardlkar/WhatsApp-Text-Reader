import axios from "axios";
import { atom, Provider, useAtom } from "jotai";

export const msgs = atom([]);
export const personOne = atom("");
export const initialChatData = atom([{}]);
export const initialShowChat = atom(false);

export const AppProvider = ({ children }) => {
  return <Provider>{children}</Provider>;
};
