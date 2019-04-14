module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
    transform: {
        // '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
        //     'jest-transform-stub',
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    testMatch: ['**/*.spec.(ts|tsx|js|jsx)']
};
