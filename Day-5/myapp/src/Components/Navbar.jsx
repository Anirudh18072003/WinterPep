export default function Navbar({ user }) {
  const { name, age, country } = user;
  return (
    <>
      <h1>This is my first component</h1>
      <h5>
        Hello <strong>{name} </strong> your age is {age} and you live in{" "}
        {country}
      </h5>
    </>
  );
}
