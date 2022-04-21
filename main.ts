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
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(monkey, 75, 75)
    boomerang.destroy()
    effects.clearParticles(boomerang)
    scene.cameraShake(3, 200)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    pause(100)
    boomerang.setPosition(monkey.x, monkey.y)
})
let boomerang: Sprite = null
let monkey: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
music.baDing.play()
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
