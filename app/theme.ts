import { theme as chakraTheme, Theme } from "@chakra-ui/react";
// @ts-ignore
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "./tailwind.config";

const tailwind = resolveConfig(tailwindConfig);

chakraTheme.colors.blue = tailwind.theme.colors.blue;
export const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      "html, body": {
        background: "#070707",
      },
    },
  },
};
