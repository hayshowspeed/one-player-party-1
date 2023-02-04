controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player1.changeScoreBy(1)
    scaling.scaleByPixels(myBalloon, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    info.player2.changeScoreBy(1)
    myMouse2.setImage(assets.image`mouse2-down`)
    scaling.scaleByPixels(myBalloon2, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
    myMouse2.setImage(assets.image`mouse1-up`)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    myMouse.setImage(assets.image`mouse1-up`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, otherSprite) {
    carnival.onGameOverExpanded(carnival.WinTypes.Multi)
})
let myMouse2: Sprite = null
let myBalloon2: Sprite = null
let myMouse: Sprite = null
let myBalloon: Sprite = null
carnival.addLabelTo("Burstin' Balloons", carnival.Areas.Mid)
carnival.startCountdownGame(20, carnival.WinTypes.Lose)
scene.setBackgroundColor(9)
myBalloon = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myBalloon.setPosition(80, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
myMouse.setPosition(80, 93)
myMouse.setImage(assets.image`mouse1-down`)
simplified.wrap(function () {
    myBalloon2 = sprites.create(assets.image`balloon-2`, SpriteKind.Player)
    myBalloon2.setPosition(110, 93)
    myMouse2 = sprites.create(assets.image`mouse2-up`, SpriteKind.Mouse)
    myMouse2.setPosition(110, 93)
})
