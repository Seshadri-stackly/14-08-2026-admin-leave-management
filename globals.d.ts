// tells VS Code that React and ReactDOM exist (they come from the CDN
// script tags in index.html - there's no npm package to read types from)
declare const React: any;
declare const ReactDOM: any;

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
