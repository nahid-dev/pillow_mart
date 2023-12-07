import '@/styles/globals.css'
import Layouts from "../../components/Layout/Layouts";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
}
