import { Currency } from "../shared.interface";

export interface IAccountSummary {
    characters: SummaryCharacter;
    itemComponents: ItemComponents;

    //Runtime variables
    characterData: Array<CharacterBase>;
}

interface ItemComponents {
}

interface SummaryCharacter {
    data: { [key: number]: CharacterBase[] };
    privacy: number;
}

export interface CharacterBase {
    baseCharacterLevel: number;
    characterId: string;
    classHash: number;
    classType: number;
    dateLastPlayed: string;
    emblemBackgroundPath: string;
    emblemHash: number;
    emblemPath: string;
    genderHash: number;
    genderType: number;
    levelProgression: LevelProgression;
    light: number;
    membershipId: string;
    membershipType: number;
    minutesPlayedThisSession: string;
    minutesPlayedTotal: string;
    percentToNextLevel: number;
    raceHash: number;
    raceType: number;
    stats: any; // AssocArray of hash?

    //Runtime variables
    classValue: any;
    genderValue: any;
    raceValue: any;
}

export interface LevelProgression {
    dailyProgress: number;
    weeklyProgress: number;
    currentProgress: number;
    level: number;
    step: number;
    progressToNextLevel: number;
    nextLevelAt: number;
    progressionHash: number;
}

/*
interface Stats {
    STAT_DEFENSE: Stat;
    STAT_INTELLECT: Stat;
    STAT_DISCIPLINE: Stat;
    STAT_STRENGTH: Stat;
    STAT_LIGHT: Stat;
    STAT_ARMOR: Stat;
    STAT_AGILITY: Stat;
    STAT_RECOVERY: Stat;
    STAT_OPTICS: Stat;
    STAT_ATTACK_SPEED: Stat;
    STAT_DAMAGE_REDUCTION: Stat;
    STAT_ATTACK_EFFICIENCY: Stat;
    STAT_ATTACK_ENERGY: Stat;
}*/

interface Stat {
    statHash: number;
    value: number;
    maximumValue: number;
}

interface Customization {
    personality: any;
    face: any;
    skinColor: number;
    lipColor: any;
    eyeColor: number;
    hairColor: any;
    featureColor: any;
    decalColor: any;
    wearHelmet: boolean;
    hairIndex: number;
    featureIndex: number;
    decalIndex: number;
}

export interface PeerView {
    equipment: Equipment[];
}

export interface Equipment {
    itemHash: any;
    dyes: Dye[];
}

export interface Dye {
    channelHash: any;
    dyeHash: any;
}

interface Inventory {
    items: Item[];
    currencies: Currency[];
}

interface Item {
    itemHash: any;
    itemId: string;
    quantity: number;
    damageType: number;
    damageTypeHash: any;
    isGridComplete: boolean;
    transferStatus: number;
    state: number;
    characterIndex: number;
    bucketHash: any;
    primaryStat: Stat;
}