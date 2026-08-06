export {};

declare global {
  interface Window {
    supercool?: {
      track: (event: string, props?: Record<string, string | number | boolean | null>) => void;
    };
    __SUPERCOOL_GATEWAY__?: {
      hosts: Record<string, string>;
      key: string;
    };
  }
}
