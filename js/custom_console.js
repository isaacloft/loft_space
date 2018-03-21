const commands = [
    { emoji: '🦄', name: 'unicorn' },
    { emoji: '🍕', name: 'pizza' },
    { emoji: '🍺', name: 'beer' },
    { emoji: '💩', name: 'poo' }
];

// Create custom commands
commands.forEach(({ name, emoji }) => window.console[name] = (...args) => console.log(emoji + ' ' + args.join(', ')));


// console.unicorn("Magical!");
// console.beer("Cheers!");
// console.pizza("Tasty!");
// console.poo("Oh f*ck!");