import { LOCAL_STORAGE_PREFIX } from "../../config";

export const writeToLocalStorage = (key: string, state: any): void => {
  try {
    localStorage.setItem(
      `${LOCAL_STORAGE_PREFIX}_${key}`,
      JSON.stringify(state)
    );
  } catch (e) {
    throw e;
  }
};

export const getFromLocalStorage = (key: string): any => {
  try {
    let item: string = localStorage.getItem(`${LOCAL_STORAGE_PREFIX}_${key}`)!;

    return JSON.parse(item);
  } catch (e) {
    throw e;
  }
};
