function ucFirst(str) {
  if (!str) {
    return "";
  }
  return str.at(0).toUpperCase() + str.slice(1);
}
