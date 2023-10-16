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
let p = document.getElementById('pro');
let ch = document.getElementById('champion');
let m = document.getElementById('men');
let w = document.getElementById('women');
m.style.backgroundColor = 'lightblue';
teeS = 'men';

p.addEventListener('click', function() {
    teeS = 'pro';
    p.style.backgroundColor = 'lightblue';
    ch.style.backgroundColor = 'white';
    m.style.backgroundColor = 'white';
    w.style.backgroundColor = 'white';
});
ch.addEventListener('click', function() {
    teeS = 'champion';
    p.style.backgroundColor = 'white';
    ch.style.backgroundColor = 'lightblue';
    m.style.backgroundColor = 'white';
    w.style.backgroundColor = 'white';
})
m.addEventListener('click', function() {
    teeS = 'men';
    p.style.backgroundColor = 'white';
    ch.style.backgroundColor = 'white';
    m.style.backgroundColor = 'lightblue';
    w.style.backgroundColor = 'white';
})
w.addEventListener('click', function() {
    teeS = 'women';
    p.style.backgroundColor = 'white';
    ch.style.backgroundColor = 'white';
    m.style.backgroundColor = 'white';
    w.style.backgroundColor = 'lightblue';
})
let start = document.querySelector('.start');
let home = document.querySelector('.home');
let card = document.querySelector('.scoring');
let Tee = document.querySelector('.Tee');
let tee = document.querySelector('.tee');
let score = document.querySelector('.scoreCard');

