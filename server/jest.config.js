// Sync object
const config = {
    verbose: true,
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    modulePathIgnorePatterns: ["src"],
    testTimeout: 70000
};
export default config;
