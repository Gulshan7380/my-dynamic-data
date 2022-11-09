import Label from "./component/Label";
import Select from "./Component/Select";


const App = () => {
    const isBool = true;
    const isNotBool = false;
    const str = 'am string';
    const digit = 123;
    //const obj = {};
    const arr = [1,2,3];
    const isNull = null;
    const isUndefined = undefined;


    const nameList = [ 'Ram', 'Sham'];

    const emplyee = {
        name: 'Ram',
        age: 24,
        designation: 'Tester'
    };
    // always use string, number, jsx or null as end result of jsx expression
    /*
        Convention of variable
        use camel case for variable names
    */
    const printData = () => {
        return (
        <div>
            this is JSX printing data
        </div>
        )
    }


    return (
        <>{/*fragment tag*/}
            <div>
                Hello World
                <div>isBool: {isBool} </div>{ /* will return blank*/}
                <div>isNotBool: {isNotBool}</div>
                <div>str: {str}</div>
                <div>digit: {digit} </div>
                { /*<div>obj: </div> thisis throwing exception */}
                <div> arr: {arr}</div> { /* print 123, this should not be used*/}
                <div>isNull: {isNull}</div>
                <div>isUndefined: {isUndefined}</div>

                <div>{ printData() }</div>

                <div>
                array List printing: {
                nameList.map((name) => name)}
                </div>
                
            </div>

            <div>
                object data printing: 
                {Object.keys(emplyee).map((key) => emplyee[key])}
            </div>
            <div>
                {/*
                    props rules
                    always pass props in camelCase
                    use {} to pass Number type data
                    use "" to pass string type data
                */}
                <textarea maxLength={5} minLength={3} placeholder="Please enter your data here..."></textarea>
            </div>

            <div>
                <Label labelText="Are  you student?" />
                <Label labelText="Are you working?" />
            </div>
            <div>   
                <Select selectText="Try selecting some text in this element" />
            </div>
        </>
    )
};

export default App;