import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { getImageSrcSet } from "./utils/image";
import "./App.css";
import { useCareers } from "./hooks/data";
import tw from "twin.macro";

function App() {
  // TODO: redux setting
  // TODO: react-spring testing
  // TODO: css variables setting
  // TODO: twin.macro vscode intellisense setting

  // console.log(process.env.NODE_ENV);
  // console.log(import.meta.env);
  // console.log(import.meta.env.VITE_PHASE);

  const imagePath = getImageSrcSet("/image/winter.png");

  const [count, setCount] = useState(0);

  const {
    data: careers,
    isLoading: isCareersLoading,
    isFetching: isCareersFetching,
    error: careersError,
  } = useCareers({
    // onSuccess, onError, ...
    // enabled: true,
    suspense: true,
  });

  console.log("careers :", careers);
  console.log("isCareersLoading :", isCareersLoading);
  console.log("isCareersFetching :", isCareersFetching);

  return (
    <>
      <div>
        <AppTitle>oh yes</AppTitle>
        <>
          {careersError && <p>Failed to load Career data.</p>}
          {careers && <p>Succeed to load Career data.</p>}
        </>

        <p>Apply img srcset</p>
        <Profile {...imagePath} alt="winter" />

        <p>Apply Svg</p>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

const AppTitle = tw.div`
  bg-slate-500
  text-white
`;

const Profile = tw.img`
  rounded-full
  w-16
`;
