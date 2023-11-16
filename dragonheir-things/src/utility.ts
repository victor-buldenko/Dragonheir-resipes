import { EType, Recipes } from "./data";

export const checkItemBuff = (buff: string, recipe: Recipes) => {
  switch (buff) {
    case "fire":
      return recipe.icons.includes(EType.fire);
      break;

    case "ice":
      return recipe.icons.includes(EType.ice);
      break;

    case "lightning":
      return recipe.icons.includes(EType.lightning);
      break;

    case "necro":
      return recipe.icons.includes(EType.necro);
      break;

    case "poison":
      return recipe.icons.includes(EType.poison);
      break;

    case "radiance":
      return recipe.icons.includes(EType.radiance);
      break;

    case "health":
      return recipe.icons.includes(EType.health);
      break;

    case "resist":
      return recipe.icons.includes(EType.resist);
      break;

    case "defence":
      return recipe.icons.includes(EType.defence);
      break;

    case "attack":
      return recipe.icons.includes(EType.attack);
      break;

    case "accuracy":
      return recipe.icons.includes(EType.accuracy);
      break;

    case "talk to animal":
      return recipe.icons.includes(EType.talk);
      break;

    case "movespeed":
      return recipe.icons.includes(EType.speed);
      break;

    case "sweets":
      return recipe.icons.includes(EType.sweets);
      break;

    default:
      return recipe;
      break;
  }
};

export const checkRarity = (arg: number) => {
  if (arg <= 14) {
    return "legendary";
  }

  if (arg > 14 && arg <= 34) {
    return "epic";
  }

  if (arg > 34 && arg <= 49) {
    return "uncommon";
  }

  return "common";
};

export const getBuffIconSrc = (arg: string) => {
  switch (arg) {
    case "fire":
      return EType.fire;
      break;

    case "ice":
      return EType.ice;
      break;

    case "lightning":
      return EType.lightning;
      break;

    case "necro":
      return EType.necro;
      break;

    case "poison":
      return EType.poison;
      break;

    case "radiance":
      return EType.radiance;
      break;

    case "health":
      return EType.health;
      break;

    case "resist":
      return EType.resist;
      break;

    case "defence":
      return EType.defence;
      break;

    case "attack":
      return EType.attack;
      break;

    case "accuracy":
      return EType.accuracy;
      break;

    case "talk to animal":
      return EType.talk;
      break;

    case "movespeed":
      return EType.speed;
      break;

    case "sweets":
      return EType.sweets;
      break;
  }
};
