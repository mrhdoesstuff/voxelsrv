import { initGame } from './game'

global.game = {}
game.name = 'VoxelSrv'
game.version = '0.0.7'

// Worldname
game.world = 'temp'


game.seed = 123 //(new Date()).getTime()/1000 //123

// Players gamemode 0 - Survival, 1 - Creative
game.mode = 1

initGame()
