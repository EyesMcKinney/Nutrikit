var proteins = [
    ['steak', 300],['beef', 200],['chicken', 100],['fish', 80],['soy', 50]
]

var fruits = [
    ['orange', 300],['banana', 200],['pineapple', 100],['grapes', 80],['blueberries', 50]
]

var vegtables = [
    ['romaine', 30],['beans', 40],['squash', 100],['spinach', 50],['kale', 10]
]

var dairy = [
    ['milk', 300],['yoghurt', 200],['cheddar', 200],['skim', 100],['cottage', 80]
]

var grains = [
    ['bread', 200],['bagel', 300],['pita', 250],['naan', 210],['tortilla', 1200]
]


function changetype(){
    var selectedtype = document.getElementById("foodtypes").value;
    if (selectedtype == "proteins"){
        var optionsList = proteins;
        document.getElementsByName('foods')[0].options[0].innerHTML = optionsList[0][0];
        document.getElementsByName('foods')[0].options[1].innerHTML = optionsList[1][0];
        document.getElementsByName('foods')[0].options[2].innerHTML = optionsList[2][0];
        document.getElementsByName('foods')[0].options[3].innerHTML = optionsList[3][0];
        document.getElementsByName('foods')[0].options[4].innerHTML = optionsList[4][0];
    }
    if (selectedtype == "fruits"){
        var optionsList = fruits;
        document.getElementsByName('foods')[0].options[0].innerHTML = optionsList[0][0];
        document.getElementsByName('foods')[0].options[1].innerHTML = optionsList[1][0];
        document.getElementsByName('foods')[0].options[2].innerHTML = optionsList[2][0];
        document.getElementsByName('foods')[0].options[3].innerHTML = optionsList[3][0];
        document.getElementsByName('foods')[0].options[4].innerHTML = optionsList[4][0];
    }
    if (selectedtype == "vegtables"){
        var optionsList = vegtables;
        document.getElementsByName('foods')[0].options[0].innerHTML = optionsList[0][0];
        document.getElementsByName('foods')[0].options[1].innerHTML = optionsList[1][0];
        document.getElementsByName('foods')[0].options[2].innerHTML = optionsList[2][0];
        document.getElementsByName('foods')[0].options[3].innerHTML = optionsList[3][0];
        document.getElementsByName('foods')[0].options[4].innerHTML = optionsList[4][0];
    }
    if (selectedtype == "dairy"){
        var optionsList = dairy;
        document.getElementsByName('foods')[0].options[0].innerHTML = optionsList[0][0];
        document.getElementsByName('foods')[0].options[1].innerHTML = optionsList[1][0];
        document.getElementsByName('foods')[0].options[2].innerHTML = optionsList[2][0];
        document.getElementsByName('foods')[0].options[3].innerHTML = optionsList[3][0];
        document.getElementsByName('foods')[0].options[4].innerHTML = optionsList[4][0];
    }
    if (selectedtype == "grains"){
        var optionsList = grains;
        document.getElementsByName('foods')[0].options[0].innerHTML = optionsList[0][0];
        document.getElementsByName('foods')[0].options[1].innerHTML = optionsList[1][0];
        document.getElementsByName('foods')[0].options[2].innerHTML = optionsList[2][0];
        document.getElementsByName('foods')[0].options[3].innerHTML = optionsList[3][0];
        document.getElementsByName('foods')[0].options[4].innerHTML = optionsList[4][0];
    }
}