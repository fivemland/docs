---
sidebar_position: 2
---

# Funkciók

## Exportok

## - Kliens oldal

### spectatePlayer(player)

| Argumentum | Típus             |
| ---------- | ----------------- |
| player     | number (serverId) |

### Példa

```lua
RegisterCommand("spectate2", function()
  exports.fl_spectate:spectatePlayer(2)
end)
```

### isActive()

- Return: Boolean _(Játékos megfigyelés aktív-e)_

### Példa

```lua
RegisterCommand("spectatetest", function()
  local isActive = exports.fl_spectate:isActive()
  print("Aktív:", isActive and "Igen" or "Nem")
end)
```
