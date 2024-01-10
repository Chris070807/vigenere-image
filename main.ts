controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    // Prompt the user for the decryption key
    decryptionKey = game.askForString("Enter decryption key:")
    // Call the Vigenere function with the decryption key
    Vigenere(decryptionKey, mySprite, false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // Prompt the user for the encryption key
    encryptionKey = game.askForString("Enter encryption key:")
    // Call the Vigenere function with the encryption key
    Vigenere(encryptionKey, mySprite, true)
})
function Vigenere (password: string, imagemessage: Sprite, encode: boolean) {
    for (let row = 0; row <= imagemessage.height - 1; row++) {
        for (let column = 0; column <= imagemessage.width - 1; column++) {
            // Convert the character to a number between 0 and 15
            key = password.charCodeAt(pIndex) % 16
            if (encode) {
                imagemessage.image.setPixel(column, row, (imagemessage.image.getPixel(column, row) + key) % 16)
            } else {
                imagemessage.image.setPixel(column, row, (imagemessage.image.getPixel(column, row) - key + 16) % 16)
            }
            pIndex = (pIndex + 1) % password.length
        }
        pause(1)
    }
}
let key = 0
let encryptionKey = ""
let decryptionKey = ""
let mySprite: Sprite = null
let pIndex = 0
// This is the image to encode or decode
mySprite = sprites.create(assets.image`Pizza`, SpriteKind.Player)
mySprite.y = 70
game.showLongText("Press 'A' to encrypt pixels to a new color and 'B' reverse that encryption.", DialogLayout.Center)
