var items = {'recurvebow':0, 'bfsword':0, 'negatroncloak':0, 'chainvest':0, 'spatula':0, 'needlesslylargerod':0, 'tearofthegoddess':0, 'giantsbelt':0}
var recurvebow_items = {'recurvebow':'rapidfirecannon', 'spatula':'bladeoftheruinedking', 'negatroncloak':'cursedblade', 'needlesslylargerod':'guinsoosrageblade','chainvest':'phantomdancer','tearofthegoddess':'statikkshiv','bfsword':'swordofthedivine','giantsbelt':'titanichydra'}
var bfsword_items = {'bfsword':'infinityedge','chainvest':'guardianangel','needlesslylargerod':'hextechgunblade','tearofthegoddess':'spearofshojin','negatroncloak':'bloodthirster','spatula':'youmuusghostblade','giantsbelt':'zekesherald'}
var negatroncloak_items = {'negatroncloak':'dragonsclaw','tearofthegoddess':'hush','needlesslylargerod':'ionicspark','spatula':'runaanshurricane','chainvest':'swordbreaker','giantsbelt':'zephyr'}
var chainvest_items = {'chainvest':'thornmail','tearofthegoddess':'frozenheart','spatula':'knightsvow','needlesslylargerod':'locketoftheironsolari','giantsbelt':'redbuff'}
var spatula_items = {'spatula':'forceofnature','tearofthegoddess':'darkin','giantsbelt':'frozenmallet','needlesslylargerod':'yuumi'}
var needlesslylargerod_items = {'needlesslylargerod':'rabadonsdeathcap','tearofthegoddess':'ludensecho','giantsbelt':'morellonomicon'}
var tearofthegoddess_items = {'tearofthegoddess':'seraphsembrace','giantsbelt':'redemption'}
var giantsbelt_items = {'giantsbelt':'warmogsarmor'}
var items_displayed = JSON.parse(JSON.stringify(items))
function click_item(x){
    items[x]++
    update_items()
}
function subtract_item(x){
    items[x]--
    update_items()
}
function update_items(){
    for (var i in items){
        if (items[i] > 0 && items_displayed[i] + 1 == items[i]){
            var new_item = document.createElement('img')
            new_item.src = 'icons/icon_' + i + '.tft.png'
            new_item.id = i
            new_item.setAttribute('onclick','subtract_item(\'' + i + '\')')
            items_displayed[i]++
            document.getElementById('owned-items').appendChild(new_item)
        }
        else if (items_displayed[i] == items[i] + 1){
            document.getElementById(i).parentNode.removeChild(document.getElementById(i))
            items_displayed[i]--
        }
    }
    craft_items()
}
function craft_items(){
    document.getElementById('craftable-items').innerHTML = ''
    for (var i in items){
        if (items[i] > 0){
            var items_copy = JSON.parse(JSON.stringify(items))
            items_copy[i]--
            for (var o in items_copy){
                if (items_copy[o] > 0){
                    for (var m in items){
                        if (i == m){
                            for (var p in eval(m + '_items')){
                                if (o == p){
                                    add_craft_item(eval(m + '_items')[o])
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function add_craft_item(x){
    var new_item = document.createElement('img')
    new_item.src = 'icons/tft_item_'+ x + '.tft.png'
    new_item.id = x
    document.getElementById('craftable-items').appendChild(new_item)
}
