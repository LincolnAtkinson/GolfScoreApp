let a = document.getElementById('one');
let b = document.getElementById('two');
let c = document.getElementById('three');
let d = document.getElementById('four');
a.style.borderColor = 'lightblue';
selected = 1;
let cId = document.querySelector('.id');

a.addEventListener('click', function() {
    selected = 1;
    a.style.borderColor = 'lightblue';
    b.style.borderColor = 'black';
    c.style.borderColor = 'black';
    d.style.borderColor = 'black';
});
b.addEventListener('click', function() {
    selected = 2;
    a.style.borderColor = 'black';
    b.style.borderColor = 'lightblue';
    c.style.borderColor = 'black';
    d.style.borderColor = 'black';
})
c.addEventListener('click', function() {
    selected = 3;
    a.style.borderColor = 'black';
    b.style.borderColor = 'black';
    c.style.borderColor = 'lightblue';
    d.style.borderColor = 'black';
})
d.addEventListener('click', function() {
    selected = 4;
    a.style.borderColor = 'black';
    b.style.borderColor = 'black';
    c.style.borderColor = 'black';
    d.style.borderColor = 'lightblue';
})

let th = document.getElementById('thanks');
let fox = document.getElementById('fox');
let oak = document.getElementById('spanish');
th.addEventListener('click', function() {
    cId.value = `11819`;
})
fox.addEventListener('click', function() {
    cId.value = `18300`;
})
oak.addEventListener('click', function() {
    cId.value = `19002`;
})
let p = document.getElementById('pro');
let ch = document.getElementById('champion');
let m = document.getElementById('men');
let w = document.getElementById('women');
m.style.borderColor = 'lightblue';
teeS = 'men';

let start = document.querySelector('.start');
let home = document.querySelector('.home');
let card = document.querySelector('.scoring');
let Tee = document.querySelector('.Tee');
let tee = document.querySelector('.tee');
let score = document.querySelector('.scoreCard');

let table = document.getElementById('table');
start.addEventListener('click', function() {
    home.classList.add('hidden');
    tee.classList.remove('hidden');
    addTees(cId.value);
});
score.addEventListener('click', function() {
    tee.classList.add('hidden');
    card.classList.remove('hidden2');
    buildCard();
});

let end = document.querySelector('.end');
end.addEventListener('click', function() {
    location.reload();
});

