export const LOCAL_STORAGE_TOKEN_KEY = "SGC/USR/TKN";

export class LocalStorage {
  static get(key) {
    const data = localStorage.getItem(key)
    return JSON.parse(data) || undefined;
  }

  static set(key, value) {
    localStorage.setItem(key.toString(), JSON.stringify(value));
  }

  static remove(key) {
    localStorage.removeItem(key.toString());
  }
}
