interface User {
  name: string;
  skills: string;
}

function print(user: User) {
  console.log("Name = " + user.name + ", Skill = " + user.skills);
}

const myself = {
  name: 'Soumyadeep',
  skills: 'Problem Solving',
};

print(myself);
