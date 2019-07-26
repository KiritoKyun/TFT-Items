var items = {'recurvebow':0, 'bfsword':0, 'negatroncloak':0, 'chainvest':0, 'spatula':0, 'needlesslylargerod':0, 'tearofthegoddess':0, 'giantsbelt':0}
var recurvebow_items = {'recurvebow':'rapidfirecannon', 'spatula':'bladeoftheruinedking', 'negatroncloak':'cursedblade', 'needlesslylargerod':'guinsoosrageblade','chainvest':'phantomdancer','tearofthegoddess':'statikkshiv','bfsword':'swordofthedivine','giantsbelt':'titanichydra'}
var bfsword_items = {'bfsword':'infinityedge','chainvest':'guardianangel','needlesslylargerod':'hextechgunblade','tearofthegoddess':'spearofshojin','negatroncloak':'bloodthirster','spatula':'youmuusghostblade','giantsbelt':'zekesherald'}
var negatroncloak_items = {'negatroncloak':'dragonsclaw','tearofthegoddess':'hush','needlesslylargerod':'ionicspark','spatula':'runaanshurricane','chainvest':'swordbreaker','giantsbelt':'zephyr'}
var chainvest_items = {'chainvest':'thornmail','tearofthegoddess':'frozenheart','spatula':'knightsvow','needlesslylargerod':'locketoftheironsolari','giantsbelt':'redbuff'}
var spatula_items = {'spatula':'forceofnature','tearofthegoddess':'darkin','giantsbelt':'frozenmallet','needlesslylargerod':'yuumi'}
var needlesslylargerod_items = {'needlesslylargerod':'rabadonsdeathcap','tearofthegoddess':'ludensecho','giantsbelt':'morellonomicon'}
var tearofthegoddess_items = {'tearofthegoddess':'seraphsembrace','giantsbelt':'redemption'}
var giantsbelt_items = {'giantsbelt':'warmogsarmor'}
var crafted_items = ['rapidfirecannon','bladeoftheruinedking','cursedblade','guinsoosrageblade','phantomdancer','statikkshiv','swordofthedivine','titanichydra','infinityedge','guardianangel','hextechgunblade','spearofshojin','bloodthirster','youmuusghostblade','zekesherald','dragonsclaw','hush','ionicspark','runaanshurricane','swordbreaker','zephyr','thornmail','frozenheart','knightsvow','locketoftheironsolari','redbuff','forceofnature','darkin','frozenmallet','yuumi','rabadonsdeathcap','ludensecho','morellonomicon','seraphsembrace','redemption','warmogsarmor']
var proper_names = ['Rapid Fire Cannon','Blade of the Ruined King','Cursed Blade','Guinsoo\'s Rageblade','Phantom Dancer','Statikk Shiv','Sword of the Divine','Titanic Hydra','Infinity Edge','Guardian Angel','Hextech Gunblade','Spear of Shojin','Bloodthirster','Youmuu\'s Ghostblade','Zeke\'s Herald','Dragon\'s Claw','Hush','Ionic Spark','Runaan\'s Hurricane','Swordbreaker','Zephyr','Thornmail','Frozen Heart','Knight\'s Vow','Locket of the Iron Solari','Red Buff','Force of Nature','Darkin','Frozen Mallet','Yuumi','Rabadon\'s Deathcap','Luden\'s Echo','Morellonomicon','Seraph\'s Embrace','Redemption','Warmog\'s Armor']
var required_items = [['recurvebow','recurvebow'],['spatula','recurvebow'],['recurvebow','negatroncloak'],['recurvebow','needlesslylargerod'],['recurvebow','chainvest'],['recurvebow','tearofthegoddess'],['recurvebow','bfsword'],['recurvebow','giantsbelt'],['bfsword','bfsword'],['bfsword','chainvest'],['bfsword','needlesslylargerod'],['bfsword','tearofthegoddess'],['bfsword','negatroncloak'],['spatula','bfsword'],['bfsword','giantsbelt'],['negatroncloak','negatroncloak'],['negatroncloak','tearofthegoddess'],['negatroncloak','needlesslylargerod'],['spatula','negatroncloak'],['negatroncloak','chainvest'],['negatroncloak','giantsbelt'],['chainvest','chainvest'],['chainvest','tearofthegoddess'],['spatula','chainvest'],['chainvest','needlesslylargerod'],['chainvest','giantsbelt'],['spatula','spatula'],['spatula','tearofthegoddess'],['spatula','giantsbelt'],['spatula','needlesslylargerod'],['needlesslylargerod','needlesslylargerod'],['needlesslylargerod','tearofthegoddess'],['needlesslylargerod','giantsbelt'],['tearofthegoddess','tearofthegoddess'],['tearofthegoddess','giantsbelt'],['giantsbelt','giantsbelt']]
var explanations = ["Wearer's attacks cannot be dodged. Attack range is doubled.","+20% attack speed. Wearer is also a blademaster","Attacks on-hit have a low chance to reduce enemy's star level by 1 for the rest of combat.","Attacks grant 4% attack speed. Stacks infinitely.","Wearer dodges all critical strikes.","Every third attack deals 100 splash magical damage.","Each second, the wearer has a 5% chance to gain 100% critical strike.","Attacks deal 10% of the wearer's max health as splash damage.","Critical strikes deal +100% damage.","Wearer revives with 1000 health","Heal for 33% of all damage dealt.","After casting, wearer gains 15% of its max mana per attack.","Attacks heal for 50% of damage.","+20 attack damage. Wearer is also an assassin.","At the start of combat, allies with 2 hexes to the left and right gain +15% attack speed for the rest of combat.","Gain 83% magic resistance.","Attacks on-hit have a high chance to silence, preventing the enemy from casting spells for 5s.","Whenever an enemy casts a spell, they take 200 damage.","+20 magic resistance. Summon a spirit who mirrors your attacks, dealing 25% damage.","Attacks have a chance to disarm for 4s.","On start of combat, banish an enemy for 5s.","Reflect 100% of damage mitigated from attacks.","Adjacent enemies lose 25% attack speed.","+20 armor. Wearer is also a knight.","At the start of combat, allies within 2 hexes to the right and left gain a shield that blocks 300 damage.","Attacks deal 13% of the enemy's maximum Health as burn damage over 5s and prevent healing","Gain +1 team size.","+20 mana. Wearer is also a demon.","+200 health. Wearer is also a glacial.","+20 AP. Wearer is also a sorcerer.","Wearer's spell power stat is amplified by 50%","Spells deal 200 splash damage on hit.","Spells deal burn damage equal to 15% of the enemy's maximum health over 5s and prevent healing.","Wearer regains 20 mana after spellcast.","On crossing below 25% Health, heal all nearby allies for 1000 Health","Wearer regenerates 6% missing health per second."]
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
    new_item.setAttribute('onmouseover','explanation(\'' + x + '\')')
    new_item.setAttribute('onclick','choose_item(\'' + x + '\')')
    new_item.setAttribute('onmouseout','document.getElementById(\'explanation\').innerHTML = \'\'')
    document.getElementById('craftable-items').appendChild(new_item)
}
function explanation(x){
    doc = document.getElementById('explanation')
    doc.innerHTML = ''
    var name_of_item = document.createElement('p')
    name_of_item.innerHTML = proper_names[crafted_items.indexOf(x)]
    name_of_item.style.fontSize = '150%'
    doc.appendChild(name_of_item)
    var new_explanation = document.createElement('p')
    new_explanation.innerHTML = explanations[crafted_items.indexOf(x)]
    doc.appendChild(new_explanation)
    var first_img = document.createElement('img')
    first_img.src = 'icons/icon_' + required_items[crafted_items.indexOf(x)][0] + '.tft.png'
    var second_img = document.createElement('img')
    second_img.src = 'icons/icon_' + required_items[crafted_items.indexOf(x)][1] + '.tft.png'
    doc.appendChild(first_img)
    doc.appendChild(second_img)
}
function choose_item(x){
    subtract_item(required_items[crafted_items.indexOf(x)][0])
    subtract_item(required_items[crafted_items.indexOf(x)][1])
    document.getElementById('explanation').innerHTML = ''
}