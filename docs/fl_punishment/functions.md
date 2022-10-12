---
sidebar_position: 2
---

# Funkciók

## Exportok

## - Szerver oldal

### getPlayerPunishment(player, name)

| Argumentum | Típus                  |
| ---------- | ---------------------- |
| player     | xPlayer / serverId     |
| name       | string (comserv, jail) |
|            |                        |
| Return     | Object                 |

### Példa

```lua
local comserv = exports.fl_punishment:getPlayerPunishment(source, "comserv")
```

### banPlayer(admin, target, days, reason)

| Argumentum | Típus                 |
| ---------- | --------------------- |
| admin      | xPlayer / serverId    |
| target     | xPlayer / serverId    |
| days       | number (0 - Infinity) |
| reason     | string                |
|            |                       |
| Return     | boolean               |

### Példa

```lua
RegisterCommand("ban2", function(player, args)
  local comserv = exports.fl_punishment:banPlayer(player, args[1], 0, "AdminPanel")
end)
```
