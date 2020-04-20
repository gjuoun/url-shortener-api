export namespace Validation {
  export function isValidUrl(url: string) {
    const urlRegExp = /^https?:\/\/(.+).*/i;
    return urlRegExp.test(url);
  }
}
