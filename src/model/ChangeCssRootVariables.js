import { Theme } from "react-select";

export function ChangeCssRootVariables(theme: Theme) {
  const root = document.querySelector(":root");

  const components = [
    "body-background",
    "components-background",
    "card-background",
    "card-shadow",
    "text-color",
  ];
  components.forEach((components) => {
    root.style.setProperty(
      `--${components}-default`,
      `var(--${components}-${theme})`
    );
  });
}
