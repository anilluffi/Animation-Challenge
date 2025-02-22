"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const animations_service_1 = require("./animations.service");
describe('AnimationsService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [animations_service_1.AnimationsService],
        }).compile();
        service = module.get(animations_service_1.AnimationsService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=animations.service.spec.js.map