import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { ProjectDetails } from "./pages/ProjectDetails";


const client = new ApolloClient({
  uri: import.meta.env.VITE_URI,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="container m-auto h-screen flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Navigate to="/Projects" />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Projects/:id" element={<ProjectDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
