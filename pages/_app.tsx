import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RootLayout } from "./layouts/RootLayout";
import { ConfigProvider } from "antd";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0aff9d",
          // fontFamily: "Poppins",
        },

        // components: {
        //   Rate: {
        //     colorFillContent: "#E2E3E7",
        //   },
        //   Button: {
        //     colorBgTextHover: "#FFFFFF",
        //   },
        // },
      }}
    >
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ConfigProvider>
  );
}
