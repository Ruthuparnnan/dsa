const obj = {
  name: "sunny",
  sayMyName: function (city, country) {
    console.log(
      `Hello ${this.name} , How are you doing ? welcome to ${city} , ${country}`
    );
  },
};

const obj2 = { name: "winny" };

// obj.sayMyName();
obj.sayMyName.apply(obj2, ["kerala", "india"]);
