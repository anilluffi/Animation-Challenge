"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const animations_controller_1 = require("./animations.controller");
describe('AnimationsController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [animations_controller_1.AnimationsController],
        }).compile();
        controller = module.get(animations_controller_1.AnimationsController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=animations.controller.spec.js.map