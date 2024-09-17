let marks = 85;
let grade = Math.floor(marks / 10); // floor round of to lower number 85/10 = 8.5 but Math.floor returns 8

switch (grade) {
    case 10:
    case 9:
    case 8:
        console.log("A Grade");
        break;
    case 7:
        console.log("B Grade");
        break;
    case 6:
        console.log("C Grade");
        break;
    case 5:
        console.log("D Grade");
        break;
    case 4:
        console.log("E Grade");
        break;
    default:
        console.log("F Grade");
        break;
}
