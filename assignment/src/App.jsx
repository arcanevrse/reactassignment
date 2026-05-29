import "./index.css";

function Card({ title, description, tag, color = "blue" }) {
  const tagColor = {
    backgroundColor: color,
  };
  return (
    <div className="flex flex-col items-center justify-center p-4 border-2">
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        <h4 className="p-1.5" style={tagColor}>
          {tag}
        </h4>
      </div>
    </div>
  );
}

export function App() {
  return (
    <>
      <Card
        title="DakOS"
        description="A great dev and designer"
        tag="Dev/Designer"
        color="red"
      />
      <Card
        title="Wavr"
        description="A music Streaming Platform"
        tag="Music"
        color="green"
      />
      <Card
        title="Arcanevrse"
        description="Agency for Design and Development"
        tag="Agency"
      />
    </>
  );
}
