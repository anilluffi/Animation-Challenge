"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_URL = void 0;
exports.fetchAnimations = fetchAnimations;
exports.API_URL = 'http://localhost:3000/api';
async function fetchAnimations() {
    const response = await fetch(`${exports.API_URL}/animations`);
    return response.json();
}
//# sourceMappingURL=api.js.map