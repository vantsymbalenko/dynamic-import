import React from "react";
import Import from "components/DynamicImports/Import";
import {Loader} from "components/Loader/Loader";

export const DynamicImports = (props) => {
    const {path, ...restProps} = props;
    return(
        <Import path={path}>
            {(Component) => Component === null
                ? <Loader/>
                : <Component {...restProps}/>
            }
        </Import>
    );
};