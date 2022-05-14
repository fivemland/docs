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

| Export                     | Leírás            | Kód                                               |
| -------------------------- | ----------------- | ------------------------------------------------- |
| isPlayerFriend(identifier) | Barát ellenőrzése | `exports.fl_friends:isPlayerFriend(identifier)()` |

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

| Export                       | Leírás                             | Kód                                               |
| ---------------------------- | ---------------------------------- | ------------------------------------------------- |
| getPlayerFriends(player)     | Játékos barátjainak lekérése       | `exports.fl_friends:getPlayerFriends(player)`     |
| getPlayerDiscordName(player) | Játékos discord nevének a lekérése | `exports.fl_friends:getPlayerDiscordName(player)` |
