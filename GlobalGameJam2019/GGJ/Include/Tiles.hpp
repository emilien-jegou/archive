/*
 * Tiles.hpp
 * Copyright (C) 2019 emilien <emilien@emilien-pc>
 *
 * Distributed under terms of the MIT license.
 */

#pragma once

class Tiles;
class Game;

#include "MapCreator.hpp"
#include "Oxygine.hpp"

#include <stdint.h>
#include <memory>

class Tiles
{
	public:
		Tiles(Game *, uint16_t *, MAP_TILE);
		virtual ~Tiles();
		virtual void setNextType(const MAP_TILE &) = 0;
		virtual void update() = 0;
		virtual void flush();
		void attachImg(const std::string &img);

		MAP_TILE type;
		int16_t flamePower;

	protected:
		MAP_TILE nextType;
		Game *game;
		uint16_t xy[XY_SIZE];
		ox::spSprite sprite;
		float pos[XY_SIZE];
		float size[XY_SIZE];
};

