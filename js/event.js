function makeRed () {
    document.body.style.backgroundColor = 'red';
}
// handle blue button click by setting function name

const purpleButton = document.getElementById('make-purple-button');
//just set the name of the function
    purpleButton.onclick = makePurple;


function makePurple () {
    document.body.style.backgroundColor = 'purple';
}

// handle event using anonymous function

const greenButton = document.getElementById('make-green-button');
        // anonymous function // function er nam na dileo cholbe
        greenButton.onclick = function() {
            document.body.style.backgroundColor = 'green';
        }

// handle by using addEventListener

const makeGoldenRodButton = document.getElementById('make-golden-rod-button');
        makeGoldenRodButton.addEventListener('click', makeGoldenRod)

        function makeGoldenRod() {
            document.body.style.backgroundColor = 'goldenrod';
        }

// addEventListener        

const khakiButton = document.getElementById('make-khaki-button');
        khakiButton.addEventListener('click', function () {
            document.body.style.backgroundColor = 'khaki';
        })

// direct shortcut
// most use
    document.getElementById('make-blue-light-button').addEventListener('click', function(){
        document.body.style.backgroundColor = 'lightblue'
    });