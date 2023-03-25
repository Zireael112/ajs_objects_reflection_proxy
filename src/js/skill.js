// const character = {
//   name: 'Лучник',
//   type: 'Bowman',
//   health: 50,
//   level: 3,
//   attack: 40,
//   defence: 10,
//   special: [
//     {
//       id: 8,
//       name: 'Двойной выстрел',
//       icon: 'http://...',
//       description: 'Двойной выстрел наносит двойной урон',
//     },
//     {
//       id: 9,
//       name: 'Нокаутирующий удар',
//       icon: 'http://...',
//     },
//   ],
// };

export default function getSkill(person) {
  const result = [];
  const { special } = person;
  for (const {
    id,
    name,
    icon,
    description = 'Описание недоступно',
  } of special) {
    const template = {
      id,
      name,
      icon,
      description,
    };
    result.push(template);
  }
  return result;
}

// console.log(getSkill(character));
