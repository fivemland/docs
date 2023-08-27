---
sidebar_position: 2
---

# Funkciók

## Exportok

#### - Kliens oldal

<!-- >
> #### - saveSettings()
>
> - _Beállítások mentése_
>
>   ```lua
>   exports.fl_dashboard:saveSettings()
>   ```
>
> #### - isSettingEnabled(name)
>
> - _Beállítás státusz lekérése_
> - _return -> boolean_
> - _alap beállítások: hud, radar (bővítés: client.lua -> *Settings tábla.*)_
>
>   ```lua
>   exports.fl_dashboard:isSettingEnabled(name)
>   ```
>  -->

| Export                 | Leírás                     | Kód                                           |
| ---------------------- | -------------------------- | --------------------------------------------- |
| saveSettings()         | Beállítások mentése        | `exports.fl_dashboard:saveSettings()`         |
| isSettingEnabled(name) | Beállítás státusz lekérése | `exports.fl_dashboard:isSettingEnabled(name)` |

#### - Szerver oldal

<!-- >
> #### - getPlayerPP(player)
>
> - _játékos prémium pontjainak lekérése_
> - _return -> number_
>
>   ```lua
>   exports.fl_dashboard:getPlayerPP(player)
>   ```
>
> #### - setPlayerPP(player)
>
> - _játékos prémium pontjainak beállítása_
> - _return boolean_
>
>   ```lua
>   exports.fl_dashboard:setPlayerPP(player)
>   ```
>
> #### - takePlayerPP(player)
>
> - _játékos prémium pontjaiból levonás_
> - _return boolean_
>
>   ```lua
>   exports.fl_dashboard:takePlayerPP(player, value)
>   ``` -->

| Export               | Leírás                                | Kód                                               |
| -------------------- | ------------------------------------- | ------------------------------------------------- |
| getPlayerPP(player)  | Játékos prémium pontjainak lekérése   | `exports.fl_dashboard:getPlayerPP(player)`        |
| setPlayerPP(player)   | Játékos prémium pontjainak beállítása | `exports.fl_dashboard:setPlayerPP(player)`        |
| takePlayerPP(player) | játékos prémium pontjaiból levonás    | `xports.fl_dashboard:takePlayerPP(player, value)` |

## Eventek

#### - Kliens oldal

<!-- >
> _Ez az event akkor fut le mikor változtatod egy beállítás értékét._
>
> ```lua
> RegisterNetEvent("dashboard:settingChanged", function(name, state)
> 	print(name, state)
> end)
> ``` -->

| Event                      | Leírás                                                            |
| -------------------------- | ----------------------------------------------------------------- |
| `dashboard:settingChanged` | Ez az event akkor fut le mikor változtatod egy beállítás értékét. |
