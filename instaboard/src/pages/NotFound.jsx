import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export default function NotFound({ isDarkMode }) {
  const navigate = useNavigate();

  return (
    <main className={`${isDarkMode ? "dark-mode-main" : "light-mode-main"}  h-screen flex items-center justify-center`}>
      <div className={`flex flex-col items-center p-16 rounded-xl shadow-lg !p-10 ${isDarkMode ? "btnsContainerDark" : "btnsContainerLight"}`}>
        <h1 className=" text-white text-2xl mb-4">Error 404 Page Not Found</h1>
        
        <Button
          className="bg-white border border-black text-black px-4 py-2 rounded"
          onClick={() => navigate("/")}
          children={"Go back"}
        />
      </div>
    </main>
  );
}
