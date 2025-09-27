// Церковно-славянская азбука с названиями букв и ударениями
const churchSlavonicAlphabet = [
    { uppercase: String.fromCodePoint(0x0410), lowercase: String.fromCodePoint(0x0430), name: "а́зъ" },
    { uppercase: String.fromCodePoint(0x0411), lowercase: String.fromCodePoint(0x0431), name: "бу́ки" },
    { uppercase: String.fromCodePoint(0x0412), lowercase: String.fromCodePoint(0x0432), name: "вѣ́ди" },
    { uppercase: String.fromCodePoint(0x0413), lowercase: String.fromCodePoint(0x0433), name: "глаго́ль" },
    { uppercase: String.fromCodePoint(0x0414), lowercase: String.fromCodePoint(0x0434), name: "добро́" },
    { uppercase: String.fromCodePoint(0x0415), lowercase: String.fromCodePoint(0x0435), name: "є́сть" },
    { uppercase: String.fromCodePoint(0x0416), lowercase: String.fromCodePoint(0x0436), name: "живѣ́тє" },
    { uppercase: String.fromCodePoint(0x0405), lowercase: String.fromCodePoint(0x0455), name: "ѕѣлѡ" },
    { uppercase: String.fromCodePoint(0x0417), lowercase: String.fromCodePoint(0x0437), name: "землѧ́" },
    { uppercase: String.fromCodePoint(0x0418), lowercase: String.fromCodePoint(0x0438), name: "и́же" },
    { uppercase: String.fromCodePoint(0x0406), lowercase: String.fromCodePoint(0x0456), name: "и" },
    { uppercase: String.fromCodePoint(0x041A), lowercase: String.fromCodePoint(0x043A), name: "ка́кѡ" },
    { uppercase: String.fromCodePoint(0x041B), lowercase: String.fromCodePoint(0x043B), name: "лю́дiє" },
    { uppercase: String.fromCodePoint(0x041C), lowercase: String.fromCodePoint(0x043C), name: "мыслѣ́тє" },
    { uppercase: String.fromCodePoint(0x041D), lowercase: String.fromCodePoint(0x043D), name: "нашъ" },
    { uppercase: String.fromCodePoint(0x041E), lowercase: String.fromCodePoint(0x043E), name: "о́нъ" },
    { uppercase: String.fromCodePoint(0x041F), lowercase: String.fromCodePoint(0x043F), name: "поко́й" },
    { uppercase: String.fromCodePoint(0x0420), lowercase: String.fromCodePoint(0x0440), name: "рцы́" },
    { uppercase: String.fromCodePoint(0x0421), lowercase: String.fromCodePoint(0x0441), name: "сло́во" },
    { uppercase: String.fromCodePoint(0x0422), lowercase: String.fromCodePoint(0x0442), name: "тве́рдо" },
    { uppercase: String.fromCodePoint(0xA64A), lowercase: String.fromCodePoint(0xA64B), name: "у́къ" },
    { uppercase: String.fromCodePoint(0x0424), lowercase: String.fromCodePoint(0x0444), name: "фе́ртъ" },
    { uppercase: String.fromCodePoint(0x0425), lowercase: String.fromCodePoint(0x0445), name: "хѣ́ръ" },
    { uppercase: String.fromCodePoint(0x0460), lowercase: String.fromCodePoint(0x0461), name: "ѡмѣ́га" },
    { uppercase: String.fromCodePoint(0x047E), lowercase: String.fromCodePoint(0x047F), name: "ѡтъ" },
    { uppercase: String.fromCodePoint(0x0426), lowercase: String.fromCodePoint(0x0446), name: "цы" },
    { uppercase: String.fromCodePoint(0x0427), lowercase: String.fromCodePoint(0x0447), name: "че́рвь" },
    { uppercase: String.fromCodePoint(0x0428), lowercase: String.fromCodePoint(0x0448), name: "ша" },
    { uppercase: String.fromCodePoint(0x0429), lowercase: String.fromCodePoint(0x0449), name: "шча" },
    { uppercase: String.fromCodePoint(0x042A), lowercase: String.fromCodePoint(0x044A), name: "є́ръ" },
    { uppercase: String.fromCodePoint(0x042B), lowercase: String.fromCodePoint(0x044B), name: "є́ры" },
    { uppercase: String.fromCodePoint(0x042C), lowercase: String.fromCodePoint(0x044C), name: "є́рь" },
    { uppercase: String.fromCodePoint(0x0462), lowercase: String.fromCodePoint(0x0463), name: "ꙗть" },
    { uppercase: String.fromCodePoint(0x042E), lowercase: String.fromCodePoint(0x044E), name: "ю" },
    { uppercase: String.fromCodePoint(0xA656), lowercase: String.fromCodePoint(0xA657), name: "а́зъ иотированъ" },
    { uppercase: String.fromCodePoint(0x0466), lowercase: String.fromCodePoint(0x0467), name: "ю́съ ма́лъ" },
    { uppercase: String.fromCodePoint(0x046A), lowercase: String.fromCodePoint(0x046B), name: "ю́съ вели́къ" },
    { uppercase: String.fromCodePoint(0x046E), lowercase: String.fromCodePoint(0x046F), name: "кси́" },
    { uppercase: String.fromCodePoint(0x0470), lowercase: String.fromCodePoint(0x0471), name: "пси́" },
    { uppercase: String.fromCodePoint(0x0472), lowercase: String.fromCodePoint(0x0473), name: "ѳита́" },
    { uppercase: String.fromCodePoint(0x0474), lowercase: String.fromCodePoint(0x0475), name: "ѵ́жица" }
];

// Экспорт для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = churchSlavonicAlphabet;
}
