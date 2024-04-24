export default function Page() {
  fetch("/api/test?page=5")
  return <div className="bg-red-500 flex h-screen" style={{ display: "flex", flexDirection: "column" }}>je suis test</div>;
}
