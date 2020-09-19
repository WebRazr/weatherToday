import React, {FC} from "react";
import Logo from "./logo/Logo";
import InputPanel from "./inputpanel/InputPanel";
import Language from "./tLanguage/Language";
import './TopBar.scss'
const TopBar: FC = () => {
    return (
        <div className={'top-bar'}>
           <Logo />
           <InputPanel />
           <Language />
        </div>
    );
};

export default TopBar;
