---
sidebar_position: 2
---

# Funkciók

## Exportok

## Kliens oldal

### setMyNameVisible(state)

- SAJÁT név láthatóságának beállítása

| Argumentum | Típus   |
| ---------- | ------- |
| state      | boolean |

### getMyNameVisible()

- SAJÁT név láthatóságának lekérése

- Return: boolean

### setNamesVisible(state)

- Nevek láthatóságának beállítása

| Argumentum | Típus   |
| ---------- | ------- |
| state      | boolean |

### isNamesVisible()

- Nevek láthatóságának lekérése

- Return: boolean

## Szerver oldal

### getPlayerFirstJoin(player)

| Argumentum | Típus                   |
| ---------- | ----------------------- |
| player     | serverId                |
|            |                         |
| Return     | number (unix timestamp) |
