const house: { windows: number; location: [number, string] } = {
    windows: 4,
    location: [4, "sever"],
}

for (const i of house.location) {
    console.log(i)
}
