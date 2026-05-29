import "./index.css";

function UserCard({ name = "Emma", isLoggenIn }) {
  return (
    <div className="flex flex-col items-center justify-center m-2 border p-4">
      {isLoggenIn ? (
        <div className="flex flex-col items-center">
          <h1>Welcome {name}</h1>
          <p>{isLoggenIn && <span>You have three notification</span>}</p>
          <button className="bg-black text-white p-1 rounded cursor-pointer">
            Logout
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1>Please Login {name}</h1>
          <button className="bg-black text-white p-1 rounded cursor-pointer">
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export function User() {
  return (
    <>
      <UserCard name="Dak" isLoggenIn={false} />
      <UserCard isLoggenIn={true} />
    </>
  );
}
