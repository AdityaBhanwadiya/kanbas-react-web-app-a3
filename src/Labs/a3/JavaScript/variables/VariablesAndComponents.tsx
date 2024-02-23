function VariableAndComponents(){
    var functionScoped = 2;
    let blckScoped = 5;
    const constant1 = functionScoped = blckScoped;

    return (
        <div>
            <h2> Variables and Constants</h2>
            functionScoped = { functionScoped }<br/>
            blckScoped = { blckScoped }<br/>
            constant1 = { constant1 }<br/>

        </div>
    );

}

export default VariableAndComponents