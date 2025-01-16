function LogArguments(...a) {
  for (const element of a) {
    console.log(element);
  }
}

LogArguments("a", "b", "c", 10, 20, 40);
