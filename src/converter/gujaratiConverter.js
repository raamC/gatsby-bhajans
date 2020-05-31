const test = '   '

function convertString(string) {
    let convertedString = ""
    for (i = 0; i < string.length; i++) {
        const codePoint = string.charCodeAt(i)


        if (charMap[codePoint]) {
            console.log(codePoint + " " + charMap[codePoint])
            convertedString = convertedString + charMap[codePoint]
            continue
        }
        if (codePoint == 32) {
            convertedString = convertedString + " "
            console.log("")
            continue
        }
        console.log(codePoint)
        convertedString = convertedString + "?"
    }
    console.log("Converted: " + convertedString)
}

const charMap = {
    
    // TOP ROW

    // xxxxx: "\u0A81", // ઁ
    58291: "\u0A82", // ં
    // xxxxx: "\u0A83", // ઃ

    58119: "\u0A85", // સ
    // x: "\u0A86", // આ
    58122: "\u0A87", // ઇ
    // xxxxx: "\u0A88", // ઈ
    // xxxxx: "\u0A89", // ઉ
    // xxxxx: "\u0A8A", // ઊ
    // xxxxx: "\u0A8B", // ઋ
    // xxxxx: "\u0A8C", // ઌ
    // xxxxx: "\u0A8D", // ઍ

    // xxxxx: "\u0A8F", // 	એ

    // SECOND ROW
    
    // x: "\u0A90", // ઐ
    // x: "\u0A91", // ઑ

    // x: "\u0A93", // ઓ
    // x: "\u0A94", // ઔ
    // x: "\u0A95", // ક
    // x: "\u0A96", // ખ
    // x: "\u0A97", // ગ
    // x: "\u0A98", // ઘ
    // x: "\u0A99", // ઙ
    // x: "\u0A9A", // ચ
    // x: "\u0A9B", // છ
    // x: "\u0A9C", // જ
    // x: "\u0A9D", // ઝ
    // x: "\u0A9E", // ઞ
    // x: "\u0A9F", // ટ

    // THIRD ROW

    // x: "\u0AA0", // ઠ
    // x: "\u0AA1", // ડ
    // x: "\u0AA2", // ઢ
    // x: "\u0AA3", // ણ
    // x: "\u0AA4", // ત
    // x: "\u0AA5", // થ
    58150: "\u0AA6", // દ
    // x: "\u0AA7", // ધ
    // x: "\u0AA8", // ન

    58153: "\u0AAA", // પ
    // x: "\u0AAB", // ફ
    58155: "\u0AAC", // બ
    // x: "\u0AAD", // ભ
    // x: "\u0AAE", // મ
    58158: "\u0AAF", // ય

    // FOURTH ROW

    // x: "\u0AB0", // ર

    // x: "\u0AB2", // લ
    // x: "\u0AB3", // ળ

    // x: "\u0AB5", // વ
    // x: "\u0AB6", // શ
    // x: "\u0AB7", // ષ
    58165: "\u0AB8", // સ
    // x: "\u0AB9", // હ

    // x: "\u0ABC", // ઼
    // x: "\u0ABD", // ઽ
    // x: "\u0ABE", // ા
    // x: "\u0ABF", // િ


    // FIFTH ROW

    // x: "\u0AC0", // ી
    // x: "\u0AC1", // ુ
    // x: "\u0AC2", // ૂ
    // x: "\u0AC3", // ૃ
    // x: "\u0AC4", // ૄ
    // x: "\u0AC5", // ૅ

    // x: "\u0AC7", // ે
    // x: "\u0AC8", // ૈ
    // x: "\u0AC9", // ૉ

    // x: "\u0ACB", // ો
    // x: "\u0ACC", // ૌ
    // x: "\u0ACD", // ્


    // SIXTH ROW

    // x: "\u0AD0", // ૐ


    // SEVENTH ROW

    // x: "\u0AE0", // ૠ	
    // x: "\u0AE1", // ૡ
    // x: "\u0AE2", // ૢ
    // x: "\u0AE3", // ૣ

    // x: "\u0AE6", // ૦
    // x: "\u0AE7", // ૧
    // x: "\u0AE8", // ૨
    // x: "\u0AE9", // ૩
    // x: "\u0AEA", // ૪
    // x: "\u0AEB", // ૫
    // x: "\u0AEC", // ૬
    // x: "\u0AED", // ૭
    // x: "\u0AEE", // ૮
    // x: "\u0AEF", // ૯

    // EIGHTH ROW

    // x: "\u0AF1", // ૱ 
    


    // 58169: "\u0ACC", muddles the different kano types
    // 58170: "\u0ABF", muddles spacing before િ


}

convertString(test)

// console.log("Conjunct test: \u0AA8\u0ACD\u0A97")