export enum EType {
  fire = 'el-fire.png',
  ice = 'el-ice.png',
  lightning = 'el-lightning.png',
  necro = 'el-necro.png',
  poison = 'el-poison.png',
  radiance = 'el-radiance.png',
  health = 'hearth.png',
  resist = 'resist.png',
  defence = 'shield.png',
  attack = 'sword.png',
  accuracy = 'target.png',
  talk = 'talk.png',
  speed = 'speed.png',
  sweets = 'drugs.png',
}

export type ingrID = [string, number];

export interface Recipes {
  id: number;
  name: string;
  icons: EType[];
  result: string[];
  ingrID: ingrID[];
  ingr?: string[] | null;
  altIngr?: string[] | null;
}

type LvUpBase = {
  "max_health*base": number;
  "phy_dmg*base": number;
  "defense*base": number;
  "atk_speed*bpct": number;
  "cd_haste*base": number;
  "crit_chance*bpct": number;
  "crit_bonus*bpct": number;
  "accuracy*base": number;
  "resistance*base": number;
  "mastery*base": number;
};

type Skill = {
  skillid: number;
  skillname: string;
  skilldesc: string;
  skillPath: string;
};

type HeroInspiration = {
  id: number;
  spell_tips: string;
  show_name_EN?: string;
  category?: string;
  show_name?: string;
};

type StoryItem = {
  unlock_tip_type: string;
  content: string;
  unlock_tip_params: string[];
};

export type Hero = {
  id: number;
  avatarPath: string;
  hero_alignment_dmz: string;
  rarity_type: number;
  heroname: string;
  show_title: string;
  "accuracy*base": "" | number;
  "atk_speed*bpct": "" | number;
  atk_type: string;
  attack_frequency: number;
  captain_enable_combat_types?: number | "";
  "cd_haste*base": "" | number;
  "crit_bonus*bpct": number;
  "crit_chance*bpct": number;
  "defense*base": number;
  dlc_part?: number;
  head_icon: number;
  lv_up_base: LvUpBase;
  "mastery*base": "" | number;
  "max_health*base": number;
  "phy_dmg*base": number;
  "resistance*base": "" | number;
  hero_race: string;
  hero_career: string;
  hero_alignment: string;
  rarity: string;
  element: string;
  orientation: string;
  heroId: string;
  userIconId: "" | number;
  change_slot?: "" | number;
  captain_slot?: string;
  skill: {
    slot4: Skill;
    slot3: Skill;
    slot2: Skill;
  };
  addbuff?: string;
  debuff?: string;
  control?: string;
  inspiration1: HeroInspiration | "";
  inspiration2: HeroInspiration | "";
  inspiration3: HeroInspiration | "";
  inspiration4: HeroInspiration | "";
  inspiration5: HeroInspiration | "";
  slot5?: number;
  story?: StoryItem[] | '""';
  imp: number;
  element_icon: string;
  inspiration3_abt?: number[];
  inspiration3_abt_val?: number[];
  inspiration4_abt?: number[];
  inspiration4_abt_val?: number[];
  traits: string;
  captain_slot_icon?: string;
  tier: {
    temporal_vortex: number;
    goblin_lair: number;
    grave_of_venom: number;
    grave_of_curse: number;
    grave_of_rot: number;
    heretical_ruins: number;
    ancient_battlefield: number;
    turret: number;
    arena: number;
    avg: number;
    heroId: number;
  };

  sub_model?: {
      path: number,
      position: number[],
      scale: number,
    },
};
