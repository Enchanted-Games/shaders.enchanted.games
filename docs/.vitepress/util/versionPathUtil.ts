import { latest } from "../versions.mts";

/**
 * Appends a version to the start of a path if neccesary
 * @param path base path, should start with a `/`
 */
export const prefixVersionToPath = (path: string, version: string): string => {
  if (version === latest) {
    return path;
  }
  return `/${version}${path}`;
};
