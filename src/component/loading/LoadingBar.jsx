import NProgress from "nprogress";
import "nprogress/nprogress.css";

const LoadingBar = () => {
    NProgress.start();  // Mulai loading bar

    setTimeout(() => {
        NProgress.done(); // Selesai loading setelah beberapa detik
    }, 2000);

    return null; // Komponen ini nggak nge-render apa-apa
};

export default LoadingBar;
