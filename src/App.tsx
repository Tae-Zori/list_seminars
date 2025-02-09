import "./App.css";
import Main from "./components/features/Main/Main";
import GlobalProvider from "./provider/GlobalProvider";

function App() {
    return (
        <>
            <GlobalProvider>
                <Main />
            </GlobalProvider>
        </>
    );
}

export default App;
