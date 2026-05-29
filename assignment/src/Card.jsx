import "./index.css";

function ProfileCard({ avatar, name, role, skill = ["none"] }) {
  return (
    <div className="flex flex-col items-center justify-center m-4">
      <h1>{avatar}</h1>
      <h3>{name}</h3>
      <p>{role}</p>
      <div>
        <p>
          Skill:
          {skill.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </p>
      </div>
    </div>
  );
}

export function Cards() {
  return (
    <>
      <ProfileCard
        avatar="🙍‍♂️"
        name="DakOS"
        role="Dev/Designer"
        skill={[" react,", " Ps"]}
      />
      <ProfileCard avatar="🙍‍♂️" name="Emma" role="Trader" />
    </>
  );
}
