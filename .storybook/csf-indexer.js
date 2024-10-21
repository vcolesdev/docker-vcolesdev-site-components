// csf-indexer.js
import { loadCsf } from "@storybook/csf-tools";
import { read } from "fs-extra";

const createIndex = async (fileName, opts) => {
  const code = (await read(fileName, "utf-8")).toString();
  return loadCsf(code, { ...opts, fileName }).parse().indexInputs;
};

export const experimental_indexers = [
  {
    test: /\.[tj]sx?$/,
    createIndex,
  },
];
