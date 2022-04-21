// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000607070e07070808080707070e0808050a0f1413110f0f12111016111017100b0a0f130f190f110f101110101210170b1a191519110f0f11111917171212161b1a1914140f111215111810171012101b1a0f0f1414150f11101411121817101b090f140f130f1111141016101010170c090f19130f110f11101110111718100c0103030d04040303030404030d030302000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.floorLight0,sprites.dungeon.floorDark0,sprites.dungeon.floorMixed,sprites.dungeon.floorDark4,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorLight1,sprites.dungeon.floorDark5,sprites.dungeon.floorDark1,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorLight2,sprites.dungeon.stairWest,sprites.dungeon.stairEast], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