let cId = document.querySelector('.id');
let table = document.getElementById('table');
start.addEventListener('click', function() {
    home.classList.add('hidden');
    tee.classList.remove('hidden');
});
score.addEventListener('click', function() {
    tee.classList.add('hidden');
    card.classList.remove('hidden2');
    buildCard();
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

                    paOCell.forEach(function(paOSum) {
                        paOSum.addEventListener('input', function() {
                            paOSum += paOCell.value;
                            paO.textContent = paOSum;
                            paT.textContent = paOSum + paISum;
                        })
                    })
                    paICell.forEach(function(paISum) {
                        paISum.addEventListener('input', function() {
                            paISum += paICell.value;
                            paI.textContent = paISum;
                            paT.textContent = paOSum + paISum;
                        })
                    })
                    pbOCell.forEach(function(pbOSum) {
                        pbOSum.addEventListener('input', function() {
                            pbOSum += pbOCell.value;
                            pbO.textContent = pbOSum;
                            pbT.textContent = pbOSum + pbISum;
                        })
                    })
                    pbICell.forEach(function(pbISum) {
                        pbISum.addEventListener('input', function() {
                            pbISum += paICell.value;
                            pbI.textContent = pbISum;
                            pbT.textContent = pbOSum + pbISum;
                        })
                    })
                    pcOCell.forEach(function(pcOSum) {
                        pcOSum.addEventListener('input', function() {
                            pcOSum += pcOCell.value;
                            pcO.textContent = pcOSum;
                            pcT.textContent = pcOSum + pcISum;
                        })
                    })
                    pcICell.forEach(function(pcISum) {
                        pcISum.addEventListener('input', function() {
                            pcISum += pcICell.value;
                            pcI.textContent = pcISum;
                            pcT.textContent = pcOSum + pcISum;
                        })
                    })
                    pdOCell.forEach(function(pdOSum) {
                        pdOSum.addEventListener('input', function() {
                            pdOSum += pdOCell.value;
                            pdO.textContent = pdOSum;
                            pdT.textContent = pdOSum + pdISum;
                        })
                    })
                    pdICell.forEach(function(pdISum) {
                        pdISum.addEventListener('input', function() {
                            pdISum += pdICell.value;
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

                    paOCell.forEach(function(paOSum) {
                        paOSum.addEventListener('input', function() {
                            paOSum += paOCell.value;
                            paO.textContent = paOSum;
                            paT.textContent = paOSum + paISum;
                        })
                    })
                    paICell.forEach(function(paISum) {
                        paISum.addEventListener('input', function() {
                            paISum += paICell.value;
                            paI.textContent = paISum;
                            paT.textContent = paOSum + paISum;
                        })
                    })
                    pbOCell.forEach(function(pbOSum) {
                        pbOSum.addEventListener('input', function() {
                            pbOSum += pbOCell.value;
                            pbO.textContent = pbOSum;
                            pbT.textContent = pbOSum + pbISum;
                        })
                    })
                    pbICell.forEach(function(pbISum) {
                        pbISum.addEventListener('input', function() {
                            pbISum += paICell.value;
                            pbI.textContent = pbISum;
                            pbT.textContent = pbOSum + pbISum;
                        })
                    })
                    pcOCell.forEach(function(pcOSum) {
                        pcOSum.addEventListener('input', function() {
                            pcOSum += pcOCell.value;
                            pcO.textContent = pcOSum;
                            pcT.textContent = pcOSum + pcISum;
                        })
                    })
                    pcICell.forEach(function(pcISum) {
                        pcISum.addEventListener('input', function() {
                            pcISum += pcICell.value;
                            pcI.textContent = pcISum;
                            pcT.textContent = pcOSum + pcISum;
                        })
                    })
                    pdOCell.forEach(function(pdOSum) {
                        pdOSum.addEventListener('input', function() {
                            pdOSum += pdOCell.value;
                            pdO.textContent = pdOSum;
                            pdT.textContent = pdOSum + pdISum;
                        })
                    })
                    pdICell.forEach(function(pdISum) {
                        pdISum.addEventListener('input', function() {
                            pdISum += pdICell.value;
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

                    paOCell.forEach(function(paOSum) {
                        paOSum.addEventListener('input', function() {
                            paOSum += paOCell.value;
                            paO.textContent = paOSum;
                            paT.textContent = paOSum + paISum;
                        })
                    })
                    paICell.forEach(function(paISum) {
                        paISum.addEventListener('input', function() {
                            paISum += paICell.value;
                            paI.textContent = paISum;
                            paT.textContent = paOSum + paISum;
                        })
                    })
                    pbOCell.forEach(function(pbOSum) {
                        pbOSum.addEventListener('input', function() {
                            pbOSum += pbOCell.value;
                            pbO.textContent = pbOSum;
                            pbT.textContent = pbOSum + pbISum;
                        })
                    })
                    pbICell.forEach(function(pbISum) {
                        pbISum.addEventListener('input', function() {
                            pbISum += paICell.value;
                            pbI.textContent = pbISum;
                            pbT.textContent = pbOSum + pbISum;
                        })
                    })
                    pcOCell.forEach(function(pcOSum) {
                        pcOSum.addEventListener('input', function() {
                            pcOSum += pcOCell.value;
                            pcO.textContent = pcOSum;
                            pcT.textContent = pcOSum + pcISum;
                        })
                    })
                    pcICell.forEach(function(pcISum) {
                        pcISum.addEventListener('input', function() {
                            pcISum += pcICell.value;
                            pcI.textContent = pcISum;
                            pcT.textContent = pcOSum + pcISum;
                        })
                    })
                    pdOCell.forEach(function(pdOSum) {
                        pdOSum.addEventListener('input', function() {
                            pdOSum += pdOCell.value;
                            pdO.textContent = pdOSum;
                            pdT.textContent = pdOSum + pdISum;
                        })
                    })
                    pdICell.forEach(function(pdISum) {
                        pdISum.addEventListener('input', function() {
                            pdISum += pdICell.value;
                            pdI.textContent = pdISum;
                            pdT.textContent = pdOSum + pdISum;
                        })
                    })
                }
                populateTable();
        })
    }
    else {
        alert(`Error: No Course Found With The Current Id. Please Refresh The Page`);
    }
}