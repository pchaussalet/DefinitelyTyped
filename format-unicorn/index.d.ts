// Type definitions for format-unicorn
// Project: https://github.com/tallesl/format-unicorn
// Definitions by: kruncher <https://github.com/kruncher/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare global {
  interface String {
    formatUnicorn(replacements: {}): string;
  }
}

declare var isModule: undefined;
export = isModule;
