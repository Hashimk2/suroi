import { type ItemDefinition, ItemType } from "../utils/objectDefinitions";

export interface SkinDefinition extends ItemDefinition {
    readonly itemType: ItemType.Skin
    readonly notInLoadout?: boolean
    readonly roleRequired?: string
    readonly noDrop?: boolean
}

export const Skins: SkinDefinition[] = [
    {
        idString: "hasanger",
        name: "Hasanger",
        itemType: ItemType.Skin,
        roleRequired: "hasanger"
    },
    {
        idString: "leia",
        name: "Leia",
        itemType: ItemType.Skin,
        roleRequired: "leia"
    },
    {
        idString: "katie",
        name: "Katie",
        itemType: ItemType.Skin,
        roleRequired: "katie"
    },
    {
        idString: "eipi",
        name: "eiπ",
        itemType: ItemType.Skin,
        roleRequired: "eipi"
    },
    {
        idString: "123op",
        name: "123OP",
        itemType: ItemType.Skin,
        roleRequired: "123op"
    },
    {
        idString: "radians",
        name: "Radians",
        itemType: ItemType.Skin,
        roleRequired: "radians"
    },
    {
        idString: "dev",
        name: "Developer Swag",
        itemType: ItemType.Skin,
        roleRequired: "dev"
    },
    {
        idString: "artist",
        name: "Artist Swag",
        itemType: ItemType.Skin,
        roleRequired: "artist"
    },
    {
        idString: "forest_camo",
        name: "Forest Camo",
        itemType: ItemType.Skin
    },
    {
        idString: "desert_camo",
        name: "Desert Camo",
        itemType: ItemType.Skin
    },
    {
        idString: "arctic_camo",
        name: "Arctic Camo",
        itemType: ItemType.Skin
    },
    {
        idString: "hazel_jumpsuit",
        name: "HAZEL Jumpsuit",
        itemType: ItemType.Skin,
        notInLoadout: true
    },
    {
        idString: "tomato_skin",
        name: "Tomato",
        itemType: ItemType.Skin
    },
    {
        idString: "greenhorn",
        name: "Greenhorn",
        itemType: ItemType.Skin
    },
    {
        idString: "blue_blood",
        name: "Blue Blood",
        itemType: ItemType.Skin
    },
    {
        idString: "silver_lining",
        name: "Silver Lining",
        itemType: ItemType.Skin
    },
    {
        idString: "pot_o_gold",
        name: "Pot o' Gold",
        itemType: ItemType.Skin
    },
    {
        idString: "gunmetal",
        name: "Gunmetal",
        itemType: ItemType.Skin
    },
    {
        idString: "algae",
        name: "Algae",
        itemType: ItemType.Skin
    },
    {
        idString: "twilight_zone",
        name: "Twilight Zone",
        itemType: ItemType.Skin
    },
    {
        idString: "bubblegum",
        name: "Bubblegum",
        itemType: ItemType.Skin
    },
    {
        idString: "solar_flare",
        name: "Solar Flare",
        itemType: ItemType.Skin
    },
    {
        idString: "beacon",
        name: "Beacon",
        itemType: ItemType.Skin
    },
    {
        idString: "full_moon",
        name: "Full Moon",
        itemType: ItemType.Skin
    },
    {
        idString: "basic_outfit",
        name: "Basic Outfit",
        itemType: ItemType.Skin,
        notInLoadout: true
    },
    {
        idString: "swiss_cheese",
        name: "Swiss Cheese",
        itemType: ItemType.Skin
    },
    {
        idString: "target_practice",
        name: "Target Practice",
        itemType: ItemType.Skin
    },
    {
        idString: "zebra",
        name: "Zebra",
        itemType: ItemType.Skin
    },
    {
        idString: "verified",
        name: "Verified",
        itemType: ItemType.Skin,
        notInLoadout: true
    },
    {
        idString: "nokilpls",
        name: "no kil pls",
        itemType: ItemType.Skin,
        notInLoadout: true
    },
    {
        idString: "debug",
        name: "Debug",
        itemType: ItemType.Skin,
        roleRequired: "dev",
        notInLoadout: true
    }
];
