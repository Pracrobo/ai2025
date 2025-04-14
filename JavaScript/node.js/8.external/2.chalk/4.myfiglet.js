// 내가 라이브러리를 안쓰고 아키아트를 직접 만든다면?
// hello를 입력받아서
const asciiFont = {
    H : [
        '   ',
        '|_|',
        '| |',
        
    ],
    E : [
        '---',
        '|--',
        '|__',

    ],
    L : [
        '   ',
        '|  ',
        '|__',

    ],
    O : [
        ' _ ',
        '| |',
        '|_|',

    ]
}

function printAsciiArt(text) {
    const chars = text.toUpperCase().split('');
}
printAsciiArt('hello');