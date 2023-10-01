// TODO: optional chaining
// e.g, when trying to access non-existent prop
// person.location.timezone.offset

const people = [
  {
    name: "John",
    location: {
      street: "123 Nairobi",
      timezone: { offset: "+7:00" },
    },
  },
  {
    name: "Doe",
    location: {
      street: "321 Nakuru",
    },
  },
  {
    name: "Juliana",
    location: {
      street: "453 Kiambu",
      timezone: { offset: "+9:00" },
    },
  },
];

people.forEach((person) => {
  // TODO: && operator
  //   console.log(
  //     person.location &&
  //       person.location.timezone &&
  //       person.location.timezone.offset
  //   );

  //   TODO: optional chaining
    console.log(person?.location?.timezone?.offset);

  // TODO: optional chaining with default value(||)
//   console.log(person?.location?.timezone?.offset || "hello world");
});