function addTees(id) {
    console.log(id);
    if (id !== `19002`) {
        p.addEventListener('click', function() {
            teeS = 'pro';
            p.style.borderColor = 'lightblue';
            ch.style.borderColor = 'black';
            m.style.borderColor = 'black';
            w.style.borderColor = 'black';
        });
    }
    else {
        p.classList.add('red');
    }
    ch.addEventListener('click', function() {
        teeS = 'champion';
        if (id !== `19002`) {
           p.style.borderColor = 'black';
        }
            ch.style.borderColor = 'lightblue';
            m.style.borderColor = 'black';
            w.style.borderColor = 'black';
    })
    m.addEventListener('click', function() {
        teeS = 'men';
        if (id !== `19002`) {
            p.style.borderColor = 'black';
        }
            ch.style.borderColor = 'black';
            m.style.borderColor = 'lightblue';
            w.style.borderColor = 'black';
    })
    w.addEventListener('click', function() {
        teeS = 'women';
        if (id !== `19002`) {
            p.style.borderColor = 'black';
        }
            ch.style.borderColor = 'black';
            m.style.borderColor = 'black';
            w.style.borderColor = 'lightblue';
    })
}

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
                    const playeraRow = holeData.getElementsByTagName('tr')[3];
                    const playerbRow = holeData.getElementsByTagName('tr')[4];
                    const playercRow = holeData.getElementsByTagName('tr')[5];
                    const playerdRow = holeData.getElementsByTagName('tr')[6];

                    let outSump = 0;
                    let inSump = 0;
                    let outSumy = 0;
                    let inSumy = 0;
                    let outSumh = 0;
                    let inSumh = 0;

                    holes.forEach(hole => {
                        const teeBox = hole.teeBoxes.find(teeBox => teeBox.teeType === teeS);
                        if (teeBox) {
                            yardageRow.insertCell().textContent = teeBox.yards;
                            parRow.insertCell().textContent = teeBox.par;
                            handicapRow.insertCell().textContent = teeBox.hcp;

                            if (hole.hole <= 9) {
                                outSump += teeBox.par;
                                outSumy += teeBox.yards;
                                outSumh += teeBox.hcp;
                            } else {
                                inSump += teeBox.par;
                                inSumy += teeBox.yards;
                                inSumh += teeBox.hcp;
                            }
                        }
                    });
                    yardageRow.insertCell().textContent = outSumy;
                    yardageRow.insertCell().textContent = inSumy;
                    yardageRow.insertCell().textContent = outSumy + inSumy;
                    parRow.insertCell().textContent = outSump;
                    parRow.insertCell().textContent = inSump;
                    parRow.insertCell().textContent = outSump + inSump;
                    handicapRow.insertCell().textContent = outSumh;
                    handicapRow.insertCell().textContent = inSumh;
                    handicapRow.insertCell().textContent = outSumh + inSumh;
                    if (selected < 4) {
                        playerdRow.remove();
                        if (selected < 3) {
                            playercRow.remove();
                            if (selected < 2) {
                                playerbRow.remove();
                            }
                        }
                    }
                    let paOCell = document.querySelectorAll('.scoreaO');
                    let pbOCell = document.querySelectorAll('.scorebO');
                    let pcOCell = document.querySelectorAll('.scorecO');
                    let pdOCell = document.querySelectorAll('.scoredO');
                    let paICell = document.querySelectorAll('.scoreaI');
                    let pbICell = document.querySelectorAll('.scorebI');
                    let pcICell = document.querySelectorAll('.scorecI');
                    let pdICell = document.querySelectorAll('.scoredI');
                    let paO = document.querySelector('.paOut');
                    let paI = document.querySelector('.paIn');
                    let paT = document.querySelector('.paTotal');
                    let pbO = document.querySelector('.pbOut');
                    let pbI = document.querySelector('.pbIn');
                    let pbT = document.querySelector('.pbTotal');
                    let pcO = document.querySelector('.pcOut');
                    let pcI = document.querySelector('.pcIn');
                    let pcT = document.querySelector('.pcTotal');
                    let pdO = document.querySelector('.pdOut');
                    let pdI = document.querySelector('.pdIn');
                    let pdT = document.querySelector('.pdTotal');
                    let paOSum = 0;
                    let paISum = 0;
                    let pbOSum = 0;
                    let pbISum = 0;
                    let pcOSum = 0;
                    let pcISum = 0;
                    let pdOSum = 0;
                    let pdISum = 0;

                    paOCell.forEach(function(paOCell) {
                        let prevV = parseInt(paOCell.textContent) || 0;
                        paOCell.addEventListener('input', function() {
                            let val = parseInt(paOCell.textContent) || 0;
                            paOSum += val - prevV;
                            prevV = val;
                            paO.textContent = paOSum;
                            paT.textContent = paOSum + paISum;
                        })
                    })
                    paICell.forEach(function(paICell) {
                        let prevV = parseInt(pdICell.textContent) || 0;
                        paICell.addEventListener('input', function() {
                            let val = parseInt(paICell.textContent) || 0;
                            paISum += val - prevV;
                            prevV = val;
                            paI.textContent = paISum;
                            paT.textContent = paOSum + paISum;
                        })
                    })
                    pbOCell.forEach(function(pbOCell) {
                        let prevV = parseInt(pbOCell.textContent) || 0;
                        pbOCell.addEventListener('input', function() {
                            let val = parseInt(pbOCell.textContent) || 0;
                            pbOSum += val- prevV;
                            prevV = val;
                            pbO.textContent = pbOSum;
                            pbT.textContent = pbOSum + pbISum;
                        })
                    })
                    pbICell.forEach(function(pbICell) {
                        let prevV = parseInt(pbICell.textContent) || 0;
                        pbICell.addEventListener('input', function() {
                            let val = parseInt(pbICell.textContent) || 0;
                            pbISum += val - prevV;
                            prevV = val;
                            pbI.textContent = pbISum;
                            pbT.textContent = pbOSum + pbISum;
                        })
                    })
                    pcOCell.forEach(function(pcOCell) {
                        let prevV = parseInt(pcOCell.textContent) || 0;
                        pcOCell.addEventListener('input', function() {
                            let val = parseInt(pcOCell.textContent) || 0;
                            pcOSum += val- prevV;
                            prevV = val;
                            pcO.textContent = pcOSum;
                            pcT.textContent = pcOSum + pcISum;
                        })
                    })
                    pcICell.forEach(function(pcICell) {
                        let prevV = parseInt(pcICell.textContent) || 0;
                        pcICell.addEventListener('input', function() {
                            let val = parseInt(pcICell.textContent) || 0;
                            pcISum += val - prevV;
                            prevV = val;
                            pcI.textContent = pcISum;
                            pcT.textContent = pcOSum + pcISum;
                        })
                    })
                    pdOCell.forEach(function(pdOCell) {
                        let prevV = parseInt(pdOCell.textContent) || 0;
                        pdOCell.addEventListener('input', function() {
                            let val = parseInt(pdOCell.textContent) || 0;
                            pdOSum += val - prevV;
                            prevV = val;
                            pdO.textContent = pdOSum;
                            pdT.textContent = pdOSum + pdISum;
                        })
                    })
                    pdICell.forEach(function(pdICell) {
                        let prevV = parseInt(pdICell.textContent) || 0;
                        pdICell.addEventListener('input', function() {
                            let val = parseInt(pdICell.textContent) || 0;
                            pdISum += val - prevV;
                            prevV = val;
                            pdI.textContent = pdISum;
                            pdT.textContent = pdOSum + pdISum;
                        })
                    })
                }
                populateTable();
            })
    }
    else if (cId.value === `18300`) {
        fetch('http://uxcobra.com/golfapi/course18300.txt')
            .then(response => response.json())
            .then(data => {
                const holes = data.data.holes;
                const holeData = document.getElementById('holeData').getElementsByTagName('tbody')[0];

                function populateTable() {
                    const yardageRow = holeData.getElementsByTagName('tr')[0];
                    const parRow = holeData.getElementsByTagName('tr')[1];
                    const handicapRow = holeData.getElementsByTagName('tr')[2];
                    const playeraRow = holeData.getElementsByTagName('tr')[3];
                    const playerbRow = holeData.getElementsByTagName('tr')[4];
                    const playercRow = holeData.getElementsByTagName('tr')[5];
                    const playerdRow = holeData.getElementsByTagName('tr')[6];

                    let outSump = 0;
                    let inSump = 0;
                    let outSumy = 0;
                    let inSumy = 0;
                    let outSumh = 0;
                    let inSumh = 0;

                    holes.forEach(hole => {
                        const teeBox = hole.teeBoxes.find(teeBox => teeBox.teeType === teeS);
                        if (teeBox) {
                            yardageRow.insertCell().textContent = teeBox.yards;
                            parRow.insertCell().textContent = teeBox.par;
                            handicapRow.insertCell().textContent = teeBox.hcp;

                            if (hole.hole <= 9) {
                                outSump += teeBox.par;
                                outSumy += teeBox.yards;
                                outSumh += teeBox.hcp;
                            } else {
                                inSump += teeBox.par;
                                inSumy += teeBox.yards;
                                inSumh += teeBox.hcp;
                            }
                        }
                    });
                    yardageRow.insertCell().textContent = outSumy;
                    yardageRow.insertCell().textContent = inSumy;
                    yardageRow.insertCell().textContent = outSumy + inSumy;
                    parRow.insertCell().textContent = outSump;
                    parRow.insertCell().textContent = inSump;
                    parRow.insertCell().textContent = outSump + inSump;
                    handicapRow.insertCell().textContent = outSumh;
                    handicapRow.insertCell().textContent = inSumh;
                    handicapRow.insertCell().textContent = outSumh + inSumh;
                    if (selected < 4) {
                        playerdRow.remove();
                        if (selected < 3) {
                            playercRow.remove();
                            if (selected < 2) {
                                playerbRow.remove();
                            }
                        }
                    }
                    let paOCell = document.querySelectorAll('.scoreaO');
                    let pbOCell = document.querySelectorAll('.scorebO');
                    let pcOCell = document.querySelectorAll('.scorecO');
                    let pdOCell = document.querySelectorAll('.scoredO');
                    let paICell = document.querySelectorAll('.scoreaI');
                    let pbICell = document.querySelectorAll('.scorebI');
                    let pcICell = document.querySelectorAll('.scorecI');
                    let pdICell = document.querySelectorAll('.scoredI');
                    let paO = document.querySelector('.paOut');
                    let paI = document.querySelector('.paIn');
                    let paT = document.querySelector('.paTotal');
                    let pbO = document.querySelector('.pbOut');
                    let pbI = document.querySelector('.pbIn');
                    let pbT = document.querySelector('.pbTotal');
                    let pcO = document.querySelector('.pcOut');
                    let pcI = document.querySelector('.pcIn');
                    let pcT = document.querySelector('.pcTotal');
                    let pdO = document.querySelector('.pdOut');
                    let pdI = document.querySelector('.pdIn');
                    let pdT = document.querySelector('.pdTotal');
                    let paOSum = 0;
                    let paISum = 0;
                    let pbOSum = 0;
                    let pbISum = 0;
                    let pcOSum = 0;
                    let pcISum = 0;
                    let pdOSum = 0;
                    let pdISum = 0;

                    paOCell.forEach(function(paOCell) {
                        let prevV = parseInt(paOCell.textContent) || 0;
                        paOCell.addEventListener('input', function() {
                            let val = parseInt(paOCell.textContent) || 0;
                            paOSum += val - prevV;
                            prevV = val;
                            paO.textContent = paOSum;
                            paT.textContent = paOSum + paISum;
                        })
                    })
                    paICell.forEach(function(paICell) {
                        let prevV = parseInt(pdICell.textContent) || 0;
                        paICell.addEventListener('input', function() {
                            let val = parseInt(paICell.textContent) || 0;
                            paISum += val - prevV;
                            prevV = val;
                            paI.textContent = paISum;
                            paT.textContent = paOSum + paISum;
                        })
                    })
                    pbOCell.forEach(function(pbOCell) {
                        let prevV = parseInt(pbOCell.textContent) || 0;
                        pbOCell.addEventListener('input', function() {
                            let val = parseInt(pbOCell.textContent) || 0;
                            pbOSum += val- prevV;
                            prevV = val;
                            pbO.textContent = pbOSum;
                            pbT.textContent = pbOSum + pbISum;
                        })
                    })
                    pbICell.forEach(function(pbICell) {
                        let prevV = parseInt(pbICell.textContent) || 0;
                        pbICell.addEventListener('input', function() {
                            let val = parseInt(pbICell.textContent) || 0;
                            pbISum += val - prevV;
                            prevV = val;
                            pbI.textContent = pbISum;
                            pbT.textContent = pbOSum + pbISum;
                        })
                    })
                    pcOCell.forEach(function(pcOCell) {
                        let prevV = parseInt(pcOCell.textContent) || 0;
                        pcOCell.addEventListener('input', function() {
                            let val = parseInt(pcOCell.textContent) || 0;
                            pcOSum += val- prevV;
                            prevV = val;
                            pcO.textContent = pcOSum;
                            pcT.textContent = pcOSum + pcISum;
                        })
                    })
                    pcICell.forEach(function(pcICell) {
                        let prevV = parseInt(pcICell.textContent) || 0;
                        pcICell.addEventListener('input', function() {
                            let val = parseInt(pcICell.textContent) || 0;
                            pcISum += val - prevV;
                            prevV = val;
                            pcI.textContent = pcISum;
                            pcT.textContent = pcOSum + pcISum;
                        })
                    })
                    pdOCell.forEach(function(pdOCell) {
                        let prevV = parseInt(pdOCell.textContent) || 0;
                        pdOCell.addEventListener('input', function() {
                            let val = parseInt(pdOCell.textContent) || 0;
                            pdOSum += val - prevV;
                            prevV = val;
                            pdO.textContent = pdOSum;
                            pdT.textContent = pdOSum + pdISum;
                        })
                    })
                    pdICell.forEach(function(pdICell) {
                        let prevV = parseInt(pdICell.textContent) || 0;
                        pdICell.addEventListener('input', function() {
                            let val = parseInt(pdICell.textContent) || 0;
                            pdISum += val - prevV;
                            prevV = val;
                            pdI.textContent = pdISum;
                            pdT.textContent = pdOSum + pdISum;
                        })
                    })
                }
                populateTable();
            })
    }
    else if (cId.value === `19002`) {
        fetch('http://uxcobra.com/golfapi/course19002.txt')
            .then(response => response.json())
            .then(data => {
                const holes = data.data.holes;
                const holeData = document.getElementById('holeData').getElementsByTagName('tbody')[0];

                function populateTable() {
                    const yardageRow = holeData.getElementsByTagName('tr')[0];
                    const parRow = holeData.getElementsByTagName('tr')[1];
                    const handicapRow = holeData.getElementsByTagName('tr')[2];
                    const playeraRow = holeData.getElementsByTagName('tr')[3];
                    const playerbRow = holeData.getElementsByTagName('tr')[4];
                    const playercRow = holeData.getElementsByTagName('tr')[5];
                    const playerdRow = holeData.getElementsByTagName('tr')[6];

                    let outSump = 0;
                    let inSump = 0;
                    let outSumy = 0;
                    let inSumy = 0;
                    let outSumh = 0;
                    let inSumh = 0;

                    holes.forEach(hole => {
                        const teeBox = hole.teeBoxes.find(teeBox => teeBox.teeType === teeS);
                        if (teeBox) {
                            yardageRow.insertCell().textContent = teeBox.yards;
                            parRow.insertCell().textContent = teeBox.par;
                            handicapRow.insertCell().textContent = teeBox.hcp;

                            if (hole.hole <= 9) {
                                outSump += teeBox.par;
                                outSumy += teeBox.yards;
                                outSumh += teeBox.hcp;
                            } else {
                                inSump += teeBox.par;
                                inSumy += teeBox.yards;
                                inSumh += teeBox.hcp;
                            }
                        }
                    });
                    yardageRow.insertCell().textContent = outSumy;
                    yardageRow.insertCell().textContent = inSumy;
                    yardageRow.insertCell().textContent = outSumy + inSumy;
                    parRow.insertCell().textContent = outSump;
                    parRow.insertCell().textContent = inSump;
                    parRow.insertCell().textContent = outSump + inSump;
                    handicapRow.insertCell().textContent = outSumh;
                    handicapRow.insertCell().textContent = inSumh;
                    handicapRow.insertCell().textContent = outSumh + inSumh;
                    if (selected < 4) {
                        playerdRow.remove();
                        if (selected < 3) {
                            playercRow.remove();
                            if (selected < 2) {
                                playerbRow.remove();
                            }
                        }
                    }
                    let paOCell = document.querySelectorAll('.scoreaO');
                    let pbOCell = document.querySelectorAll('.scorebO');
                    let pcOCell = document.querySelectorAll('.scorecO');
                    let pdOCell = document.querySelectorAll('.scoredO');
                    let paICell = document.querySelectorAll('.scoreaI');
                    let pbICell = document.querySelectorAll('.scorebI');
                    let pcICell = document.querySelectorAll('.scorecI');
                    let pdICell = document.querySelectorAll('.scoredI');
                    let paO = document.querySelector('.paOut');
                    let paI = document.querySelector('.paIn');
                    let paT = document.querySelector('.paTotal');
                    let pbO = document.querySelector('.pbOut');
                    let pbI = document.querySelector('.pbIn');
                    let pbT = document.querySelector('.pbTotal');
                    let pcO = document.querySelector('.pcOut');
                    let pcI = document.querySelector('.pcIn');
                    let pcT = document.querySelector('.pcTotal');
                    let pdO = document.querySelector('.pdOut');
                    let pdI = document.querySelector('.pdIn');
                    let pdT = document.querySelector('.pdTotal');
                    let paOSum = 0;
                    let paISum = 0;
                    let pbOSum = 0;
                    let pbISum = 0;
                    let pcOSum = 0;
                    let pcISum = 0;
                    let pdOSum = 0;
                    let pdISum = 0;

                    paOCell.forEach(function(paOCell) {
                        let prevV = parseInt(paOCell.textContent) || 0;
                        paOCell.addEventListener('input', function() {
                            let val = parseInt(paOCell.textContent) || 0;
                            paOSum += val - prevV;
                            prevV = val;
                            paO.textContent = paOSum;
                            paT.textContent = paOSum + paISum;
                        })
                    })
                    paICell.forEach(function(paICell) {
                        let prevV = parseInt(pdICell.textContent) || 0;
                        paICell.addEventListener('input', function() {
                            let val = parseInt(paICell.textContent) || 0;
                            paISum += val - prevV;
                            prevV = val;
                            paI.textContent = paISum;
                            paT.textContent = paOSum + paISum;
                        })
                    })
                    pbOCell.forEach(function(pbOCell) {
                        let prevV = parseInt(pbOCell.textContent) || 0;
                        pbOCell.addEventListener('input', function() {
                            let val = parseInt(pbOCell.textContent) || 0;
                            pbOSum += val- prevV;
                            prevV = val;
                            pbO.textContent = pbOSum;
                            pbT.textContent = pbOSum + pbISum;
                        })
                    })
                    pbICell.forEach(function(pbICell) {
                        let prevV = parseInt(pbICell.textContent) || 0;
                        pbICell.addEventListener('input', function() {
                            let val = parseInt(pbICell.textContent) || 0;
                            pbISum += val - prevV;
                            prevV = val;
                            pbI.textContent = pbISum;
                            pbT.textContent = pbOSum + pbISum;
                        })
                    })
                    pcOCell.forEach(function(pcOCell) {
                        let prevV = parseInt(pcOCell.textContent) || 0;
                        pcOCell.addEventListener('input', function() {
                            let val = parseInt(pcOCell.textContent) || 0;
                            pcOSum += val- prevV;
                            prevV = val;
                            pcO.textContent = pcOSum;
                            pcT.textContent = pcOSum + pcISum;
                        })
                    })
                    pcICell.forEach(function(pcICell) {
                        let prevV = parseInt(pcICell.textContent) || 0;
                        pcICell.addEventListener('input', function() {
                            let val = parseInt(pcICell.textContent) || 0;
                            pcISum += val - prevV;
                            prevV = val;
                            pcI.textContent = pcISum;
                            pcT.textContent = pcOSum + pcISum;
                        })
                    })
                    pdOCell.forEach(function(pdOCell) {
                        let prevV = parseInt(pdOCell.textContent) || 0;
                        pdOCell.addEventListener('input', function() {
                            let val = parseInt(pdOCell.textContent) || 0;
                            pdOSum += val - prevV;
                            prevV = val;
                            pdO.textContent = pdOSum;
                            pdT.textContent = pdOSum + pdISum;
                        })
                    })
                    pdICell.forEach(function(pdICell) {
                        let prevV = parseInt(pdICell.textContent) || 0;
                        pdICell.addEventListener('input', function() {
                            let val = parseInt(pdICell.textContent) || 0;
                            pdISum += val - prevV;
                            prevV = val;
                            pdI.textContent = pdISum;
                            pdT.textContent = pdOSum + pdISum;
                        })
                    })
                }
                populateTable();
            })
    }
    else {
        alert(`Error: No Course Found With The Current Id.`);
        location.reload();
    }
}