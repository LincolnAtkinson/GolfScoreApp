let a = document.getElementById('one');
let b = document.getElementById('two');
let c = document.getElementById('three');
let d = document.getElementById('four');
a.style.backgroundColor = 'lightblue';
selected = 1;

a.addEventListener('click', function() {
    selected = 1;
    a.style.backgroundColor = 'lightblue';
    b.style.backgroundColor = 'white';
    c.style.backgroundColor = 'white';
    d.style.backgroundColor = 'white';
});
b.addEventListener('click', function() {
    selected = 2;
    a.style.backgroundColor = 'white';
    b.style.backgroundColor = 'lightblue';
    c.style.backgroundColor = 'white';
    d.style.backgroundColor = 'white';
})
c.addEventListener('click', function() {
    selected = 3;
    a.style.backgroundColor = 'white';
    b.style.backgroundColor = 'white';
    c.style.backgroundColor = 'lightblue';
    d.style.backgroundColor = 'white';
})
d.addEventListener('click', function() {
    selected = 4;
    a.style.backgroundColor = 'white';
    b.style.backgroundColor = 'white';
    c.style.backgroundColor = 'white';
    d.style.backgroundColor = 'lightblue';
})
let start = document.querySelector('.start');
let home = document.querySelector('.home');
let card = document.querySelector('.scoring');
let cId = document.querySelector('.id');
let table = document.getElementById('table');
start.addEventListener('click', function() {
    if (cId.value !== ``) {
        home.classList.add('hidden');
        card.classList.remove('hidden');
        buildCard();
    }
});
let end = document.querySelector('.end');
end.addEventListener('click', function() {
    home.classList.remove('hidden');
    card.classList.add('hidden');
});

function buildCard() {
    if (cId.value === `11819`) {
        fetch('http://uxcobra.com/golfapi/course11819.txt')
            .then(response => response.json())
            .then(data => {
                const holes = data.data.holes;
                const holeData = document.getElementById('holeData').getElementsByTagName('tbody')[0];

                function populateTable() {
                    const yardageRow = holeData.getElementsByTagName('tr')[0];
                    const parRow = holeData.getElementsByTagName('tr')[1];
                    const handicapRow = holeData.getElementsByTagName('tr')[2];

                    yardageRow.innerHTML = '<th>Yardage</th>';
                    parRow.innerHTML = '<th>Par</th>';
                    handicapRow.innerHTML = '<th>Handicap</th>';

                    let outSum = 0;
                    let inSum = 0;

                    holes.forEach(hole => {
                        const teeBox = hole.teeBoxes.find(teeBox => teeBox.teeType === "men"); // Replace with the selected tee box
                        if (teeBox) {
                        yardageRow.insertCell().textContent = teeBox.yards;
                        parRow.insertCell().textContent = teeBox.par;
                        handicapRow.insertCell().textContent = teeBox.hcp;

                        if (hole.hole <= 9) {
                            outSum += teeBox.par;
                        } else {
                            inSum += teeBox.par;
                        }
                        }
                    });

                    const totalRow = holeData.getElementsByTagName('tr')[3];
                    totalRow.innerHTML = `<th>Total</th><td colspan="9">${outSum}</td><td colspan="9">${inSum}</td><td colspan="6">${outSum + inSum}</td>`;
                }
                populateTable();
            })
    }
    else if (cId.value === `18300`) {
        fetch('http://uxcobra.com/golfapi/course18300.txt')
            .then(response => response.text())
            .then(data => {
                const holes = data.data.holes;
                const holeData = document.getElementById('holeData').getElementsByTagName('tbody')[0];

                function populateTable() {
                    const yardageRow = holeData.getElementsByTagName('tr')[0];
                    const parRow = holeData.getElementsByTagName('tr')[1];
                    const handicapRow = holeData.getElementsByTagName('tr')[2];

                    yardageRow.innerHTML = '<th>Yardage</th>';
                    parRow.innerHTML = '<th>Par</th>';
                    handicapRow.innerHTML = '<th>Handicap</th>';

                    let outSum = 0;
                    let inSum = 0;

                    holes.forEach(hole => {
                        const teeBox = hole.teeBoxes.find(teeBox => teeBox.teeType === "men"); // Replace with the selected tee box
                        if (teeBox) {
                        yardageRow.insertCell().textContent = teeBox.yards;
                        parRow.insertCell().textContent = teeBox.par;
                        handicapRow.insertCell().textContent = teeBox.hcp;

                        if (hole.hole <= 9) {
                            outSum += teeBox.par;
                        } else {
                            inSum += teeBox.par;
                        }
                        }
                    });

                    const totalRow = holeData.getElementsByTagName('tr')[3];
                    totalRow.innerHTML = `<th>Total</th><td colspan="9">${outSum}</td><td colspan="9">${inSum}</td><td colspan="6">${outSum + inSum}</td>`;
                }
                populateTable();
        })
    }
    else if (cId.value === `19002`) {
        fetch('http://uxcobra.com/golfapi/course19002.txt')
            .then(response => response.text())
            .then(data => {
                holes = data.data.holes;
                const holeData = document.getElementById('holeData').getElementsByTagName('tbody')[0];

                function populateTable() {
                    const yardageRow = holeData.getElementsByTagName('tr')[0];
                    const parRow = holeData.getElementsByTagName('tr')[1];
                    const handicapRow = holeData.getElementsByTagName('tr')[2];

                    yardageRow.innerHTML = '<th>Yardage</th>';
                    parRow.innerHTML = '<th>Par</th>';
                    handicapRow.innerHTML = '<th>Handicap</th>';

                    let outSum = 0;
                    let inSum = 0;

                    holes.forEach(hole => {
                        const teeBox = hole.teeBoxes.find(teeBox => teeBox.teeType === "men"); // Replace with the selected tee box
                        if (teeBox) {
                        yardageRow.insertCell().textContent = teeBox.yards;
                        parRow.insertCell().textContent = teeBox.par;
                        handicapRow.insertCell().textContent = teeBox.hcp;

                        if (hole.hole <= 9) {
                            outSum += teeBox.par;
                        } else {
                            inSum += teeBox.par;
                        }
                        }
                    });

                    const totalRow = holeData.getElementsByTagName('tr')[3];
                    totalRow.innerHTML = `<th>Total</th><td colspan="9">${outSum}</td><td colspan="9">${inSum}</td><td colspan="6">${outSum + inSum}</td>`;
                }
                populateTable();
        })
    }
    else {
        alert(`Error: No Course Found With The Current Id. Please Refresh The Page`);
    }
}
