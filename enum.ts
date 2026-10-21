enum Environment{
    LOCAL,
    DEVELOPMENT,
    STAGING,
    PRODUCTION,

}
 function runTests (environment:Environment) :void {
    console.log(`tests are running in ${Environment[environment]} environment`);
}
runTests(Environment.LOCAL);
