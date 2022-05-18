export type BreadCrumbCtxType = {
  nav: { label: string; url: string }[];
  setNav: (...args: any) => void;
};
