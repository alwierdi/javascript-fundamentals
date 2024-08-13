//undefined karena menggunakan arrow function
const foo = {
  bar: 10,
  baz: () => console.log(this.bar),
};

foo.baz(); //undefined

const foo1 = {
  bar: 10,
  baz: function () {
    console.log(this.bar);
  },
};
foo1.baz();
