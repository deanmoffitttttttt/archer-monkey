controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    boomerang = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 6 7 . . . . . . . 
        . . . . . . 7 6 6 7 . . . . . . 
        . . . . . . . 7 7 6 7 . . . . . 
        . . . . . . . . . 7 6 7 . . . . 
        . . . . . . . . . . 7 6 7 . . . 
        . . . . . . . . . . 7 6 7 . . . 
        . . . . . . . . . . 7 6 7 . . . 
        . . . . . . . . . . 7 6 7 . . . 
        . . . . . . . . . . 7 6 7 . . . 
        . . . . . . . 7 7 7 6 6 7 . . . 
        . . . . . . 7 6 6 6 6 7 . . . . 
        `, monkey, monkey.vx * 2, monkey.vy * 2)
    pause(50)
    controller.moveSprite(monkey, 0, 0)
    animation.runImageAnimation(
    boomerang,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . 7 6 7 7 7 . . . . . . 
        . . . . . . 7 6 6 6 7 . . . . . 
        . . . . . . . 7 7 6 7 7 . . . . 
        . . . . . . . . . 7 6 6 7 . . . 
        . . . . . . . . . . 7 7 6 7 . . 
        . . . . . . . . . . . 7 6 7 . . 
        . . . . . . . . . . . 7 6 7 . . 
        . . . . . . . . . . . 7 6 7 . . 
        . . . . . . . . . . 7 6 6 7 . . 
        . . . . . . . . . 7 6 6 7 . . . 
        . . . . . . . 7 7 6 6 7 . . . . 
        . . . . . . 7 6 6 7 7 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 7 7 7 7 7 . . . 
        . . . . . . . 7 6 6 6 6 6 7 . . 
        . . . . . . 7 6 7 7 7 7 6 6 7 . 
        . . . . . 7 7 6 7 . . . 7 6 6 7 
        . . . . 7 6 6 7 . . . . . 7 6 7 
        . . . . 7 6 7 . . . . . . . 7 6 
        . . . . 7 6 7 . . . . . . . 7 6 
        . . . 7 6 7 . . . . . . . . . 7 
        . . . . 7 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . 7 6 7 7 7 . . . . . . 
        . . . . . . 7 6 6 6 7 . . . . . 
        . . . . . . . 7 7 6 7 7 . . . . 
        . . . . . . . . . 7 6 6 7 . . . 
        . . . . . . . . . . 7 7 6 7 . . 
        . . . . . . . . . . . 7 6 7 . . 
        . . . . . . . . . . . 7 6 7 . . 
        . . . . . . . . . . . 7 6 7 . . 
        . . . . . . . . . . 7 6 6 7 . . 
        . . . . . . . . . 7 6 6 7 . . . 
        . . . . . . . 7 7 6 6 7 . . . . 
        . . . . . . 7 6 6 7 7 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 7 
        . . . 7 7 . . . . . . . . . 7 6 
        . . 7 6 6 7 . . . . . . . 7 6 7 
        . . . 7 6 7 . . . . . . . 7 6 7 
        . . . . 7 6 7 . . . . . 7 6 6 7 
        . . . . 7 6 6 7 . . . 7 6 7 7 . 
        . . . . . 7 6 6 7 7 7 7 6 7 . . 
        . . . . . . 7 6 6 6 6 6 7 . . . 
        . . . . . . . 7 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    boomerang.setFlag(SpriteFlag.AutoDestroy, false)
    boomerang.setFlag(SpriteFlag.DestroyOnWall, false)
    pause(415)
    boomerang.setVelocity(0, 0)
    boomerang.startEffect(effects.bubbles, 450)
    pause(450)
    boomerang.startEffect(effects.fire, 50)
    pause(50)
    boomerang.destroy()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    monkey,
    [img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        c d e e d d d d e e d d f . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e b d c . f f 
        . f d d d d e e e f f c . f e f 
        . f f f f f f e e e e f . f e f 
        . f f f f e e e e e e e f f e f 
        f d d f d d f e f e e e e f f . 
        f d b f d b f e f e e e e f . . 
        f f f f f f f f f f f f e f . . 
        . . . . . . . . . f c d d f . . 
        . . . . . . . . . . f f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f f . . . . 
        . c d d d d d d e e d d f . . . 
        . c d f d d f d e e b d c . . . 
        c d d f d d f d e e b d c . f f 
        c d e e d d d d e e f c . f e f 
        c d d d d c d e e e f . . f e f 
        . f c c c d e e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . f f e f e e f e e e e f . . 
        . f e f f e e f f f e e e f . . 
        f d d b d d c f f f f f f b f . 
        f d d c d d d f . . f c d d f . 
        . f f f f f f f . . . f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f f f . . . . 
        . . f d d d e e e e d d f . . . 
        . c d d d d d e e e b d c . . . 
        . c d d d d d d e e b d c . . . 
        c d d f d d f d e e f c . f f . 
        c d d f d d f d e e f . . f e f 
        c d e e d d d d e e f . . f e f 
        . f d d d c d e e f f . . f e f 
        . . f f f d e e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . . . f f e e e e e b f f . . 
        . . . f e f f e e c d d f f . . 
        . . f d d b d d c f f f . . . . 
        . . f d d c d d d f f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `],
    200,
    true
    )
})
function Create_enemy () {
    Ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdb2dd2bdbf......
        ......fcdc2112cdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    blob = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 3 . . . . . . . . . . . 
        . . . . 3 . . . . . . 3 3 3 . . 
        . . . . . 3 . 3 3 3 3 . . . . . 
        . . . . . 3 . 3 . . . . . . . . 
        . . . . . . 3 3 . . . . . . . . 
        . . . . . 3 3 3 . . . . . . . . 
        . . . . 3 . 3 3 3 . . . . . . . 
        . . . 3 . . 3 3 3 . . . . . . . 
        . . 3 . 3 3 . . . 3 . . 3 3 . . 
        . 3 3 3 . 3 3 3 3 3 3 3 . . . . 
        . 3 . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Snake = sprites.create(img`
        . . . c c c c c c . . . . . . . 
        . . c 6 7 7 7 7 6 c . . . . . . 
        . c 7 7 7 7 7 7 7 7 c . . . . . 
        c 6 7 7 7 7 7 7 7 7 6 c . . . . 
        c 7 c 6 6 6 6 c 7 7 7 c . . . . 
        f 7 6 2 6 6 2 6 7 7 7 f . . . . 
        f 7 7 7 7 7 7 7 7 7 7 f . . . . 
        . f 7 7 7 7 6 c 7 7 6 f . . . . 
        . . f c c c c 7 7 6 f c c c . . 
        . . c 6 2 7 7 7 f c c 7 7 7 c . 
        . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
        . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
        . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
        . . c 6 1 1 1 1 1 7 6 6 c c . . 
        . . . c c c c c c c c c c . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(Ghost, sprites.dungeon.floorDarkDiamond)
    tiles.placeOnRandomTile(blob, sprites.dungeon.floorDarkDiamond)
    tiles.placeOnRandomTile(Snake, sprites.dungeon.floorDarkDiamond)
    tiles.placeOnRandomTile(Ghost, sprites.dungeon.darkGroundNorthWest1)
    tiles.placeOnRandomTile(blob, sprites.dungeon.darkGroundNorthWest1)
    tiles.placeOnRandomTile(Snake, sprites.dungeon.darkGroundNorthWest1)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(sprite, sprites.dungeon.floorDarkDiamond)
    tiles.placeOnRandomTile(sprite, sprites.dungeon.darkGroundNorthWest1)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, monkey)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, monkey)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestOpen)
    info.changeScoreBy(5)
    scene.cameraShake(2, 200)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    monkey,
    [img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . . f e e d f d d f d c . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        f f . c d b e e e d d c c c c c 
        f e f . c f f e e e d d d d f . 
        f e f . f e e e e f f f f f f . 
        f e f f e e e e e e e f f f f . 
        . f f e e e e f e f d d f d d f 
        . . f e e e e f e f b d f b d f 
        . . f e f f f f f f f f f f f f 
        . . f d d c f . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . f f e e e d d d d f . . 
        . . . f d d e e d d d d d d c . 
        . . . c d b e e d f d d f d c . 
        f f . c d b e e d f d d f d d c 
        f e f . c f e e d d d d e e d c 
        f e f . . f e e e d c d d d d c 
        f e f . . f f e e e d c c c f . 
        f e f . f e e e e f f f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f e e e e f e e f e f f . . 
        . . f e e e f f f e e f f e f . 
        . f b f f f f f f c d d b d d f 
        . f d d c f . . f d d d c d d f 
        . . f f f . . . f f f f f f f . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . f f f e e e e e f . . . 
        . . . f d d e e e e d d d f . . 
        . . . c d b e e e d d d d d c . 
        . . . c d b e e d d d d d d c . 
        . f f . c f e e d f d d f d d c 
        f e f . . f e e d f d d f d d c 
        f e f . . f e e d d d d e e d c 
        f e f . . f f e e d c d d d f . 
        f e f . f e e e e e d f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f f b e e e e e f f . . . . 
        . . f f d d c e e f f e f . . . 
        . . . . f f f c d d b d d f . . 
        . . . . . f f d d d c d d f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        . . . . c f e e e d d c c c c c 
        . . . . . f f e e e d d d d f . 
        . . . . f e e e e f f f f f . . 
        f f . f e e e e e e f f . . . . 
        f e . f e e f e e f e e f . . . 
        f e . f e e e f e e f e e f . . 
        f e f f e f b b f b d f d b f . 
        f f f f e b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        . . . . c f e e e d d c c c c c 
        . . . . . f f e e e d d d d f . 
        . . . . f e e e e f f f f f . . 
        f f . f e e e e e e f f . . . . 
        f e . f e e f e e f e e f . . . 
        f e . f e e e f e e f e e f . . 
        f e f f e f b b f b d f d b f . 
        f f f f e b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.stairWest)
    info.changeScoreBy(1)
    if (info.score() >= 12) {
        tiles.setCurrentTilemap(tilemap`level4`)
        Create_enemy()
    } else {
        game.over(false)
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(monkey, 75, 75)
    boomerang.destroy()
    effects.clearParticles(boomerang)
    scene.cameraShake(3, 200)
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.floorDarkDiamond, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorDark4)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    pause(100)
    boomerang.setPosition(monkey.x, monkey.y)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.startEffect(effects.disintegrate, 200)
    otherSprite.destroy()
    info.changeScoreBy(2)
})
let Snake: Sprite = null
let blob: Sprite = null
let Ghost: Sprite = null
let boomerang: Sprite = null
let monkey: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
monkey = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
monkey.setPosition(23, 135)
controller.moveSprite(monkey, 100, 100)
scene.cameraFollowSprite(monkey)
monkey.setStayInScreen(false)
boomerang = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, monkey, 50, 50)
let username = game.askForString("")
Create_enemy()
forever(function () {
    monkey.sayText(username)
    if (info.score() >= 21) {
        game.over(true, effects.starField)
    }
})
