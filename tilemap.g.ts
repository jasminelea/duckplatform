// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1e000a000200000000000000000000000000000200000000000706000000000000040701060000000000000000000007010106000000000809000000000007060c0a0b000000000d07060000000c0a0a0b000000000c0b00000200000c0b000000000000000703090000000000020000000000000000000706000000000000000000000c0a0b0000000000070600000000000000000c0b0000020000000000000000020000000000000c0b0000070600070600000000070600000000070600070600000d070600000000000809000809000000070309000007010a0b000c0b000007030b000000000008090008090000000c0a0b050008090200000000000703090200000d0d0d08090d08090d0d00000002010103030101010101010303030101010101010303010303010101010101`, img`
. . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . 
2 2 2 . . . . . . . . . . 2 2 2 2 . . . . 2 2 . . . . . 2 2 
2 2 2 . . . . . 2 2 . . . 2 2 2 2 . . . . 2 2 . . . . . 2 2 
. . . . . . . 2 2 2 . . . . . . . . . . . . . . . 2 2 . . . 
. . . . . . . 2 2 2 . . . . . 2 2 . . . . . . . . 2 2 . . . 
. . . . . . . . . . . . . . . 2 2 . . 2 2 . 2 2 . . . . 2 2 
. . . . 2 2 . 2 2 . . . 2 2 . . . . . 2 2 . 2 2 . . . 2 2 2 
. . 2 2 2 2 . 2 2 . . 2 2 2 . . . . . 2 2 . 2 2 . . . 2 2 2 
. . 2 2 . . . . . . 2 2 2 . . . . . . 2 2 . 2 2 . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.shrub,sprites.castle.tilePath5,sprites.castle.saplingPine,sprites.castle.saplingOak,sprites.castle.tilePath3,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.swamp.swampTile3], TileScale.Sixteen);
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
