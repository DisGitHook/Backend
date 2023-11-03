const colorMap = {
	black: 0,
	gray: 0x808080,
	white: 0xffffff,
	red: 0xff0000,
	orange: 0xffa500,
	yellow: 0xffff00,
	green: 0x00ff00,
	blue: 0x0000ff,
	purple: 0x800080,
	cyan: 0x00ffff,
	magenta: 0xff00ff,
	brown: 0x964b00,
	olive: 0x808000,
	teal: 0x008080,
	navy: 0x000080
}

module.exports = (color = "") => {
	if (colorMap[color]) return colorMap[color]

	return parseInt(color.replace("#", ""), 16)
}
