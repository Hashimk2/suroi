import core from "../core";
import { type Game } from "../game";
import { type SuroiBitStream } from "../../../../common/src/utils/suroiBitStream";
import {
    INVENTORY_MAX_WEAPONS, ObjectCategory, InputActions
} from "../../../../common/src/constants";
import { type MeleeDefinition } from "../../../../common/src/definitions/melees";
import { type GunDefinition } from "../../../../common/src/definitions/guns";
import { ItemType } from "../../../../common/src/utils/objectDefinitions";
// This class manages the active player data and inventory
export class PlayerManager {
    game: Game;

    name!: string;

    private _health = 100;

    private _adrenaline = 100;

    get isMobile(): boolean {
        if (core.phaser === undefined) return false;
        return !core.phaser.device.os.desktop;
    }

    readonly movement = {
        up: false,
        left: false,
        down: false,
        right: false,
        // mobile
        moving: false
    };

    // had to put it here because its not a boolean
    // and inputManager assumes all keys of `movement` are booleans
    movementAngle = 0;

    readonly dirty = {
        health: true,
        adrenaline: true,
        inputs: true
    };

    rotation = 0;

    action = InputActions.None;
    itemToSwitch = 0;
    itemToDrop = 0;

    private _attacking = false;
    get attacking(): boolean { return this._attacking; }
    set attacking(attacking: boolean) {
        this._attacking = attacking;
        this.dirty.inputs = true;
    }

    turning = false;

    _lastItemIndex = 0;
    get lastItemIndex(): number { return this._lastItemIndex; }

    private _activeItemIndex = 2;

    set activeItemIndex(i: number) {
        if (this._lastItemIndex !== this._activeItemIndex) this._lastItemIndex = this._activeItemIndex;
        this._activeItemIndex = i;
    }

    get activeItemIndex(): number {
        return this._activeItemIndex;
    }

    equipItem(i: number): void {
        this.action = InputActions.EquipItem;
        this.itemToSwitch = i;
        this.dirty.inputs = true;
    }

    dropItem(i: number): void {
        this.action = InputActions.DropItem;
        this.itemToDrop = i;
        this.dirty.inputs = true;
    }

    swapGunSlots(): void {
        this.action = InputActions.SwapGunSlots;
        this.dirty.inputs = true;
    }

    interact(): void {
        this.action = InputActions.Interact;
        this.dirty.inputs = true;
    }

    reload(): void {
        this.action = InputActions.Reload;
        this.dirty.inputs = true;
    }

    cancelAction(): void {
        this.action = InputActions.Cancel;
        this.dirty.inputs = true;
    }

    get health(): number {
        return this._health;
    }

    set health(health: number) {
        this._health = health;
    }

    get adrenaline(): number {
        return this._adrenaline;
    }

    set adrenaline(adrenaline: number) {
        this._adrenaline = adrenaline;
    }

    constructor(game: Game) {
        this.game = game;
    }

    deserializeInventory(stream: SuroiBitStream): void {
        // Active item index
        if (stream.readBoolean()) {
            this.activeItemIndex = stream.readBits(2);
            $(".inventory-slot").removeClass("active");
            $(`#weapon-slot-${this.activeItemIndex + 1}`).addClass("active");
        }

        // Items dirty
        if (stream.readBoolean()) {
            for (let i = 0; i < INVENTORY_MAX_WEAPONS; i++) {
                const container = $(`#weapon-slot-${i + 1}`);
                if (stream.readBoolean()) {
                    // if the slot is not empty
                    container.addClass("has-item");
                    const item = stream.readObjectTypeNoCategory(ObjectCategory.Loot);
                    container.children(".item-name").text(item.definition.name);
                    const itemDef = item.definition as MeleeDefinition | GunDefinition;
                    container.children(".item-image").attr("src", require(`../../assets/img/game/weapons/${itemDef.idString}.svg`)).show();

                    if (itemDef.itemType === ItemType.Gun) {
                        const ammo = stream.readUint8();
                        const ammoText = `${ammo} / ${(item.definition as GunDefinition).capacity}`;
                        container.children(".item-ammo").text(ammoText);
                        if (i === this.activeItemIndex) $("#active-weapon-ammo").text(ammoText);
                    }
                } else {
                    // empty slot
                    container.removeClass("has-item");
                    container.children(".item-name").text("");
                    container.children(".item-image").removeAttr("src").hide();
                }
            }
        }
    }
}
