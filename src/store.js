import axios from "axios";
import { atom, Provider, useAtom } from "jotai";

export const msgs = atom([]);
export const personOne = atom("");
export const initialChatData = atom([{}]);
export const initialShowChat = atom(false);

export const fetchData = async () => {
  try {
    const resp = await axios.get("http://localhost:3001/");
    return resp.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const AppProvider = ({ children }) => {
  return <Provider>{children}</Provider>;
};
