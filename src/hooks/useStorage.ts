import { useEffect, useState } from "react";

function useStorage() {
  const storage = window.localStorage;

  const [storageData, setStorageData] = useState<Storage | null>(null);

  const getStorageData = (key: string) => {
    return storage.getItem(key);
  };

  const clearStorageData = () => {
    return storage.clear();
  };

  useEffect(() => {}, [storage, storageData]);

  return {
    getStorageData,
    clearStorageData,
    setStorageData,
    storage,
    storageData,
  };
}

export { useStorage };
