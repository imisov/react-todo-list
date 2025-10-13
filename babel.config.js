module.exports = {
    presets: [
        '@babel/preset-env', // для современного JavaScript
        ['@babel/preset-react', { 'runtime': 'automatic' }] // для JSX
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties' // для свойств класса
    ]
};