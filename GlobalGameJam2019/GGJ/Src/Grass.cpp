/*
 * Grass.cpp
 * Copyright (C) 2019 emilien <emilien@emilien-pc>
 *
 * Distributed under terms of the MIT license.
 */

#include "Grass.hpp"

Grass::Grass(Game *game, uint16_t *xy)
	: Indestructible(game, xy)
{
	attachImg("./assets/landscapeTiles_067.png");
}

Grass::~Grass()
{
}

Tiles *Grass::create(Game *game, uint16_t *xy)
{
	Grass *tile = new Grass(game, xy);

	if (tile == nullptr)
		throw err::excep("Out of Memory.");
	return tile;
}
