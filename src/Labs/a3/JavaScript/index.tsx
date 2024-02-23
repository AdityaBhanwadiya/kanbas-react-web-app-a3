import WorkingWithArrays from "./arrays/WorkingWithArrays";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import WorkingWithFunctions from "./functions/ES5Functions";
import Destructing from "./json/Destructing";
import House from "./json/House";
import JsonStringify from "./json/JsonStringify";
import Spreading from "./json/Spreading";
import TemplateLiterals from "./string/TemplateLiterals";
import BooleanVariables from "./variables/BooleanVariables";
import VariableTypes from "./variables/VariableTypes";
import VariableAndComponents from "./variables/VariablesAndComponents";

function JavaScript(){
    console.log('Hello World!');
    return (
        <div>
            <h1>JavaScript</h1>
            <VariableAndComponents/>
            <VariableTypes/>
            <BooleanVariables/>
            <IfElse/>
            <TernaryOperator/>
            <WorkingWithFunctions/>
            <WorkingWithArrays/>
            <JsonStringify/>
            <TemplateLiterals/>
            <House/>
            <Spreading/>
            <Destructing/>
        </div>
    );

}

export default JavaScript