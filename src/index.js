/**
 * Ada Tech Desenvolva - Marketplace Priority Sorter
 * Sistema de ordenação por prioridade para marketplace
 */

class MarketplacePrioritySorter {
    constructor() {
        this.items = [];
    }

    addItem(item, priority) {
        this.items.push({ ...item, priority });
    }

    sortByPriority() {
        return this.items.sort((a, b) => b.priority - a.priority);
    }

    getHighestPriority() {
        return this.sortByPriority()[0];
    }
}

module.exports = MarketplacePrioritySorter;
