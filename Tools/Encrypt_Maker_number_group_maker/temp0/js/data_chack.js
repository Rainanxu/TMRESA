//Chack part
const Remainder_Form_Base10_Chack_Arrays=[
    //Number Base is : 10
    // Remainder : 0
    [
        [true,true,true,true,true,true,true,true,true,true],
        [true,false,false,false,false,false,false,false,false,false],
        [true,false,false,false,false,true,false,false,false,false],
        [true,false,false,false,false,false,false,false,false,false],
        [true,false,false,false,false,true,false,false,false,false],
        [true,false,true,false,true,false,true,false,true,false],
        [true,false,false,false,false,true,false,false,false,false],
        [true,false,false,false,false,false,false,false,false,false],
        [true,false,false,false,false,true,false,false,false,false],
        [true,false,false,false,false,false,false,false,false,false]
    ],
    // Remainder : 1
    [
        [false,false,false,false,false,false,false,false,false,false],
        [false,true,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,true,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,true,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,true]
    ],
    // Remainder : 2
    [
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,true,false,false,false,false,false,false,false],
        [false,true,false,false,false,false,true,false,false,false],
        [false,false,false,false,true,false,false,false,false,false],
        [false,false,false,true,false,false,false,false,true,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,true,false,false,false,false,true,false,false],
        [false,false,false,false,false,false,true,false,false,false],
        [false,false,false,false,true,false,false,false,false,true],
        [false,false,false,false,false,false,false,false,true,false]
    ],
    // Remainder : 3
    [
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,true,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,true,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,true],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,true,false,false]
    ],
    // Remainder : 4
    [
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,true,false,false,false,false,false],
        [false,false,true,false,false,false,false,true,false,false],
        [false,false,false,false,false,false,false,false,true,false],
        [false,true,false,false,false,false,true,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,true,false,false,false,false,true],
        [false,false,true,false,false,false,false,false,false,false],
        [false,false,false,true,false,false,false,false,true,false],
        [false,false,false,false,false,false,true,false,false,false]
    ],
    // Remainder : 5
    [
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,true,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,true,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,true,false,true,false,true,false,true,false,true],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,true,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,true,false,false,false,false]
    ],
    // Remainder : 6
    [
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,true,false,false,false],
        [false,false,false,true,false,false,false,false,true,false],
        [false,false,true,false,false,false,false,false,false,false],
        [false,false,false,false,true,false,false,false,false,true],
        [false,false,false,false,false,false,false,false,false,false],
        [false,true,false,false,false,false,true,false,false,false],
        [false,false,false,false,false,false,false,false,true,false],
        [false,false,true,false,false,false,false,true,false,false],
        [false,false,false,false,true,false,false,false,false,false]
    ],
    // Remainder : 7
    [
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,true,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,true],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,true,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,true,false,false,false,false,false,false]
    ],
    // Remainder : 8
    [
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,true,false],
        [false,false,false,false,true,false,false,false,false,true],
        [false,false,false,false,false,false,true,false,false,false],
        [false,false,true,false,false,false,false,true,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,true,false,false,false,false,true,false],
        [false,false,false,false,true,false,false,false,false,false],
        [false,true,false,false,false,false,true,false,false,false],
        [false,false,true,false,false,false,false,false,false,false]
    ],
    // Remainder : 9
    [
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,true],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,true,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,true,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,true,false,false,false,false,false,false,false,false]
    ]
];
const Remainder_Form_Base16_Chack_Arrays=[
    //Number Base is : 16
    // Remainder : 0
    [
        [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
        [true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [true,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false],
        [true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [true,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false],
        [true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [true,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false],
        [true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false],
        [true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [true,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false],
        [true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [true,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false],
        [true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [true,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false],
        [true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    ],
    // Remainder : 1
    [
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true]
    ],
    // Remainder : 2
    [
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],
        [false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false],
        [false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false],
        [false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false],
        [false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,true],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false]
    ],
    // Remainder : 3
    [
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false]
    ],
    // Remainder : 4
    [
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false],
        [false,true,false,false,false,true,false,false,false,true,false,false,false,true,false,false],
        [false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false],
        [false,false,false,true,false,false,false,true,false,false,false,true,false,false,false,true],
        [false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false]
    ],
    // Remainder : 5
    [
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false]
    ],
    // Remainder : 6
    [
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false],
        [false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false],
        [false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false],
        [false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,true],
        [false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false],
        [false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false],
        [false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false]
    ],
    // Remainder : 7
    [
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false]
    ],
    // Remainder : 8
    [
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false],
        [false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false],
        [false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false],
        [false,false,true,false,false,false,true,false,false,false,true,false,false,false,true,false],
        [false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false],
        [false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false],
        [false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false],
        [false,true,false,true,false,true,false,true,false,true,false,true,false,true,false,true],
        [false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false],
        [false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false],
        [false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false],
        [false,false,true,false,false,false,true,false,false,false,true,false,false,false,true,false],
        [false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false],
        [false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false],
        [false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false]
    ],
    // Remainder : 9
    [
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false]
    ],
    // Remainder : 10
    [
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false],
        [false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,true],
        [false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false],
        [false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false],
        [false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false]
    ],
    // Remainder : 11
    [
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false]
    ],
    // Remainder : 12
    [
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false],
        [false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false],
        [false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,true,false,false,false,true,false,false,false,true,false,false,false,true],
        [false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false],
        [false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false],
        [false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false],
        [false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false],
        [false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false],
        [false,true,false,false,false,true,false,false,false,true,false,false,false,true,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false],
        [false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false],
        [false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false]
    ],
    // Remainder : 13
    [
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false]
    ],
    // Remainder : 14
    [
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false],
        [false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,true],
        [false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false],
        [false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false],
        [false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false],
        [false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],
        [false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false]
    ],
    // Remainder : 15
    [
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    ]
];