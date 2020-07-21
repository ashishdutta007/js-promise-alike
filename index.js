class PromiseAlike {
  constructor(computation) {}
}

const promise = new PromiseAlike((resolve, reject) => {
  setTimeout(() => resolve(), 1000);
});
