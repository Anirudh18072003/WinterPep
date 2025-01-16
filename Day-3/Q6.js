function CreateUserProfile(username, age = 25, country = "unknown") {
  return {
    username: username,
    age: age,
    country: country,
  };
}

console.log(CreateUserProfile("Anirudh"));
