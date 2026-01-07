import Landing from "./imports/Landing";

export default function App() {
  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
          background-color: #1A1A1A;
        }
        body {
          background-color: #1A1A1A;
          margin: 0;
          padding: 0;
        }
      `}</style>
      <Landing />
    </>
  );
}
