import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import { RootLayout } from "../components/layouts/RootLayout";

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
