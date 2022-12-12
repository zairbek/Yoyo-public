export type Sex = "male" | "female";

export enum SexTypes {
  male = 'male',
  female = 'female'
}

export const SexWords = {
  [SexTypes.male]: 'Мужчина',
  [SexTypes.female]: 'Женщина',
}
