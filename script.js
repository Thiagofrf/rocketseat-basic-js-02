let students = [
    {
        name: "Thiago",
        firstGrade: 9,
        secondGrade: 8
    },
    {
        name: "Andresa",
        firstGrade: 10,
        secondGrade: 4
    },
    {
        name: "Marcelo",
        firstGrade: 3,
        secondGrade: 4
    },
    {
        name: "Beatriz",
        firstGrade: 10,
        secondGrade: 5
    },
]


function calculateStudentsGrade(student) {
    let name = student.name;
    let firstGrade = student.firstGrade;
    let secondGrade = student.secondGrade;

    let finalGradeSum = firstGrade + secondGrade
    let finalGradeResult = finalGradeSum / 2

    let passed = finalGradeResult >= 7 ? `Parabéns ${name}! Você foi aprovado(a) no curso!` : `Que pena ${name}! Você não foi aprovado(a) no curso. Tente novamente.`

    alert(`
    A média do(a) aluno(a) ${name} é: ${finalGradeResult}
    ${passed}
    `)
}

for (let student in students) {
    calculateStudentsGrade(students[student])
}