import {dataAA} from "./data.js"
import "./Features/PetChcker.js"
import "./Features/PbAvt.js"
import "./Features/rngMeter.js"
import "./config.js"
import "./Features/Exports.js"
import "./Features/variables.js"
import { move } from "./Features/Exports.js"



const clicktext3 =  new TextComponent(`&cNo Such Command, Click To See All Commands [Slayers]`).setHoverValue(`&bSuggests Command [/supb help]`).setClick("suggest_command", "/supb help")
const help = new TextComponent(`&cNo Such Command, Click To See All Commands [Pets]`).setHoverValue(`&bSuggests Command [/supr help]`).setClick("suggest_command", "/supr help")
const rnghelp = new TextComponent(`&cNo Such Command, Click To See All Commands [Rng Meter]`).setHoverValue(`&bSuggests Command [/surng help]`).setClick("suggest_command", "/surng help")
const EditHuds  = new TextComponent("&8➝  &aEdit Huds &a[&dCombat &a| &dPet &a| &dRng Meter Overlay&a]").setHoverValue(`&bSuggests Command [/suc huds]`).setClick("suggest_command", "/suc huds")
const g = new TextComponent("&8➝  &aGui").setHoverValue("&bOpens Gui.").setClick("suggest_command", "/su gui")
const suhelp = new TextComponent("&cNo Such Command, Click To See All Commands [General]").setHoverValue("&bShow All Commands [/su help]").setClick("suggest_command", "/suc help")
const slayertext = new TextComponent("&8➝  &aSlayer Commands").setHoverValue("&bClick To See All Slayer Commands.").setClick("suggest_command", "/supb help")
const combatText = new TextComponent("&8➝  &aCombat Overlay Commands").setHoverValue("&bClick To See All Combat Overlay Commands.").setClick("suggest_command", "/supr help")
const rngtext = new TextComponent("&8➝  &aRng Meter Commands").setHoverValue("&bClick To See All Rng Meter Commands.").setClick("suggest_command", "/surng help")

if (dataAA.first == false){
        ChatLib.chat(`&3&lTanks &5&lFor &d&lDownloading &b&l&oSlayerUtils &f&l:D`)
}
dataAA.first = true

dataAA.load = false
register("worldLoad", ()=>{
    if (dataAA.load == false) {
    ChatLib.chat(`&d&l[SlayerUtils] &5&lLoaded || &f&lType &3&l/Su &e&lTo Open Gui || &b&l/SuHelp §e&lFor All Commands.`)
    dataAA.load = true
    }
})

register("command", (...args)=>{
    if (!args){
        ChatLib.chat(suhelp)
        return
    }
    switch(args[0]){
        case("slayer"):
        ChatLib.chat(clicktext3)
        break
        case("combat"):
        ChatLib.chat(help)
        break
        case("rng"):
        ChatLib.chat(rnghelp)
        break
        case("gui"):
        ChatLib.command("su", true)
        break
        case("huds"):
         move()
        case("help"):
        ChatLib.chat(`&d&lSlayerUtils &b&lCommands: `)
        ChatLib.chat(slayertext)
        ChatLib.chat(combatText)
        ChatLib.chat(rngtext)
        ChatLib.chat(EditHuds)
        ChatLib.chat(g)
        ChatLib.chat("&7[§eHover&7] for description  &7[§eClick&7] to suggest command.")
        break
        default:
            ChatLib.chat(suhelp)
    }
}).setName("suc")